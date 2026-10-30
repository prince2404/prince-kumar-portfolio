import type { StaticImageData } from "next/image";

// 1. Import your 3 NEW photos for Project 1: Apna Swasthya Kendra (ASK)
import ask1 from "../../public/images/placeholders/ask-1.png";
import ask2 from "../../public/images/placeholders/ask-2.png";
import ask3 from "../../public/images/placeholders/ask-3.png";

// 2. Keep the 3 EXISTING photos for Project 2: Java Spring Microservices
import photo1 from "../../public/images/placeholders/photo-1.jpg";
import photo2 from "../../public/images/placeholders/photo-2.jpg";
import photo3 from "../../public/images/placeholders/photo-3.jpg";

export interface GalleryPhoto {
  src: StaticImageData | string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
  fit?: "cover" | "contain";
}

// Photos for Project 1: Apna Swasthya Kendra (ASK)
const askPhotos: GalleryPhoto[] = [
  {
    src: ask1,
    alt: "Apna Swasthya Kendra screenshot 1",
    caption: "Login page", // Change caption as you like
  },
  {
    src: ask2,
    alt: "Apna Swasthya Kendra screenshot 2",
    caption: "Admin Dashboard", // Change caption as you like
  },
  {
    src: ask3,
    alt: "Apna Swasthya Kendra screenshot 3",
    caption: "Super admin panel", // Change caption as you like
  },
];

// Photos for Project 2: Java Spring Microservices
const microservicesPhotos: GalleryPhoto[] = [
  {
    src: photo1,
    alt: "Postman API Gateway request and JWT validation",
    caption: "API Gateway & JWT Auth",
  },
  {
    src: photo2,
    alt: "Spring Boot PatientService implementation in IntelliJ IDEA",
    caption: "Patient Service (gRPC & Kafka)",
  },
  {
    src: photo3,
    alt: "Five Spring Boot microservices running in Docker Desktop",
    caption: "Docker Containers Running",
  },
];

export type GalleryKey =
  | "project-ask"
  | "project-microservices"
  | "project-group-chat";

// 3. Connect each project key to its own photo list
export const gallery: Record<GalleryKey, GalleryPhoto[]> = {
  "project-ask": askPhotos,
  "project-microservices": microservicesPhotos,
  "project-group-chat": microservicesPhotos,
};

// Keep the existing getPhotoMetadata() function below unchanged...
export function getPhotoMetadata(photo: GalleryPhoto, boxAspectRatio = 1.6) {
  const isStatic = typeof photo.src === "object" && photo.src !== null;
  const width = isStatic
    ? (photo.src as StaticImageData).width
    : (photo.width ?? 1024);
  const height = isStatic
    ? (photo.src as StaticImageData).height
    : (photo.height ?? 576);
  const blurDataURL = isStatic
    ? (photo.src as StaticImageData).blurDataURL
    : undefined;

  const ratio = width / height;
  const orientation: "landscape" | "portrait" | "square" =
    Math.abs(ratio - 1) <= 0.08
      ? "square"
      : ratio > 1
        ? "landscape"
        : "portrait";

  const isCloseToBox = Math.abs(ratio - boxAspectRatio) / boxAspectRatio <= 0.15;
  const resolvedFit: "cover" | "contain" =
    photo.fit ?? (isCloseToBox ? "cover" : "contain");

  return {
    width,
    height,
    blurDataURL,
    ratio,
    orientation,
    resolvedFit,
  };
}