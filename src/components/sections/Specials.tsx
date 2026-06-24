import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import {
  BUSINESS,
  GIFT_CARDS,
  SPECIAL_OFFERS,
  SPECIALS_NOTE,
} from "@/lib/content";

/**
 * Specials — real deals from the client's price list (2-car sale, monthly
 * maintenance plan) plus a year-round gift-card callout. Sale/seasonal items
 * are flagged via SPECIALS_NOTE — confirm current availability before publishing.
 */
export default function Specials() {
  return (
    <section className="section-y bg-white">
      <div className="container-site">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">— Save more</span>
            <h2 className="mt-4 text-ink-900 text-[clamp(36px,6vw,68px)] leading-[0.98]">
              Specials &amp; <span className="text-brand-gold">Gift Cards</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* priced special offers */}
          {SPECIAL_OFFERS.map((offer, i) => (
            <Reveal key={offer.title} delay={i * 100}>
              <div className="flex h-full flex-col rounded-card border border-ink-900/10 bg-peach/50 p-8">
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-pill bg-ink-900 text-brand-gold">
                    <Icon name={offer.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-display text-[30px] leading-none text-brand-gold2">
                    {offer.price}
                  </span>
                </div>
                <h3 className="mt-5 text-ink-900 text-[26px] leading-none">
                  {offer.title}
                </h3>
                <p className="mt-2 font-body text-[15px] leading-relaxed text-ink-700">
                  {offer.blurb}
                </p>
              </div>
            </Reveal>
          ))}

          {/* gift cards — no fixed price */}
          <Reveal delay={SPECIAL_OFFERS.length * 100}>
            <div className="flex h-full flex-col rounded-card border border-ink-900/10 bg-ink-900 p-8 text-white">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-pill bg-brand-gold text-ink-900">
                <Icon name="gift" className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-[26px] leading-none text-white">
                {GIFT_CARDS.title}
              </h3>
              <p className="mt-2 font-body text-[15px] leading-relaxed text-white/75">
                {GIFT_CARDS.blurb}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href={BUSINESS.calendly} variant="accent" external>
            Book Today
          </Button>
          <p className="font-body text-[13px] italic text-muted">
            {SPECIALS_NOTE}
          </p>
        </div>
      </div>
    </section>
  );
}
