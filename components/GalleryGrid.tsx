"use client";

import { useState, useCallback } from "react";
import type { FotoGalleria } from "@/content/galleria";
import GalleryLightbox from "./GalleryLightbox";
import { BASE_PATH } from "@/lib/basePath";

interface GalleryGridProps {
  photos: readonly FotoGalleria[];
  locale: "it" | "en";
}

export default function GalleryGrid({ photos, locale }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const total = photos.length;

  const open = useCallback((i: number) => setLightboxIndex(i), []);
  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + total) % total : null)), [total]);
  const next = useCallback(() =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % total : null)), [total]);

  return (
    <>
      <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [column-fill:_balance]">
        {photos.map((foto, index) => (
          <figure
            key={foto.file}
            className="group mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/5 transition-colors duration-300 hover:border-gold/30"
            onClick={() => open(index)}
          >
            <div className="relative overflow-hidden">
              <img
                src={`${BASE_PATH}${foto.file}`}
                alt={foto.alt[locale]}
                loading={index < 8 ? undefined : "lazy"}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
                <span className="scale-75 text-3xl text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  ⊕
                </span>
              </div>
            </div>
            <figcaption className="px-3 py-2.5 text-xs leading-relaxed text-cream/70">
              {foto.caption[locale]}
            </figcaption>
          </figure>
        ))}
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          photos={photos}
          index={lightboxIndex}
          locale={locale}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
