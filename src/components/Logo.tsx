import Image from "next/image";
import { BUSINESS } from "@/lib/content";

/**
 * Logo — the Mr. Details wordmark (public/transparent.png).
 * Transparent background with an orange emblem + light wordmark, so it's meant
 * for dark surfaces (transparent-over-hero header, dark scrolled header, dark
 * footer).
 */

interface LogoProps {
  /** Height utility class, e.g. "h-10". Width scales to keep aspect ratio. */
  className?: string;
  priority?: boolean;
}

export default function Logo({ className = "h-10", priority = false }: LogoProps) {
  return (
    <Image
      src="/transparent.png"
      alt={`${BUSINESS.name} — mobile auto detailing`}
      width={2048}
      height={746}
      priority={priority}
      sizes="220px"
      className={`${className} w-auto select-none`}
    />
  );
}
