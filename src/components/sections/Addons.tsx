import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { ADDONS, ADDONS_NOTE } from "@/lib/content";

/**
 * Addons — grid of optional extras (DESIGN.md §5.6 note). On a peach band so it
 * separates from the white sections around it.
 */
export default function Addons() {
  return (
    <section className="section-y bg-peach">
      <div className="container-site">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">— Make it yours</span>
            <h2 className="mt-4 text-ink-900 text-[clamp(36px,6vw,68px)] leading-[0.98]">
              Popular <span className="text-brand-gold">Add-Ons</span>
            </h2>
            <p className="mt-4 font-body text-[17px] leading-relaxed text-ink-700">
              Tailor your detail with a few extras for an even deeper clean and
              longer-lasting shine.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ADDONS.map((addon, i) => (
            <Reveal key={addon.name} delay={i * 80}>
              <div className="group flex h-full items-start gap-4 rounded-card border border-ink-900/10 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-[0_12px_32px_rgba(0,0,0,0.10)]">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-pill bg-ink-900 text-brand-gold transition-transform duration-200 group-hover:-translate-y-0.5">
                  <Icon name={addon.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-ink-900 text-[22px] leading-none">
                    {addon.name}
                  </h3>
                  <p className="mt-2 font-body text-[14px] leading-relaxed text-muted">
                    {addon.blurb}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 font-body text-[13px] italic text-muted">
          {ADDONS_NOTE}
        </p>
      </div>
    </section>
  );
}
