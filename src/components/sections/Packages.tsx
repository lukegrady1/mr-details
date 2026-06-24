import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import {
  BUSINESS,
  FEATURED_PACKAGES,
  PACKAGES,
  PRICING_NOTE,
} from "@/lib/content";

interface PackagesProps {
  /** Hide the internal heading when a PageHero already titles the page. */
  hideHeading?: boolean;
  /** Show the full menu (all packages) rather than just the three core tiers. */
  showAll?: boolean;
}

/**
 * Packages (DESIGN.md §5.6) — "Choose the Right Package" card grid on a soft
 * peach band. The homepage shows the three core tiers; the Packages page shows
 * the full menu. Prices come from the client's price list.
 */
export default function Packages({
  hideHeading = false,
  showAll = false,
}: PackagesProps) {
  const items = showAll ? PACKAGES : FEATURED_PACKAGES;

  return (
    <section id="packages" className="section-y bg-peach scroll-mt-24">
      <div className="container-site">
        {!hideHeading && (
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">— Our packages</span>
              <h2 className="mt-4 text-ink-900 text-[clamp(40px,7vw,80px)] leading-[0.98]">
                Choose the Right <span className="text-brand-gold">Package</span>
              </h2>
              <p className="mt-4 font-body text-[17px] leading-relaxed text-ink-700">
                Choose between a complete interior and exterior detail, or just
                the interior or exterior. Let us service all of your vehicles at
                once.
              </p>
            </div>
          </Reveal>
        )}

        <div className={`grid gap-6 md:grid-cols-3 ${hideHeading ? "" : "mt-12"}`}>
          {items.map((pkg, i) => (
            <Reveal key={pkg.title} delay={i * 100}>
              <ServiceCard
                title={pkg.title}
                scope={pkg.scope}
                price={pkg.price}
                blurb={pkg.blurb}
                img={pkg.img}
                alt={pkg.alt}
                href={BUSINESS.calendly}
              />
            </Reveal>
          ))}
        </div>

        <p className="mt-8 font-body text-[13px] italic text-muted">
          {PRICING_NOTE}
        </p>
      </div>
    </section>
  );
}
