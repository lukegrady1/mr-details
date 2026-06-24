import Image from "next/image";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { BUSINESS } from "@/lib/content";

/**
 * About (DESIGN.md §5.10) — brand story. Copy + detailer photo, with a
 * "South Shore, MA • Mobile" badge and an Instagram link.
 */
interface AboutProps {
  /** Hide the internal heading when a PageHero already titles the page. */
  hideHeading?: boolean;
}

export default function About({ hideHeading = false }: AboutProps) {
  return (
    <section className="section-y bg-peach">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
        {/* copy */}
        <Reveal>
          <div>
            {!hideHeading && (
              <>
                <span className="eyebrow">— Our story</span>
                <h2 className="mt-4 text-ink-900 text-[clamp(40px,6vw,72px)] leading-[0.98]">
                  Detailing That Comes{" "}
                  <span className="text-brand-gold">To You</span>
                </h2>
              </>
            )}
            <p
              className={`max-w-xl font-body text-[17px] leading-relaxed text-ink-700 ${
                hideHeading ? "" : "mt-5"
              }`}
            >
              Mr. Details is a mobile detailing service delivering a 5-star
              experience across the {BUSINESS.region} — bringing professional
              interior and exterior detailing right to your home or business,
              with the convenience to service all of your vehicles at once.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-pill bg-ink-900 px-4 py-2 font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-gold">
                <Icon name="pin" className="h-4 w-4" />
                South Shore, MA · Mobile
              </span>
              <Button href={BUSINESS.instagram} variant="ghost" external>
                Follow {BUSINESS.instagramHandle}
              </Button>
            </div>
          </div>
        </Reveal>

        {/* photo */}
        <Reveal delay={120}>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-card ring-1 ring-black/10 shadow-[0_16px_44px_rgba(0,0,0,0.18)]">
            <Image
              src="/img/about.svg"
              alt="A Mr. Details professional detailing a vehicle on-site"
              fill
              sizes="(max-width: 1024px) 100vw, 384px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
