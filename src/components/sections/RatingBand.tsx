import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { REVIEWS } from "@/lib/content";

/**
 * RatingBand — a dark stats strip for the Reviews page. Figures are grounded in
 * real copy (5-star experience, fully mobile, South Shore local); the average
 * is derived from the actual REVIEWS data rather than invented.
 */

const average =
  REVIEWS.reduce((sum, r) => sum + r.stars, 0) / REVIEWS.length;

interface Stat {
  value: string;
  label: string;
  stars?: boolean;
}

const stats: Stat[] = [
  { value: average.toFixed(1), label: "Average rating", stars: true },
  { value: "5-Star", label: "Experience, every time" },
  { value: "100%", label: "Mobile — we come to you" },
  { value: "South Shore", label: "Proudly local, MA" },
];

export default function RatingBand() {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-white grain">
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-brand-gold/15 blur-3xl" />
      <div className="container-site relative z-10 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="text-center sm:text-left">
                <div className="font-display text-[clamp(40px,5vw,60px)] leading-none text-brand-gold">
                  {stat.value}
                </div>
                {stat.stars ? (
                  <div
                    className="mt-2 flex justify-center gap-0.5 text-brand-gold sm:justify-start"
                    role="img"
                    aria-label={`${average.toFixed(1)} out of 5 stars`}
                  >
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Icon key={s} name="star" className="h-4 w-4 fill-brand-gold" />
                    ))}
                  </div>
                ) : null}
                <div className="mt-2 font-body text-[14px] uppercase tracking-[0.1em] text-white/65">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 font-body text-[12px] text-white/40">
          Based on customer reviews.
        </p>
      </div>
    </section>
  );
}
