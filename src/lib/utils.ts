import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Google Drive share links (…/file/d/ID/view, …/open?id=ID) point to a web
 * page, not the raw image, so they can't be used as an <img> / next Image src.
 * Convert them to the direct thumbnail endpoint that serves the actual bytes.
 * Non-Drive URLs are returned unchanged.
 */
export function driveImageUrl(url: string): string {
  if (!url || !url.includes("drive.google.com")) return url;
  const id =
    url.match(/\/file\/d\/([^/]+)/)?.[1] || url.match(/[?&]id=([^&]+)/)?.[1];
  if (!id) return url;
  return `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
}
