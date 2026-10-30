"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { type GalleryPhoto, getPhotoMetadata } from "@/data/gallery";

// Why: load the enlarged lightbox code only when the visitor first opens a photo
const PhotoLightbox = dynamic(() => import("./PhotoLightbox"), {
  ssr: false,
});

interface PhotoGalleryProps {
  photos?: GalleryPhoto[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const prefersReducedMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [hasLoadedLightbox, setHasLoadedLightbox] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  const photoTriggerRef = useRef<HTMLDivElement>(null);
  const expandButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);
  const didDragRef = useRef(false);

  // Track mobile (4:3) vs desktop (16:10) box aspect ratio for the 15% cover/contain rule
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setIsMobileViewport(mediaQuery.matches);
    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  const totalPhotos = photos?.length ?? 0;

  // Keep currentIndex valid if photos array length changes
  useEffect(() => {
    if (totalPhotos > 0 && currentIndex >= totalPhotos) {
      setCurrentIndex(0);
    }
  }, [totalPhotos, currentIndex]);

  const handleNext = useCallback(() => {
    if (totalPhotos <= 1) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalPhotos);
  }, [totalPhotos]);

  const handlePrev = useCallback(() => {
    if (totalPhotos <= 1) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  }, [totalPhotos]);

  const handleSelectIndex = useCallback(
    (index: number) => {
      if (index === currentIndex) return;
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  const openLightbox = (triggerEl: HTMLElement | null) => {
    lastTriggerRef.current = triggerEl;
    setHasLoadedLightbox(true);
    setIsLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    // Return keyboard focus to the exact photo or expand button the visitor clicked
    window.setTimeout(() => {
      lastTriggerRef.current?.focus();
    }, 10);
  }, []);

  // If there are no photos, show nothing extra so the card looks exactly as before
  if (!photos || totalPhotos === 0) {
    return null;
  }

  const safeIndex = currentIndex < totalPhotos ? currentIndex : 0;
  const currentPhoto = photos[safeIndex];
  const hasMultiple = totalPhotos > 1;
  const boxRatio = isMobileViewport ? 4 / 3 : 16 / 10;
  const { width, height, blurDataURL, resolvedFit } = getPhotoMetadata(
    currentPhoto,
    boxRatio
  );

  const slideVariants = {
    enter: (dir: number) => ({
      x: prefersReducedMotion ? 0 : dir > 0 ? 32 : -32,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: prefersReducedMotion ? 0 : dir > 0 ? -32 : 32,
      opacity: 0,
    }),
  };

  return (
    <>
      {/* Fixed aspect ratio: 4:3 on mobile, 16:10 on desktop so the page never jumps while loading */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-cobalt/80 bg-[#0b1a3a] select-none md:aspect-[16/10]">
        {/* Polite screen reader announcement when the slide changes */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {hasMultiple
            ? `Photo ${safeIndex + 1} of ${totalPhotos}: ${currentPhoto.caption}`
            : currentPhoto.caption}
        </div>

        {/* Clickable & swipeable photo surface */}
        <div
          ref={photoTriggerRef}
          role="button"
          tabIndex={0}
          aria-label={`Enlarge photo: ${currentPhoto.caption}`}
          onClick={() => {
            if (didDragRef.current) {
              didDragRef.current = false;
              return;
            }
            openLightbox(photoTriggerRef.current);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openLightbox(photoTriggerRef.current);
            } else if (hasMultiple && e.key === "ArrowLeft") {
              e.preventDefault();
              handlePrev();
            } else if (hasMultiple && e.key === "ArrowRight") {
              e.preventDefault();
              handleNext();
            }
          }}
          className="relative h-full w-full cursor-pointer overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-lime"
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={safeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.25 }}
              drag={hasMultiple ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragStart={() => {
                didDragRef.current = false;
              }}
              onDragEnd={(_, info) => {
                if (!hasMultiple) return;
                if (Math.abs(info.offset.x) > 10) {
                  didDragRef.current = true;
                }
                if (info.offset.x < -40) {
                  handleNext();
                } else if (info.offset.x > 40) {
                  handlePrev();
                }
              }}
              className="relative flex h-full w-full items-center justify-center bg-[#0b1a3a]"
            >
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                width={width}
                height={height}
                quality={85}
                loading="lazy"
                placeholder={blurDataURL ? "blur" : "empty"}
                blurDataURL={blurDataURL}
                sizes="(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 480px"
                className={`h-full w-full ${
                  resolvedFit === "cover" ? "object-cover" : "object-contain"
                } object-center select-none`}
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Count badge at top right (hidden when only 1 photo) */}
        {hasMultiple && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-3 z-10 rounded-full border border-cobalt/40 bg-midnight/85 px-2.5 py-1 text-xs font-semibold text-primaryText"
          >
            {safeIndex + 1} / {totalPhotos}
          </div>
        )}

        {/* Left & Right arrow buttons (hidden when only 1 photo) */}
        {hasMultiple && (
          <>
            <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-lime bg-midnight/80 text-lime transition-colors hover:bg-midnight"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-lime bg-midnight/80 text-lime transition-colors hover:bg-midnight"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </>
        )}

        {/* Short caption at bottom left */}
        <div className="pointer-events-none absolute bottom-3 left-3 z-10 max-w-[58%] truncate rounded-md border border-cobalt/40 bg-midnight/85 px-2.5 py-1 text-xs font-medium text-primaryText">
          {currentPhoto.caption}
        </div>

        {/* Dots at bottom center (hidden when only 1 photo) */}
        {hasMultiple && (
          <div
            className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-midnight/75 px-2 py-1"
            role="group"
            aria-label="Slide indicators"
          >
            {photos.map((photo, idx) => {
              const isActive = idx === safeIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to photo ${idx + 1}: ${photo.caption}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectIndex(idx);
                  }}
                  className="flex items-center justify-center p-1"
                >
                  <span
                    className={`block h-2 rounded-full transition-all duration-200 ${
                      isActive
                        ? "w-5 bg-lime"
                        : "w-2 bg-primaryText/40 hover:bg-primaryText/70"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        )}

        {/* Expand icon button at bottom right */}
        <button
          ref={expandButtonRef}
          type="button"
          aria-label="Enlarge photo"
          onClick={(e) => {
            e.stopPropagation();
            openLightbox(expandButtonRef.current);
          }}
          className="absolute bottom-2.5 right-2.5 z-10 flex h-11 w-11 items-center justify-center rounded-lg border border-cobalt/50 bg-midnight/85 text-primaryText transition-colors hover:border-lime hover:text-lime"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        </button>
      </div>

      {/* Lazily-loaded Lightbox Modal */}
      {hasLoadedLightbox && (
        <PhotoLightbox
          isOpen={isLightboxOpen}
          photos={photos}
          currentIndex={safeIndex}
          direction={direction}
          onClose={closeLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
          onSelectIndex={handleSelectIndex}
        />
      )}
    </>
  );
}
