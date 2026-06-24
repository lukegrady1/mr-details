import Link from "next/link";

/**
 * PageHero — dark title band for subpages. Gives the fixed (transparent-over-
 * dark) header a backdrop consistent with the homepage hero, carries the page
 * H1, and shows a Home / {crumb} breadcrumb.
 */

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  /** Word within `title` to colour gold. */
  accent?: string;
  subtitle?: string;
  /** Current page label for the breadcrumb. */
  crumb: string;
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

export default function PageHero({
  eyebrow,
  title,
  accent,
  subtitle,
  crumb,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-850 text-white grain">
      {/* warm glow accent */}
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-brand-gold/15 blur-3xl" />

      <div className="container-site relative z-10 pb-[clamp(48px,7vw,80px)] pt-[clamp(120px,16vw,168px)]">
        {/* breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 font-body text-[13px] uppercase tracking-[0.12em] text-white/55">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-brand-gold"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-white/30">
              /
            </li>
            <li className="text-brand-gold" aria-current="page">
              {crumb}
            </li>
          </ol>
        </nav>

        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h1
          className={`${eyebrow ? "mt-4" : ""} max-w-4xl text-[clamp(44px,8vw,88px)] leading-[0.98]`}
        >
          {renderTitle(title, accent)}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-xl font-body text-[17px] leading-relaxed text-white/75">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
