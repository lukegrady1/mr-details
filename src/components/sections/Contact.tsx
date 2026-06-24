import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import type { IconName } from "@/lib/content";
import { BUSINESS } from "@/lib/content";

/**
 * Contact — booking + contact methods page section. Left: tappable contact
 * methods; right: the live Calendly booking embed. Email is a placeholder
 * until the client provides a public address (DESIGN.md §0).
 */

interface Method {
  icon: IconName;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  note?: string;
}

const methods: Method[] = [
  {
    icon: "calendar",
    label: "Book online",
    value: "Calendly — instant booking",
    href: BUSINESS.calendly,
    external: true,
  },
  {
    icon: "car",
    label: "Call or text",
    value: BUSINESS.phoneDisplay,
    href: BUSINESS.phoneHref,
  },
  {
    icon: "sparkle",
    label: "Instagram",
    value: BUSINESS.instagramHandle,
    href: BUSINESS.instagram,
    external: true,
  },
  {
    icon: "pin",
    label: "Service area",
    value: BUSINESS.region,
    note: "Mobile — we come to you",
  },
  {
    icon: "interior",
    label: "Email",
    value: BUSINESS.emailPlaceholder,
    note: "Placeholder — to be confirmed",
  },
];

export default function Contact() {
  return (
    <section className="section-y bg-white">
      <div className="container-site grid items-start gap-12 lg:grid-cols-2">
        {/* methods */}
        <Reveal>
          <div>
            <span className="eyebrow">— Get in touch</span>
            <h2 className="mt-4 text-ink-900 text-[clamp(34px,5vw,56px)] leading-[1.0]">
              Book Your Mobile Detail
            </h2>
            <p className="mt-4 max-w-md font-body text-[17px] leading-relaxed text-ink-700">
              The fastest way to book is online — pick a time and we&rsquo;ll come
              to your home or business. Prefer to talk? Call or text us anytime.
            </p>

            <ul className="mt-8 space-y-3">
              {methods.map((m) => {
                const inner = (
                  <div className="flex items-start gap-4 rounded-card border border-ink-900/10 bg-white p-4 transition-all duration-200 group-hover:border-brand-gold/50 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-pill bg-ink-900 text-brand-gold">
                      <Icon name={m.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <span className="block font-body text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
                        {m.label}
                      </span>
                      <span className="block font-display text-[22px] leading-tight tracking-[0.02em] text-ink-900">
                        {m.value}
                      </span>
                      {m.note ? (
                        <span className="block font-body text-[12px] italic text-muted">
                          {m.note}
                        </span>
                      ) : null}
                    </div>
                  </div>
                );

                return (
                  <li key={m.label} className="group">
                    {m.href ? (
                      <a
                        href={m.href}
                        {...(m.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="block focus-visible:outline-none"
                      >
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>

        {/* Calendly embed */}
        <Reveal delay={120}>
          <div className="overflow-hidden rounded-card border border-ink-900/10 shadow-[0_14px_44px_rgba(0,0,0,0.12)]">
            <div className="flex items-center gap-2 bg-ink-900 px-5 py-3 text-white">
              <Icon name="calendar" className="h-5 w-5 text-brand-gold" />
              <span className="font-display text-[20px] tracking-[0.04em]">
                Choose a time
              </span>
            </div>
            <iframe
              src={BUSINESS.calendly}
              title="Book a mobile detail with Mr. Details on Calendly"
              loading="lazy"
              className="h-[640px] w-full border-0 bg-white"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
