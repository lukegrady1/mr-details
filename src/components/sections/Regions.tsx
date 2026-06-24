import Reveal from "@/components/Reveal";
import { REGIONS } from "@/lib/content";

/**
 * Regions — two-region overview (from Instagram): South Shore MA (confirmed)
 * and Southwest Florida (seasonal/unconfirmed, clearly flagged for the client).
 */
export default function Regions() {
  const hasUnconfirmed = REGIONS.some((r) => !r.confirmed);

  return (
    <section className="section-y bg-peach">
      <div className="container-site">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">— We come to you</span>
            <h2 className="mt-4 text-ink-900 text-[clamp(36px,6vw,68px)] leading-[0.98]">
              Two Coasts, One{" "}
              <span className="text-brand-gold">Standard</span>
            </h2>
            <p className="mt-4 font-body text-[17px] leading-relaxed text-ink-700">
              Mobile detailing that comes to you — on the South Shore of
              Massachusetts and in Southwest Florida.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {REGIONS.map((region, i) => (
            <Reveal key={region.name} delay={i * 110}>
              <div className="flex h-full flex-col rounded-card border border-ink-900/10 bg-white p-8 shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
                <span className="text-[40px] leading-none" aria-hidden="true">
                  {region.emoji}
                </span>
                <h3 className="mt-4 text-ink-900 text-[30px] leading-none">
                  {region.name}
                </h3>
                <p className="mt-2 font-body text-[16px] leading-relaxed text-ink-700">
                  {region.area}
                </p>
                {!region.confirmed ? (
                  <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-pill border border-brand-gold/40 bg-brand-gold/10 px-3 py-1 font-body text-[12px] font-semibold uppercase tracking-[0.1em] text-brand-gold2">
                    Seasonal · confirm availability
                  </span>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        {hasUnconfirmed ? (
          <p className="mt-6 font-body text-[12px] italic text-muted">
            {/* INSTAGRAM.md §8 — confirm whether the Florida region is currently
                active before publishing. */}
            Southwest Florida coverage is seasonal — please confirm current
            availability.
          </p>
        ) : null}
      </div>
    </section>
  );
}
