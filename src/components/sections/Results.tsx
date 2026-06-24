import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Reveal from "@/components/Reveal";
import { BEFORE_AFTERS } from "@/lib/content";

/**
 * Results (DESIGN.md §5.8) — "See the Transformation" with the signature
 * before/after sliders (interior + exterior).
 */
export default function Results() {
  return (
    <section className="section-y bg-white">
      <div className="container-site">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">— The results</span>
            <h2 className="mt-4 text-ink-900 text-[clamp(40px,7vw,80px)] leading-[0.98]">
              See the <span className="text-brand-gold">Transformation</span>
            </h2>
            <p className="mt-4 font-body text-[17px] leading-relaxed text-ink-700">
              Drag the handle to wipe between before and after — dull and dirty
              to a deep, detailed shine.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {BEFORE_AFTERS.map((ba, i) => (
            <Reveal key={ba.label} delay={i * 120}>
              <BeforeAfterSlider
                before={ba.before}
                after={ba.after}
                beforeAlt={ba.beforeAlt}
                afterAlt={ba.afterAlt}
                label={ba.label}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
