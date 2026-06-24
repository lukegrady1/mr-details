import type { IconName } from "@/lib/content";

/**
 * Icon — simple two-tone line icons (DESIGN.md §7).
 * `currentColor` driven so colour comes from the parent (charcoal or gold).
 */

interface IconProps {
  name: IconName;
  className?: string;
  /** Accessible label; omit for purely decorative icons (aria-hidden). */
  title?: string;
}

const paths: Record<IconName, React.ReactNode> = {
  star: (
    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.9 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9 2.9-6z" />
  ),
  pin: (
    <>
      <path d="M12 21.5s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10.5" r="2.6" />
    </>
  ),
  van: (
    <>
      <path d="M2.5 7.5h11v9h-11z" />
      <path d="M13.5 10h4l3.5 3.5v3h-7.5z" />
      <circle cx="7" cy="17.5" r="2" />
      <circle cx="17" cy="17.5" r="2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
      <path d="M8.5 14l2 2 4-4" />
    </>
  ),
  car: (
    <>
      <path d="M3 14l1.7-5a2 2 0 0 1 1.9-1.4h10.8A2 2 0 0 1 19.3 9L21 14v4.5h-3V17H6v1.5H3z" />
      <circle cx="7" cy="14" r="1.3" />
      <circle cx="17" cy="14" r="1.3" />
    </>
  ),
  spray: (
    <>
      <path d="M9.5 8.5h5v12h-5z" />
      <path d="M9.5 8.5V6h5v2.5M14.5 5h3M14.5 7.5h3" />
      <path d="M19.5 4.5h1M21 6.5h1M19.5 8.5h1" />
    </>
  ),
  sparkle: (
    <path d="M12 3l1.8 5.6L19.5 10l-5.7 1.4L12 17l-1.8-5.6L4.5 10l5.7-1.4L12 3z" />
  ),
  interior: (
    <>
      <path d="M5 19v-6a4 4 0 0 1 4-4h3a4 4 0 0 1 4 4v6" />
      <path d="M5 19h14M8 9V6.5A1.5 1.5 0 0 1 9.5 5h2A1.5 1.5 0 0 1 13 6.5V9" />
    </>
  ),
  boat: (
    <>
      <path d="M3 14h18l-2.5 5.5a2 2 0 0 1-1.8 1.1H7.3a2 2 0 0 1-1.8-1.1L3 14z" />
      <path d="M6 14V6l9 4-9 0M6 6l0-2" />
    </>
  ),
  plane: (
    <path d="M10.5 13.5L3 11l1-2 7 1 4.5-5.2a2 2 0 0 1 3 2.6L13 12l1 7-2 1-2.5-6.5-3 2.5-.2 2.2-1.6.8-.4-3.3-3-1.4.8-1.6 2.2 0z" />
  ),
  gift: (
    <>
      <rect x="3.5" y="9" width="17" height="11.5" rx="1.5" />
      <path d="M3.5 13h17M12 9v11.5" />
      <path d="M12 9S10.5 4.5 8 5a2 2 0 0 0 0 4h4zM12 9s1.5-4.5 4-4a2 2 0 0 1 0 4h-4z" />
    </>
  ),
};

export default function Icon({ name, className, title }: IconProps) {
  const decorative = !title;
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
