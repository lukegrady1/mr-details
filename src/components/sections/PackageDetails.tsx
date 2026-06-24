import Reveal from "@/components/Reveal";
import { PACKAGE_DETAILS, PACKAGE_DETAILS_NOTE } from "@/lib/content";

/** Small gold check used in the includes lists. */
function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

/**
 * PackageDetails — "What's included" breakdown for each package. Three columns
 * of checklists, with an honest note that exact contents are confirmed at
 * booking (DESIGN.md §5.6 — pricing/contents are client-provided data).
 */
export default function PackageDetails() {
  return (
    <section className="section-y bg-white">
      <div className="container-site">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">— What&rsquo;s included</span>
            <h2 className="mt-4 text-ink-900 text-[clamp(36px,6vw,68px)] leading-[0.98]">
              Every Detail, <span className="text-brand-gold">Covered</span>
            </h2>
            <p className="mt-4 font-body text-[17px] leading-relaxed text-ink-700">
              Here&rsquo;s what goes into each package — a thorough, hand-done
              clean from top to bottom.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PACKAGE_DETAILS.map((pkg, i) => (
            <Reveal key={pkg.title} delay={i * 100}>
              <div className="flex h-full flex-col rounded-card border border-ink-900/10 bg-white p-7 shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
                <span className="self-start rounded-pill bg-peach px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-900">
                  {pkg.scope}
                </span>
                <h3 className="mt-4 text-ink-900 text-[28px] leading-none">
                  {pkg.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 font-body text-[15px] leading-snug text-ink-700"
                    >
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 font-body text-[13px] italic text-muted">
          {PACKAGE_DETAILS_NOTE}
        </p>
      </div>
    </section>
  );
}
