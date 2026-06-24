import Reveal from "@/components/Reveal";
import { STEPS } from "@/lib/content";

interface HowItWorksProps {
  /** Hide the internal heading when a PageHero already titles the page. */
  hideHeading?: boolean;
}

/**
 * HowItWorks (DESIGN.md §5.12) — numbered 4-step stepper. Horizontal on
 * desktop with a dashed connector, vertical on mobile.
 */
export default function HowItWorks({ hideHeading = false }: HowItWorksProps) {
  return (
    <section
      id="how-it-works"
      className="section-y bg-peach scroll-mt-24"
    >
      <div className="container-site">
        {!hideHeading && (
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">— The process</span>
              <h2 className="mt-4 text-ink-900 text-[clamp(40px,7vw,80px)] leading-[0.98]">
                How It <span className="text-brand-gold">Works</span>
              </h2>
              <p className="mt-4 font-body text-[17px] leading-relaxed text-ink-700">
                Four simple steps from booking to a showroom-clean vehicle.
              </p>
            </div>
          </Reveal>
        )}

        <ol
          className={`relative grid gap-10 md:grid-cols-4 md:gap-6 ${
            hideHeading ? "" : "mt-14"
          }`}
        >
          {/* dashed connector (desktop) */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-7 hidden border-t-2 border-dashed border-ink-900/20 md:block"
            aria-hidden="true"
          />

          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 110}>
              <li className="relative flex gap-5 md:flex-col md:gap-4">
                <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-pill bg-ink-900 font-display text-[26px] text-brand-gold ring-4 ring-peach">
                  {step.n}
                </span>
                <div>
                  <h3 className="text-ink-900 text-[24px] leading-none">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-body text-[15px] leading-relaxed text-ink-700">
                    {step.blurb}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
