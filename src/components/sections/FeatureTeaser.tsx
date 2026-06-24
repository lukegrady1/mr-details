import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { FEATURES } from "@/lib/content";

/**
 * FeatureTeaser — three quick icon tiles directly under the hero, overlapping
 * its bottom edge. Mirrors the sibling-site (Spear) ServicesTeaser exactly: a
 * plain white wrapper pulled up with -mt-12, with gap-px dividers.
 */
export default function FeatureTeaser() {
  return (
    <div className="bg-white">
      <div className="container-site -mt-12">
        <div className="grid gap-px overflow-hidden rounded-card border border-ink-900/10 bg-ink-900/10 sm:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 90}>
              <Link
                href={feature.href}
                className="group flex h-full items-center gap-4 bg-white px-6 py-7 transition-colors hover:bg-peach"
              >
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-peach text-brand-gold transition-colors group-hover:bg-brand-gold group-hover:text-white">
                  <Icon name={feature.icon} className="h-7 w-7" />
                </span>
                <span>
                  <span className="block font-display text-[24px] leading-none text-ink-900">
                    {feature.title}
                  </span>
                  <span className="mt-1 block text-[13px] font-medium uppercase tracking-[0.1em] text-muted">
                    {feature.linkLabel}
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
