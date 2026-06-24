import type { ReactNode } from "react";

/**
 * Button — pill CTA (DESIGN.md §4.1). Renders an anchor so it works for
 * external links (Calendly) and tel: links alike.
 */

type ButtonVariant = "primary" | "accent" | "ghost" | "ghost-light";

interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  /** Adds target/rel for external links. */
  external?: boolean;
  className?: string;
  "aria-label"?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 font-display text-[18px] tracking-[0.04em] " +
  "px-6 py-3 rounded-pill transition-[transform,background-color,box-shadow] duration-150 " +
  "hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 " +
  "focus-visible:outline-none";

const variants: Record<ButtonVariant, string> = {
  // dark pill, white text — default on light backgrounds
  primary: "bg-ink-900 text-white hover:bg-ink-850",
  // orange pill, dark text — the headline "Book Today" CTA (pops on black)
  accent: "bg-brand-gold text-ink-900 hover:bg-brand-gold2",
  // outlined dark — secondary on light backgrounds
  ghost:
    "bg-transparent text-ink-900 ring-2 ring-inset ring-ink-900 hover:bg-ink-900 hover:text-white",
  // outlined light — secondary on dark backgrounds (e.g. hero phone CTA)
  "ghost-light":
    "bg-transparent text-white ring-2 ring-inset ring-white/55 hover:bg-white hover:text-ink-900",
};

export default function Button({
  href,
  variant = "primary",
  children,
  external = false,
  className = "",
  ...rest
}: ButtonProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...externalProps}
      {...rest}
    >
      {children}
    </a>
  );
}
