import Link from "next/link";
import Logo from "./Logo";
import MobileCtaBar from "./MobileCtaBar";
import { BUSINESS, FEATURED_PACKAGES } from "@/lib/content";

/**
 * Footer — near-black multi-column footer (DESIGN.md §5.15) + a mobile-only
 * sticky "Book Today" bar. Internal links use next/link; booking/phone/social
 * stay plain anchors.
 */

const companyLinks: { label: string; href: string }[] = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Reviews", href: "/reviews" },
  { label: "Service Area", href: "/service-area" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="relative overflow-hidden bg-ink-850 text-white/70 grain">
        <div className="container-site relative z-10 grid grid-cols-2 gap-x-6 gap-y-8 py-11 md:grid-cols-4 md:gap-10 md:py-20">
          {/* brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" aria-label={`${BUSINESS.name} — home`}>
              <Logo className="h-16 md:h-20" />
            </Link>
            <p className="mt-3 max-w-xs font-body text-[14px] leading-relaxed md:mt-4">
              Mobile auto detailing on the South Shore of Massachusetts — we
              come to you.
            </p>
            <a
              href={BUSINESS.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="link-wipe mt-3 inline-block font-body text-[14px] font-semibold text-brand-gold md:mt-5"
            >
              Book Today →
            </a>
          </div>

          {/* packages */}
          <nav aria-label="Packages">
            <h2 className="font-display text-[20px] tracking-[0.08em] text-white">
              Packages
            </h2>
            <ul className="mt-4 space-y-2.5 font-body text-[14px]">
              {FEATURED_PACKAGES.map((pkg) => (
                <li key={pkg.title}>
                  <Link
                    href="/packages"
                    className="flex items-center justify-between gap-3 transition-colors hover:text-white"
                  >
                    <span>
                      {pkg.title}
                      <span className="block text-[12px] text-white/40">
                        {pkg.scope}
                      </span>
                    </span>
                    <span className="font-display text-[15px] text-brand-gold">
                      {pkg.price}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* company */}
          <nav aria-label="Company">
            <h2 className="font-display text-[20px] tracking-[0.08em] text-white">
              Company
            </h2>
            <ul className="mt-4 space-y-2.5 font-body text-[14px]">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact */}
          <div>
            <h2 className="font-display text-[20px] tracking-[0.08em] text-white">
              Contact
            </h2>
            <ul className="mt-4 space-y-2.5 font-body text-[14px]">
              <li>{BUSINESS.region}</li>
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className="transition-colors hover:text-white"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Book on Calendly
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Instagram {BUSINESS.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container-site relative z-10 flex flex-col gap-2 border-t border-white/10 pt-5 pb-20 font-body text-[13px] text-white/45 md:flex-row md:items-center md:justify-between md:pt-6 lg:pb-6">
          <p>
            © {year} {BUSINESS.name}. All rights reserved.
          </p>
          <p>
            {BUSINESS.handle} · {BUSINESS.region}
          </p>
        </div>
      </footer>

      {/* mobile-only sticky CTA bar — call + book, reveals past the hero */}
      <MobileCtaBar />
    </>
  );
}
