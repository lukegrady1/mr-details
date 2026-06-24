import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { BUSINESS } from "@/lib/content";

/**
 * CtaBand (DESIGN.md §5.7 & §5.14) — reusable full-width black CTA band.
 * `layout="split"` for the mid-page band, `layout="center"` for the big final
 * closing band. `accent` highlights one word in the headline.
 */

interface CtaBandProps {
  eyebrow?: string;
  title: string;
  accent?: string; // word within `title` to colour gold
  line: string;
  layout?: "split" | "center";
}

function renderTitle(title: string, accent?: string) {
  if (!accent) return title;
  const [before, after] = title.split(accent);
  return (
    <>
      {before}
      <span className="text-brand-gold">{accent}</span>
      {after}
    </>
  );
}

export default function CtaBand({
  eyebrow,
  title,
  accent,
  line,
  layout = "split",
}: CtaBandProps) {
  const centered = layout === "center";

  return (
    <section className="relative overflow-hidden bg-ink-900 text-white grain">
      {/* warm glow accent */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-gold/20 blur-3xl" />

      <div
        className={`container-site relative z-10 ${
          centered
            ? "flex flex-col items-center py-[clamp(64px,10vw,120px)] text-center"
            : "flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between"
        }`}
      >
        <Reveal className={centered ? "max-w-2xl" : "max-w-xl"}>
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h2
            className={`${eyebrow ? "mt-4" : ""} leading-[0.98] ${
              centered
                ? "text-[clamp(44px,8vw,92px)]"
                : "text-[clamp(34px,5vw,56px)]"
            }`}
          >
            {renderTitle(title, accent)}
          </h2>
          <p
            className={`mt-4 font-body text-[16px] leading-relaxed text-white/75 ${
              centered ? "mx-auto max-w-lg" : "max-w-md"
            }`}
          >
            {line}
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className={`flex flex-col gap-3 sm:flex-row sm:items-center ${
            centered ? "mt-9" : "shrink-0"
          }`}
        >
          <Button href={BUSINESS.calendly} variant="accent" external>
            Book Today
          </Button>
          <Button href={BUSINESS.phoneHref} variant="ghost-light">
            Call {BUSINESS.phoneDisplay}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
