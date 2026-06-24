"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

/**
 * BeforeAfterSlider — signature element (DESIGN.md §4.3).
 * Two stacked images; the "after" layer is clipped by `pos`%. A gold grab
 * handle drives `pos` via pointer/touch (onPointer*) and the keyboard
 * (Arrow keys). All drag math is typed `number` — no `any`.
 */

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  /** Small tag, e.g. "Interior". */
  label: string;
}

const clamp = (n: number): number => Math.min(100, Math.max(0, n));

export default function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  label,
}: BeforeAfterSliderProps) {
  const [pos, setPos] = useState<number>(50);
  const [dragging, setDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const setFromClientX = useCallback((clientX: number): void => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(clamp(pct));
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>): void => {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    setDragging(true);
    setFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>): void => {
    if (!dragging) return;
    setFromClientX(e.clientX);
  };

  const endDrag = (): void => setDragging(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    const step = e.shiftKey ? 10 : 4;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPos((p) => clamp(p - step));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPos((p) => clamp(p + step));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPos(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPos(100);
    }
  };

  return (
    <figure className="w-full">
      <div
        ref={containerRef}
        className={`relative aspect-[4/3] w-full overflow-hidden rounded-card ring-1 ring-black/10 select-none ${
          dragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
      >
        {/* BEFORE — base layer */}
        <Image
          src={before}
          alt={beforeAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 560px"
          className="object-cover"
          draggable={false}
        />

        {/* AFTER — clipped overlay (reveals from the left as pos grows) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={after}
            alt={afterAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-cover"
            draggable={false}
          />
        </div>

        {/* corner tags */}
        <span className="absolute left-3 top-3 rounded bg-ink-900/80 px-2.5 py-1 font-display text-[15px] tracking-[0.12em] text-white">
          BEFORE
        </span>
        <span className="absolute right-3 top-3 rounded bg-brand-gold px-2.5 py-1 font-display text-[15px] tracking-[0.12em] text-ink-900">
          AFTER
        </span>

        {/* divider + handle */}
        <div
          className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
          style={{ left: `${pos}%` }}
        >
          <div
            role="slider"
            tabIndex={0}
            aria-label={`Reveal the ${label.toLowerCase()} after-detail image`}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            aria-valuetext={`${Math.round(pos)}% revealed`}
            onKeyDown={handleKeyDown}
            className="absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand-gold text-ink-900 shadow-[0_4px_14px_rgba(0,0,0,0.3)] focus-visible:outline-none cursor-grab active:cursor-grabbing"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />
            </svg>
          </div>
        </div>
      </div>

      <figcaption className="mt-3 text-center font-body text-[13px] uppercase tracking-[0.12em] text-muted">
        {label} — drag or use arrow keys
      </figcaption>
    </figure>
  );
}
