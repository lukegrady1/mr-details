import Image from "next/image";

/**
 * ServiceCard — image-topped package card (DESIGN.md §4.2).
 * Hover (md+) lifts the card and reveals the blurb; on mobile the blurb is
 * always visible.
 */

interface ServiceCardProps {
  title: string;
  scope: string; // e.g. "Interior + Exterior"
  price?: string; // e.g. "$239"
  blurb: string;
  href: string;
  img: string;
  alt: string;
  external?: boolean;
}

export default function ServiceCard({
  title,
  scope,
  price,
  blurb,
  href,
  img,
  alt,
  external = true,
}: ServiceCardProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      {...externalProps}
      className="group block rounded-card overflow-hidden bg-white ring-1 ring-black/5 shadow-[0_6px_24px_rgba(0,0,0,0.10)] transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_14px_40px_rgba(0,0,0,0.20)] focus-visible:outline-none"
    >
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        <Image
          src={img}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {/* scope chip */}
        <span className="absolute left-4 top-4 rounded-pill bg-ink-900/85 px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-sm">
          {scope}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-ink-900 text-[clamp(24px,3vw,32px)] leading-[1.05]">
            {title}
          </h3>
          {price ? (
            <span className="shrink-0 whitespace-nowrap font-display text-[26px] leading-none text-brand-gold2">
              {price}
            </span>
          ) : null}
        </div>

        {/* blurb: visible on mobile, hover-reveal on md+ */}
        <div className="md:max-h-0 md:opacity-0 md:overflow-hidden transition-all duration-300 group-hover:md:max-h-40 group-hover:md:opacity-100">
          <p className="mt-2 font-body text-[15px] leading-relaxed text-muted">
            {blurb}
          </p>
        </div>

        <span className="mt-4 inline-flex items-center gap-1.5 font-body text-[13px] font-semibold uppercase tracking-[0.1em] text-brand-gold">
          Book this detail
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.4}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </a>
  );
}
