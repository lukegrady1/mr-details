import Image from "next/image";
import Button from "@/components/Button";
import { BUSINESS } from "@/lib/content";

/** Splits the headline so the accent word can be wrapped in gold. */
function AccentHeadline() {
  const { headline, headlineAccent } = BUSINESS;
  const [before, after] = headline.split(headlineAccent);
  return (
    <>
      {before}
      <span className="text-brand-gold">{headlineAccent}</span>
      {after}
    </>
  );
}

/**
 * Hero — full-bleed near-black band over a darkened detail photo. Mirrors the
 * sibling-site (Spear) hero: min-h-[88vh] with py-32/40 so the content fills
 * the screen, letting the feature bar below overlap its bottom edge.
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-ink-850 text-white grain"
    >
      {/* Background photo + dark overlay so white text always pops.
          Swap public/img/hero-car.svg for a real photo to change this. */}
      <Image
        src="/img/hero-car.svg"
        alt="A freshly detailed car gleaming at dusk"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover opacity-70"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-850/85 via-ink-850/65 to-ink-850/90" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-850 via-ink-850/80 to-transparent" />

      <div className="container-site relative z-10 py-32 md:py-40">
        <div className="max-w-2xl">
          <p className="eyebrow">— We come to you</p>

          <h1 className="mt-5 font-display text-[clamp(48px,8vw,84px)] leading-[1.02] tracking-[0.01em] text-white">
            <AccentHeadline />
          </h1>

          <p className="mt-6 max-w-xl font-body text-[clamp(16px,2vw,19px)] leading-relaxed text-white/85">
            {BUSINESS.subhead} At your home or office across the{" "}
            {BUSINESS.region} — interior, exterior, or both.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={BUSINESS.calendly} variant="accent" external>
              Book Today
            </Button>
            <Button href={BUSINESS.phoneHref} variant="ghost-light">
              Call {BUSINESS.phoneDisplay}
            </Button>
          </div>

          <p className="mt-6 font-body text-[14px] font-medium uppercase tracking-[0.12em] text-white/60">
            Mobile Service · South Shore, MA · 5-Star Experience
          </p>
        </div>
      </div>
    </section>
  );
}
