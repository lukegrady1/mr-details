import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { VALUES } from "@/lib/content";

interface ValueCardsProps {
  /** Hide the internal heading when a PageHero already titles the page. */
  hideHeading?: boolean;
}

/**
 * ValueCards (DESIGN.md §5.11) — "Why Mr. Details" four value blocks with big
 * gold Bebas initials over icon + title + one line.
 */
export default function ValueCards({ hideHeading = false }: ValueCardsProps) {
  return (
    <section className="section-y bg-white">
      <div className="container-site">
        {!hideHeading && (
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">— Why Mr. Details</span>
              <h2 className="mt-4 text-ink-900 text-[clamp(40px,7vw,80px)] leading-[0.98]">
                Built on a <span className="text-brand-gold">5-Star</span>{" "}
                Standard
              </h2>
            </div>
          </Reveal>
        )}

        <div
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ${
            hideHeading ? "" : "mt-12"
          }`}
        >
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 90}>
              <div className="group relative h-full overflow-hidden rounded-card border border-ink-900/10 bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)]">
                {/* watermark initial */}
                <span className="pointer-events-none absolute -right-2 -top-5 font-display text-[110px] leading-none text-peach transition-colors group-hover:text-brand-gold/20">
                  {value.initial}
                </span>
                <span className="relative grid h-12 w-12 place-items-center rounded-pill bg-ink-900 text-brand-gold">
                  <Icon name={value.icon} className="h-6 w-6" />
                </span>
                <h3 className="relative mt-5 text-ink-900 text-[24px] leading-none">
                  {value.title}
                </h3>
                <p className="relative mt-2 font-body text-[15px] leading-relaxed text-muted">
                  {value.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
