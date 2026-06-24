import Image from "next/image";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { BUSINESS } from "@/lib/content";

/**
 * MobileSpotlight (DESIGN.md §5.5) — the #1 differentiator gets prominence.
 * Image + copy split, gold "You" accent in the headline.
 */
export default function MobileSpotlight() {
  return (
    <section className="section-y bg-white">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        {/* image */}
        <Reveal>
          <div className="relative aspect-[5/4] overflow-hidden rounded-card ring-1 ring-black/5 shadow-[0_14px_44px_rgba(0,0,0,0.12)]">
            <Image
              src="/img/mobile-van.svg"
              alt="Mr. Details mobile detailing setup in a customer's driveway"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
            {/* floating "we come to you" tag */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-pill bg-ink-900 px-4 py-2 text-white">
              <Icon name="pin" className="h-4 w-4 text-brand-gold" />
              <span className="font-display text-[18px] tracking-[0.04em]">
                At your door
              </span>
            </div>
          </div>
        </Reveal>

        {/* copy */}
        <Reveal delay={120}>
          <div>
            <span className="eyebrow">The Mr. Details difference</span>
            <h2 className="mt-4 text-ink-900 text-[clamp(40px,6vw,72px)] leading-[0.98]">
              We Come to <span className="text-brand-gold">You</span>
            </h2>
            <p className="mt-5 max-w-xl font-body text-[17px] leading-relaxed text-ink-700">
              Enjoy the convenience of a mobile detail done at your home or
              office. We bring everything we need to get the job done — and we
              can service all of your vehicles at once.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "No drop-off, no waiting room — we come to your driveway.",
                "Home or business, on a schedule that works for you.",
                "Multiple vehicles? We handle them all in one visit.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-body text-[15px] text-ink-700"
                >
                  <Icon
                    name="sparkle"
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href={BUSINESS.calendly} variant="accent" external>
                Book Today
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
