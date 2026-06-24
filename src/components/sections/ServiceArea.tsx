import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { BUSINESS, TOWNS } from "@/lib/content";

/**
 * ServiceArea (DESIGN.md §5.13) — towns + a Google Maps embed of the business
 * location. Unconfirmed towns (placeholder: true) are marked with a small dot
 * for the client to verify.
 */
interface ServiceAreaProps {
  /** Hide the internal heading when a PageHero already titles the page. */
  hideHeading?: boolean;
}

export default function ServiceArea({ hideHeading = false }: ServiceAreaProps) {
  const hasPlaceholders = TOWNS.some((t) => t.placeholder);

  return (
    <section id="service-area" className="section-y bg-white scroll-mt-24">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        {/* copy + towns */}
        <Reveal>
          <div>
            {!hideHeading && (
              <>
                <span className="eyebrow">— Where we work</span>
                <h2 className="mt-4 text-ink-900 text-[clamp(40px,6vw,72px)] leading-[0.98]">
                  Serving the{" "}
                  <span className="text-brand-gold">South Shore</span> of
                  Massachusetts
                </h2>
              </>
            )}
            <p
              className={`max-w-xl font-body text-[17px] leading-relaxed text-ink-700 ${
                hideHeading ? "" : "mt-4"
              }`}
            >
              We bring mobile detailing across the South Shore region. Don&rsquo;t
              see your town? Reach out — we likely cover it.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2.5">
              {TOWNS.map((town) => (
                <li
                  key={town.name}
                  className="inline-flex items-center gap-1.5 rounded-pill border border-ink-900/15 bg-white px-4 py-2 font-body text-[14px] font-medium text-ink-700"
                >
                  <Icon name="pin" className="h-3.5 w-3.5 text-brand-gold" />
                  {town.name}
                  {town.placeholder ? (
                    <span
                      className="ml-0.5 h-1.5 w-1.5 rounded-full bg-brand-gold"
                      title="Coverage to be confirmed"
                      aria-label="coverage to be confirmed"
                    />
                  ) : null}
                </li>
              ))}
            </ul>

            {hasPlaceholders ? (
              <p className="mt-3 font-body text-[12px] italic text-muted">
                {/* DESIGN.md §5.13 — Braintree & Weymouth confirmed; dotted towns
                    are placeholders for the client to confirm. */}
                <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-gold align-middle" />
                Coverage to be confirmed with the client.
              </p>
            ) : null}

            <div className="mt-8">
              <Button href={BUSINESS.calendly} variant="primary" external>
                Book Today
              </Button>
            </div>
          </div>
        </Reveal>

        {/* map — Google Maps embed of the Mr. Details location */}
        <Reveal delay={120}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card ring-1 ring-black/5 shadow-[0_14px_44px_rgba(0,0,0,0.10)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2954.759187620259!2d-71.0031328!3d42.219591199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d2e71dcab68bb17%3A0xad646efba265414f!2sMr.%20Details%20Auto%20Detailing!5e0!3m2!1sen!2sus!4v1782261698716!5m2!1sen!2sus"
              title="Map of Mr. Details Auto Detailing on the South Shore of Massachusetts"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
