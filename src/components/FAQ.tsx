"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import type { Faq } from "@/lib/content";

/**
 * FAQ — accessible accordion. Multiple panels can be open at once; each uses a
 * grid-rows 0fr→1fr transition so it animates smoothly regardless of content
 * height. Rendered on a white or peach band.
 */

interface FAQProps {
  items: Faq[];
  eyebrow?: string;
  title: string;
  /** Word within `title` to colour gold. */
  accent?: string;
  tone?: "white" | "peach";
}

function renderTitle(title: string, accent?: string) {
  if (!accent) return title;
  const [before, after] = title.split(accent);
  return (
    <>
      {before}
      <span className="text-brand-gold">{accent}</span>
      {after}
    </>
  );
}

export default function FAQ({
  items,
  eyebrow,
  title,
  accent,
  tone = "white",
}: FAQProps) {
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (i: number): void => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section className={`section-y ${tone === "peach" ? "bg-peach" : "bg-white"}`}>
      <div className="container-site">
        <Reveal>
          <div className="max-w-2xl">
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
            <h2 className="mt-4 text-ink-900 text-[clamp(36px,6vw,68px)] leading-[0.98]">
              {renderTitle(title, accent)}
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 lg:max-w-3xl">
          {items.map((item, i) => {
            const isOpen = open.has(i);
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-button-${i}`;
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div className="overflow-hidden rounded-card border border-ink-900/10 bg-white">
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-peach/40 focus-visible:outline-none"
                    >
                      <span className="font-display text-[22px] leading-tight tracking-[0.02em] text-ink-900">
                        {item.q}
                      </span>
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-pill bg-ink-900 text-brand-gold transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        aria-hidden="true"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.4}
                          strokeLinecap="round"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 font-body text-[15px] leading-relaxed text-ink-700">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
