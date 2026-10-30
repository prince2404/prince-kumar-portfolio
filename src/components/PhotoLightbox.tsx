"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { type GalleryPhoto, getPhotoMetadata } from "@/data/gallery";

interface PhotoLightboxProps {
  isOpen: boolean;
  photos: GalleryPhoto[];
  currentIndex: number;
  direction: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelectIndex: (index: number) => void;
}

export default function PhotoLightbox({
  isOpen,
  photos,
  currentIndex,
  direction,
  onClose,
  onPrev,
  onNext,
  onSelectIndex,
}: PhotoLightboxProps) {
  const prefersReducedMotion = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const hasMultiple = photos.length > 1;
  const currentPhoto = photos[currentIndex] ?? photos[0];
  const { blurDataURL } = getPhotoMetadata(currentPhoto);

  // Adjacent indices for preloading next and previous photos
  const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
  const nextIndex = (currentIndex + 1) % photos.length;

  // Lock background page scroll while enlarged view is open and focus the close button
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 10);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Handle Escape, Left/Right arrows, and focus trapping inside the modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (hasMultiple && event.key === "ArrowLeft") {
        event.preventDefault();
        onPrev();
        return;
      }

      if (hasMultiple && event.key === "ArrowRight") {
        event.preventDefault();
        onNext();
        return;
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusableElements = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => el.offsetParent !== null);

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, hasMultiple, onClose, onPrev, onNext]);

  if (typeof document === "undefined") return null;

  const slideVariants = {
    enter: (dir: number) => ({
      x: prefersReducedMotion ? 0 : dir > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: prefersReducedMotion ? 0 : dir > 0 ? -40 : 40,
      opacity: 0,
    }),
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.2 }}
          onClick={onClose}
          /* Why: Removed blue background; keeps the actual page screen visible behind with a strong blur */
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-midnight/75 backdrop-blur-md px-3 py-4 select-none sm:px-6 sm:py-6"
        >
          {/* Polite live region for screen readers */}
          <div className="sr-only" aria-live="polite" aria-atomic="true">
            {hasMultiple
              ? `Photo ${currentIndex + 1} of ${photos.length}: ${currentPhoto.caption}`
              : currentPhoto.caption}
          </div>

          {/* Close button (X) at top right */}
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="fixed right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-cobalt/60 bg-midnight/90 text-primaryText shadow-lg transition-transform duration-150 hover:scale-105 hover:border-lime sm:right-6 sm:top-6 sm:h-12 sm:w-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Desktop left arrow button */}
          {hasMultiple && (
            <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="fixed left-4 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-lime bg-midnight/90 text-lime shadow-lg transition-transform duration-150 hover:scale-105 md:flex lg:left-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* Desktop right arrow button */}
          {hasMultiple && (
            <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="fixed right-4 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-lime bg-midnight/90 text-lime shadow-lg transition-transform duration-150 hover:scale-105 md:flex lg:right-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}

          {/* Enlarged photo container: takes 80% of the screen on desktop (80vw x 76vh) and 90vw on mobile, on the same page */}
          <motion.div
            initial={{ scale: prefersReducedMotion ? 1 : 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: prefersReducedMotion ? 1 : 0.96, opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex h-[64vh] w-[92vw] items-center justify-center overflow-hidden rounded-2xl border border-cobalt/60 bg-surface/90 p-2 shadow-2xl sm:h-[72vh] sm:w-[84vw] sm:p-4 lg:h-[78vh] lg:w-[80vw]"
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: prefersReducedMotion ? 0.01 : 0.25 }}
                drag={hasMultiple ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(_, info) => {
                  if (!hasMultiple) return;
                  if (info.offset.x < -40) {
                    onNext();
                  } else if (info.offset.x > 40) {
                    onPrev();
                  }
                }}
                className="relative h-full w-full"
              >
                <Image
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  fill
                  quality={90}
                  priority
                  placeholder={blurDataURL ? "blur" : "empty"}
                  blurDataURL={blurDataURL}
                  sizes="80vw"
                  className="object-contain select-none"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Caption, Count, Desktop Thumbnail Strip, and Mobile Arrows */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="mt-3 flex flex-col items-center text-center"
          >
            <div className="flex items-center gap-2.5 rounded-full border border-cobalt/40 bg-midnight/85 px-4 py-1">
              <p className="text-xs font-medium text-primaryText sm:text-sm">
                {currentPhoto.caption}
              </p>
              {hasMultiple && (
                <>
                  <span className="text-cobalt">•</span>
                  <p className="text-xs font-semibold text-lime">
                    {currentIndex + 1} / {photos.length}
                  </p>
                </>
              )}
            </div>

            {/* Desktop Thumbnail Strip */}
            {hasMultiple && (
              <div
                className="mt-2.5 hidden flex-wrap items-center justify-center gap-2 md:flex"
                role="group"
                aria-label="Photo thumbnails"
              >
                {photos.map((photo, index) => {
                  const isActive = index === currentIndex;
                  const meta = getPhotoMetadata(photo);
                  return (
                    <button
                      key={index}
                      type="button"
                      aria-label={`View photo ${index + 1}: ${photo.caption}`}
                      aria-current={isActive ? "true" : undefined}
                      onClick={() => onSelectIndex(index)}
                      className={`relative h-11 w-18 overflow-hidden rounded-lg border-2 bg-surface transition-transform duration-150 ${
                        isActive
                          ? "scale-105 border-lime shadow-md"
                          : "border-cobalt/40 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={meta.width}
                        height={meta.height}
                        quality={60}
                        sizes="72px"
                        className="h-full w-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            )}

            {/* Mobile Previous & Next Arrow Buttons below caption */}
            {hasMultiple && (
              <div className="mt-3 flex items-center justify-center gap-6 md:hidden">
                <button
                  type="button"
                  aria-label="Previous photo"
                  onClick={onPrev}
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-lime bg-midnight/90 text-lime shadow-md active:scale-95"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>

                <button
                  type="button"
                  aria-label="Next photo"
                  onClick={onNext}
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-lime bg-midnight/90 text-lime shadow-md active:scale-95"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Hidden preloader for previous and next photos so navigating is instant */}
          {hasMultiple && (
            <div
              className="pointer-events-none sr-only h-0 w-0 overflow-hidden"
              aria-hidden="true"
            >
              {[prevIndex, nextIndex].map((idx) => {
                const preloadPhoto = photos[idx];
                const meta = getPhotoMetadata(preloadPhoto);
                return (
                  <Image
                    key={`preload-${idx}`}
                    src={preloadPhoto.src}
                    alt=""
                    width={meta.width}
                    height={meta.height}
                    quality={90}
                    priority
                    sizes="80vw"
                  />
                );
              })}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
