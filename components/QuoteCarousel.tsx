"use client";

import { useState, useEffect, useRef, useCallback } from "react";

type Quote = { text: string; author: string; role: string };

interface QuoteCarouselProps {
  quotes: readonly Quote[];
  locale: "it" | "en";
}

const SLIDE_INTERVAL = 10_000; // 10 s

export default function QuoteCarousel({ quotes, locale: _locale }: QuoteCarouselProps) {
  // How many cards are visible at once — 3 on md+, 1 on mobile.
  // We track this in state so SSR stays consistent (default 1).
  const [visibleCount, setVisibleCount] = useState(1);
  const [index, setIndex] = useState(0);    // index of the FIRST visible card
  const [animating, setAnimating] = useState<"left" | "right" | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);
  const total = quotes.length;

  // Sync visible count to viewport width after mount
  useEffect(() => {
    const update = () => setVisibleCount(window.innerWidth >= 768 ? 3 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const scheduleNext = useCallback(() => {
    clearTimer();
    if (!isPaused) {
      timerRef.current = setTimeout(() => {
        // advance 1 step to the right
        setAnimating("right");
      }, SLIDE_INTERVAL);
    }
  }, [clearTimer, isPaused]);

  // Whenever animating triggers, commit the index change after transition ends
  useEffect(() => {
    if (animating === null) return;

    const dir = animating;
    const t = setTimeout(() => {
      setIndex((prev) => {
        if (dir === "right") return (prev + 1) % total;
        return (prev - 1 + total) % total;
      });
      setAnimating(null);
    }, 420); // match CSS transition duration

    return () => clearTimeout(t);
  }, [animating, total]);

  // (Re-)schedule auto-advance whenever index settles or pause state changes
  useEffect(() => {
    scheduleNext();
    return clearTimer;
  }, [index, animating, scheduleNext, clearTimer]);

  const goNext = useCallback(() => {
    if (animating) return;
    clearTimer();
    setAnimating("right");
  }, [animating, clearTimer]);

  const goPrev = useCallback(() => {
    if (animating) return;
    clearTimer();
    setAnimating("left");
  }, [animating, clearTimer]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    touchStartX.current = null;
    if (delta > 40) goNext();
    else if (delta < -40) goPrev();
  }, [goNext, goPrev]);

  // Build the ordered slice of cards to render (visibleCount + 2 buffer slots).
  // We always render visibleCount + 2 cards so we can slide one in from either side.
  const bufferCount = visibleCount + 2;

  // Indices of the cards currently in the render window.
  // Slot 0 is the hidden card coming in from the left,
  // slots 1…visibleCount are the visible cards,
  // slot visibleCount+1 is the hidden card to the right.
  const windowIndices: number[] = [];
  for (let i = -1; i <= visibleCount; i++) {
    windowIndices.push((index + i + total) % total);
  }

  // CSS translateX for the outer track:
  // Normally the track sits so slot index=1 is at the left edge of the container.
  // Each card is (100 / visibleCount)% wide inside the container.
  // The track itself is bufferCount cards wide = (bufferCount / visibleCount * 100)%.
  // Default offset: shift left by 1 card width to hide the left-buffer card.
  const cardWidthPct = 100 / visibleCount;
  let trackOffsetPct = -cardWidthPct; // hide the leading buffer card

  if (animating === "right") trackOffsetPct = -cardWidthPct * 2; // slide left
  if (animating === "left") trackOffsetPct = 0;                   // slide right

  return (
    <div
      className="relative mx-auto max-w-5xl select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Overflow clip wrapper ───────────────────────────────────── */}
      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* ── Sliding track ───────────────────────────────────────── */}
        <div
          className="flex"
          style={{
            width: `${(bufferCount / visibleCount) * 100}%`,
            transform: `translateX(${trackOffsetPct / (bufferCount / visibleCount)}%)`,
            transition: animating ? "transform 0.42s cubic-bezier(0.32,0.72,0,1)" : "none",
          }}
        >
          {windowIndices.map((qi, slot) => {
            const q = quotes[qi];
            return (
              <div
                key={`${qi}-${slot}`}
                className="px-3"
                style={{ width: `${100 / bufferCount}%` }}
              >
                <blockquote className="flex h-full flex-col rounded-bezel border border-white/10 bg-white/5 p-8">
                  <p className="font-display text-lg italic leading-relaxed text-cream/90">
                    &ldquo;{q.text}&rdquo;
                  </p>
                  <footer className="mt-6">
                    <p className="text-sm font-semibold text-gold-bright">{q.author}</p>
                    <p className="mt-0.5 text-xs uppercase tracking-[0.15em] text-gold/60">
                      {q.role}
                    </p>
                  </footer>
                </blockquote>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Navigation arrows ───────────────────────────────────────── */}
      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          onClick={goPrev}
          aria-label="Previous quote"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold/70 transition-colors duration-200 hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
        >
          <span className="text-xl leading-none" aria-hidden="true">‹</span>
        </button>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (animating) return;
                clearTimer();
                setIndex(i);
              }}
              aria-label={`Go to quote ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none ${
                i === index
                  ? "w-6 bg-gold"
                  : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          aria-label="Next quote"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold/70 transition-colors duration-200 hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
        >
          <span className="text-xl leading-none" aria-hidden="true">›</span>
        </button>
      </div>
    </div>
  );
}
