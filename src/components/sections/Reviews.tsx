import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { REVIEWS } from "@/lib/content";

/** Row of gold stars. */
function Stars({ count }: { count: number }) {
  return (
    <div
      className="flex gap-1 text-brand-gold"
      role="img"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          className={`h-5 w-5 ${i < count ? "fill-brand-gold" : "opacity-25"}`}
        />
      ))}
    </div>
  );
}

interface ReviewsProps {
  /** Hide the internal heading when a PageHero already titles the page. */
  hideHeading?: boolean;
}

/**
 * Reviews (DESIGN.md §5.9) — real testimonials. Horizontal scroll-snap on
 * mobile, grid on md+.
 */
export default function Reviews({ hideHeading = false }: ReviewsProps) {
  return (
    <section id="reviews" className="section-y bg-ink-900 text-white scroll-mt-24">
      <div className="container-site">
        {!hideHeading && (
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">— 5-Star reviews</span>
              <h2 className="mt-4 text-[clamp(40px,7vw,80px)] leading-[0.98]">
                Don&rsquo;t Just Take{" "}
                <span className="text-brand-gold">Our Word</span>
              </h2>
            </div>
          </Reveal>
        )}

        <div
          className={`flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 ${
            hideHeading ? "" : "mt-12"
          }`}
        >
          {REVIEWS.map((review, i) => (
            <Reveal
              key={review.name}
              delay={i * 110}
              className="min-w-[85%] snap-center sm:min-w-[60%] md:min-w-0"
            >
              <figure className="flex h-full flex-col rounded-card border border-white/10 bg-white/[0.03] p-8">
                <Stars count={review.stars} />
                <blockquote className="mt-5 font-body text-[19px] leading-relaxed text-white/90">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <span className="block font-display text-[22px] tracking-[0.04em] text-white">
                    {review.name}
                  </span>
                  <span className="font-body text-[13px] uppercase tracking-[0.12em] text-brand-gold">
                    {review.location}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
