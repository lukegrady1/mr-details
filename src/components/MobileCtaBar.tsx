"use client";

import { useEffect, useState } from "react";
import { BUSINESS } from "@/lib/content";

/**
 * MobileCtaBar — sticky bottom call-to-action bar (mobile only). Holds a
 * tap-to-call button (shows the number) and a Book Today button. Hidden while
 * the hero/first screen is in view, then slides up once the user scrolls past
 * it.
 */
export default function MobileCtaBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // reveal once the first screen (hero) has mostly scrolled away
      setShow(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 flex gap-2.5 border-t border-white/10 bg-ink-850/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur transition-transform duration-300 ease-out lg:hidden ${
        show ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
    >
      {/* tap-to-call — shows the number */}
      <a
        href={BUSINESS.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-pill border-2 border-white/30 px-3 py-3 font-display text-[17px] tracking-[0.02em] text-white transition-colors hover:border-white/60 focus-visible:outline-none"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 shrink-0"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1.1L6.6 10.8z" />
        </svg>
        {BUSINESS.phoneDisplay}
      </a>

      {/* book today */}
      <a
        href={BUSINESS.calendly}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center rounded-pill bg-brand-gold px-3 py-3 font-display text-[17px] tracking-[0.02em] text-ink-900 transition-colors hover:bg-brand-gold2 focus-visible:outline-none"
      >
        Book Today
      </a>
    </div>
  );
}
