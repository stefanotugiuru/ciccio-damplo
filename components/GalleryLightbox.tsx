"use client";

import { useEffect, useRef } from "react";
import { BASE_PATH } from "@/lib/basePath";
import type { FotoGalleria } from "@/content/galleria";

interface LightboxProps {
  photos: readonly FotoGalleria[];
  index: number;
  locale: "it" | "en";
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function GalleryLightbox({
  photos,
  index,
  locale,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const photo = photos[index];
  const touchStartX = useRef<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [onClose, onPrev, onNext]);

  // Lock body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-sm"
      onClick={onClose}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const delta = touchStartX.current - e.changedTouches[0].clientX;
        touchStartX.current = null;
        if (delta > 40) onNext();
        else if (delta < -40) onPrev();
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Chiudi"
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/70 transition-colors hover:border-white/60 hover:text-white"
      >
        <span className="text-xl leading-none" aria-hidden="true">✕</span>
      </button>

      {/* Counter */}
      <p className="absolute left-4 top-5 z-10 text-xs uppercase tracking-[0.15em] text-white/40">
        {index + 1} / {photos.length}
      </p>

      {/* Content — stops click propagation so clicking image/caption doesn't close */}
      <div
        className="relative flex max-h-screen w-full max-w-4xl flex-col items-center gap-4 px-16 py-16"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={photo.file}
          src={`${BASE_PATH}${photo.file}`}
          alt={photo.alt[locale]}
          className="max-h-[75vh] max-w-full rounded-xl object-contain shadow-2xl"
        />
        <p className="text-center text-sm leading-relaxed text-cream/70 md:text-base">
          {photo.caption[locale]}
        </p>
      </div>

      {/* Prev arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Foto precedente"
        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-black/60 text-gold/70 transition-colors hover:border-gold hover:text-gold md:left-6"
      >
        <span className="text-2xl leading-none" aria-hidden="true">‹</span>
      </button>

      {/* Next arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Foto successiva"
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-black/60 text-gold/70 transition-colors hover:border-gold hover:text-gold md:right-6"
      >
        <span className="text-2xl leading-none" aria-hidden="true">›</span>
      </button>
    </div>
  );
}
