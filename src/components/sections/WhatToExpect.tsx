import Reveal from "@/components/Reveal";
import { WE_BRING, WE_NEED } from "@/lib/content";

function Check({ tone }: { tone: "gold" | "ink" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`mt-0.5 h-4 w-4 shrink-0 ${
        tone === "gold" ? "text-brand-gold" : "text-ink-900"
      }`}
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
 * WhatToExpect — sets expectations for a mobile detail: what we bring vs the
 * little we need from you. Two cards, one dark (we bring) and one light.
 */
export default function WhatToExpect() {
  return (
    <section className="section-y bg-white">
      <div className="container-site">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">— On the day</span>
            <h2 className="mt-4 text-ink-900 text-[clamp(36px,6vw,68px)] leading-[0.98]">
              What to <span className="text-brand-gold">Expect</span>
            </h2>
            <p className="mt-4 font-body text-[17px] leading-relaxed text-ink-700">
              Booking a mobile detail couldn&rsquo;t be easier — here&rsquo;s
              how it works on the day.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* we bring — dark card */}
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-card bg-ink-900 p-8 text-white grain">
              <div className="relative z-10">
                <h3 className="text-[28px] leading-none text-white">
                  What <span className="text-brand-gold">we</span> bring
                </h3>
                <ul className="mt-6 space-y-4">
                  {WE_BRING.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-body text-[15px] leading-snug text-white/85"
                    >
                      <Check tone="gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* what we need — light card */}
          <Reveal delay={120}>
            <div className="h-full rounded-card border border-ink-900/10 bg-peach/60 p-8">
              <h3 className="text-[28px] leading-none text-ink-900">
                What <span className="text-brand-gold">you</span> provide
              </h3>
              <ul className="mt-6 space-y-4">
                {WE_NEED.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-body text-[15px] leading-snug text-ink-700"
                  >
                    <Check tone="ink" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
