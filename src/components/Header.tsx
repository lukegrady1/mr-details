"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Button from "./Button";
import { BUSINESS, NAV_LINKS } from "@/lib/content";

/**
 * Header — sticky nav (DESIGN.md §5.1), now multi-page.
 * Transparent over a dark band (home hero / subpage PageHero), then solid white
 * + shadow once scrolled. Highlights the active route. Mobile: hamburger →
 * full-screen black overlay with the CTA pinned low.
 */

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Solidify the bar after a little scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  const isActive = (href: string): boolean =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // If we're already on the target route (e.g. clicking "Home" from the
  // homepage, where the Link won't navigate), scroll back to the top so the
  // click still "goes" somewhere.
  const scrollTopIfActive = (href: string): void => {
    if (isActive(href)) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Mobile nav tap: always close the overlay, then the same scroll-to-top.
  const handleMobileNav = (href: string): void => {
    setOpen(false);
    scrollTopIfActive(href);
  };

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-ink-900/95 shadow-[0_2px_24px_rgba(0,0,0,0.35)] backdrop-blur border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex h-20 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={`${BUSINESS.name} — home`}
          className="shrink-0"
          onClick={() => scrollTopIfActive("/")}
        >
          <Logo className="h-12 sm:h-14" priority />
        </Link>

        {/* desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-5 lg:flex xl:gap-7"
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => scrollTopIfActive(link.href)}
                aria-current={active ? "page" : undefined}
                className={`link-wipe font-body text-[15px] font-medium transition-colors ${
                  active ? "text-brand-gold" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* desktop CTAs */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href={BUSINESS.phoneHref}
            className="hidden font-body text-[15px] font-semibold text-white transition-colors hover:text-brand-gold xl:block"
          >
            {BUSINESS.phoneDisplay}
          </a>
          <Button href={BUSINESS.calendly} variant="accent" external>
            Book Today
          </Button>
        </div>

        {/* mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 grid h-11 w-11 place-items-center rounded-pill text-white lg:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <div className="flex h-4 w-6 flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-current transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>
    </header>

      {/* mobile full-screen overlay — rendered as a SIBLING of <header> (not a
          child) so the header's backdrop-blur can't become the containing block
          for this fixed element and clip it to the 72px bar. */}
      <div
        className={`fixed inset-x-0 top-0 z-[45] flex h-[100dvh] flex-col overflow-y-auto bg-ink-850 px-6 pt-24 pb-8 transition-opacity duration-200 ease-out lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {NAV_LINKS.map((link, i) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleMobileNav(link.href)}
                aria-current={active ? "page" : undefined}
                className={`border-b border-white/10 py-3 font-display text-[26px] tracking-[0.04em] transition-[transform,opacity,color] duration-300 ease-out motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
                  active ? "text-brand-gold" : "text-white hover:text-brand-gold"
                } ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                // quick staggered reveal on open; collapse together on close
                style={{ transitionDelay: open ? `${i * 30 + 30}ms` : "0ms" }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div
          className={`mt-auto flex flex-col gap-3 transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
            open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{
            transitionDelay: open ? `${NAV_LINKS.length * 30 + 40}ms` : "0ms",
          }}
        >
          <Button
            href={BUSINESS.calendly}
            variant="accent"
            external
            className="w-full"
          >
            Book Today
          </Button>
          <a
            href={BUSINESS.phoneHref}
            className="text-center font-body text-[15px] font-semibold text-white/80"
          >
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>
    </>
  );
}
