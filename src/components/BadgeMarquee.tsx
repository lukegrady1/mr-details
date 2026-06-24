import { BADGES } from "@/lib/content";

/**
 * BadgeMarquee — seamless auto-scrolling trust strip (DESIGN.md §4.4).
 * Content is duplicated so the -50% translate loops seamlessly; pauses on
 * hover. Sits on a dark band by default.
 */

interface BadgeMarqueeProps {
  /** Visual theme of the band. */
  tone?: "dark" | "peach";
}

function Diamond() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mx-6 h-3 w-3 shrink-0 text-brand-gold"
      aria-hidden="true"
    >
      <path d="M12 2l4 10-4 10-4-10 4-10z" fill="currentColor" />
    </svg>
  );
}

export default function BadgeMarquee({ tone = "dark" }: BadgeMarqueeProps) {
  const isDark = tone === "dark";
  // Two identical runs back-to-back → seamless -50% loop.
  const run = [...BADGES, ...BADGES];

  return (
    <section
      aria-label="What we offer"
      className={
        isDark
          ? "bg-ink-850 text-white border-y border-white/10"
          : "bg-peach text-ink-900 border-y border-ink-900/10"
      }
    >
      <div className="group relative flex overflow-hidden py-5 select-none">
        {/* edge fades */}
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r ${
            isDark ? "from-ink-850" : "from-peach"
          } to-transparent`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l ${
            isDark ? "from-ink-850" : "from-peach"
          } to-transparent`}
        />

        <ul
          className="flex shrink-0 items-center animate-marquee group-hover:[animation-play-state:paused]"
          aria-hidden="false"
        >
          {run.map((badge, i) => (
            <li
              key={`${badge}-${i}`}
              className="flex items-center font-display text-[22px] tracking-[0.06em] whitespace-nowrap"
            >
              <span>{badge}</span>
              <Diamond />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
