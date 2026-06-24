# DESIGN.md — Mr. Details (Mobile Auto Detailing)

**Purpose:** This is a build spec for Claude Code. Produce a marketing website for **Mr. Details**, a **mobile** auto detailing service on the South Shore of Massachusetts. Use the **exact same design system, layout, and component set we've used across this thread** (Stallone / Coat Pro / Achieve / Nate Smith / Spear) — bold condensed display type, pill buttons, before/after sliders, badge marquee, value cards, 4-step process, the full section flow — but apply **Mr. Details' own color scheme, content, and services**. Do **not** copy any other company's logo, text, or images verbatim.

**The swap, in one line:** keep the established *structure + typography + components*, change *colors → Mr. Details black/warm-amber/white*, change *subject → MOBILE auto detailing*, change *all copy → Mr. Details' real info*.

**Theme:** sleek, convenient, premium — "we come to you / make your car shine like never before." The single biggest differentiator is **mobile service** — lead with it everywhere. Same punchy visual system as the prior sites; automotive flavor.

**Stack:** Build with **Next.js (App Router) + TypeScript + Tailwind CSS** (same project structure as §1).

---

## 0. Company facts (use these everywhere)

- **Business name:** Mr. Details (handle "Mr. Details 617").
- **Headline / promise:** "Make Your Car Shine Like Never Before." Subhead: "Book a mobile detail for your car with Mr. Details today."
- **What they do:** **mobile** auto detailing — they come to your home or business and detail your vehicle(s) on-site. Packages: complete **interior + exterior**, **interior only**, or **exterior only**. "Let us service all of your vehicles at once."
- **Key differentiator:** **WE COME TO YOU.** Mobile convenience — they bring everything needed to get the job done.
- **Service area:** the entire **South Shore region of Massachusetts** (e.g. Braintree, Weymouth and surrounding towns).
- **Phone:** (617) 827-2268 — use as `tel:+16178272268` click-to-call everywhere.
- **Booking:** online via **Calendly — https://calendly.com/mrdetails617**. Primary CTA everywhere is **"Book Today"**, linking here.
- **Selling points (from their site):** "5-Star Experience" (years of experience cleaning all types of vehicles), "Local Service" (South Shore MA), "Easy Booking" (mobile detail at home or business, service all vehicles at once).
- **Real testimonials (use these):**
  - ⭐️⭐️⭐️⭐️⭐️ "They did a fantastic job and honestly beat all of my expectations. Super convenient." — **Wilfredo Gonzalez, Braintree, MA**
  - ⭐️⭐️⭐️⭐️⭐️ "These guys are great! They do what they say they will do." — **Thomas Donahue, Weymouth, MA**
- **Socials:** Instagram `instagram.com/mrdetails617`. *(No public email shown — use the Calendly booking + phone; leave an email placeholder if a contact field is needed.)*

---

## 1. Tech stack & ground rules

**Stack: Next.js (App Router) + TypeScript + Tailwind CSS.** Scaffold with `npx create-next-app@latest --typescript --tailwind --app --eslint`.

- **Project structure:**
  - `app/page.tsx` — homepage, composed of section components.
  - `app/layout.tsx` — root layout: fonts, metadata, global header/footer.
  - `app/globals.css` — Tailwind directives + a few CSS variables/utilities.
  - `components/` — one file per section + reusable UI (`Button.tsx`, `ServiceCard.tsx`, `BeforeAfterSlider.tsx`, `BadgeMarquee.tsx`, `Header.tsx`, `Footer.tsx`, etc.). Each is a typed React component with a `Props` interface.
  - `lib/content.ts` — site copy/data (packages, reviews, steps, values, service-area towns) as typed constants so content is easy to edit in one place.
  - `public/` — images and SVGs.
- **TypeScript everywhere.** No `any`. Define `interface` types for every component's props and for the content data shapes in `lib/content.ts`.
- **Styling is Tailwind utility classes**, driven by a custom theme in `tailwind.config.ts` (see §2). Avoid hand-written CSS except for keyframes (marquee), the before/after clip logic, and anything truly dynamic. Group repeated utility patterns with `@apply` or small components.
- **Server vs client components:** sections are Server Components by default. Add `"use client"` only where interactivity is needed — `Header` (mobile menu + scroll state), `BeforeAfterSlider` (drag), the scroll-reveal wrapper, and any gallery lightbox/carousel.
- **Fonts via `next/font/google`** (Bebas Neue + Poppins) — see §3.
- **Images via `next/image`** for lazy-loading, responsive `sizes`, `webp`. Always set `alt`.
- **Mobile-first, fully responsive.** Tailwind breakpoints `md:` (768px), `lg:` (1024px). Hero, grids, gallery, and sliders reflow cleanly on phones.
- **Smooth-scroll** for in-page anchors (`scroll-smooth` on `<html>`). Sticky header.
- **Accessibility:** semantic landmarks, alt text, visible `focus-visible:` rings, AA contrast. Buttons and sliders keyboard-operable.
- **Performance:** `next/image` for all imagery, lazy-load below the fold, minimal client JS.
- Deliver clean, typed, commented code.

---

## 2. Brand color system (Mr. Details)

> **Color note:** Mr. Details' current site is a Notion/super.site template using **default styling** — charcoal text (`#37352f`) on white, with one distinctive warm accent: a soft peach (`#fce6cf`). There's no bold brand color, so this scheme is built around their one real cue: a **sleek black + warm amber/gold** palette (a richer, usable version of that peach), with the pale peach kept as a soft background tint. This stays true to their look while giving the bold layout enough contrast. *(If the client has official brand colors, swap them into the tokens below.)*

Define these in `tailwind.config.ts` under `theme.extend`.

| Role (was, in Stallone) | Mr. Details color | Hex |
|---|---|---|
| Primary dark / dark sections / body text (was teal-700) | **Near-black / charcoal** | `#1a1916` / `#37352f` |
| Accent "punch" — eyebrows, highlights, slider handle, key words (was red) | **Warm amber / gold** | `#d99a4e` |
| Soft warm background tint (was sage) | **Peach cream** | `#fce6cf` |
| Page / card background | **White** | `#ffffff` |
| Muted copy / borders | **Warm gray** | `#6b675f` |

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#1a1916", // PRIMARY dark — dark sections, headlines, body text
          850: "#0d0d0b", // near-black for deepest fields / footer
          700: "#37352f", // charcoal — their actual text color / secondary surfaces
        },
        brand: {
          gold:  "#d99a4e", // PRIMARY accent — eyebrows, key words, slider handle, hovers, CTAs
          gold2: "#c0823a", // darker amber — button hover / pressed
        },
        peach: "#fce6cf",  // soft warm background tint (alternating sections)
        muted: "#6b675f",  // muted copy / borders
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"], // Bebas Neue
        body: ["var(--font-poppins)", "sans-serif"],  // Poppins
      },
      borderRadius: { pill: "100px", card: "16px" },
      maxWidth: { site: "1200px" },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
      },
      animation: { marquee: "marquee 30s linear infinite" },
    },
  },
  plugins: [],
};
export default config;
```

**Usage rules (mirror the established logic, recolored):**
- Default page background is **white**; long-form body text is **charcoal `#37352f`** (or `muted` for secondary). Use **peach `#fce6cf`** for occasional warm alternating sections so white blocks don't run together (replaces Stallone's sage).
- "Hero" and emphasis bands use a **near-black background** (`ink-900`/`ink-850`) with white text — sleek and premium (replaces Stallone's dark-teal bands).
- **Amber/gold is the accent only** — eyebrow labels, the before/after slider handle, icon fills, small underlines, hovers, the "Book Today" buttons, and the one highlighted word in big headlines. Never large fields of gold.
- Black + white + warm gold is the signature combo; peach is a soft tint, gray strictly secondary.
- Body default in `globals.css`: `body { @apply text-ink-700 bg-white font-body; }`.

---

## 3. Typography (same as the prior sites)

Identical type system — core to "the same design." Load with `next/font/google`. (Their live site uses Inter; **Bebas Neue + Poppins** is the system we've used throughout this thread, so stick with it for the bold, premium feel.)

| Role | Font | Notes |
|---|---|---|
| **Display / headings** | **Bebas Neue** | Tall, condensed, bold. H1–H3, buttons, big stats, eyebrows. |
| **Body / UI** | **Poppins** | Paragraphs, nav, labels, captions. Weights 300–700. |

```ts
// app/layout.tsx
import { Bebas_Neue, Poppins } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas", display: "swap" });
const poppins = Poppins({ weight: ["300","400","500","600","700"], subsets: ["latin"], variable: "--font-poppins", display: "swap" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${poppins.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
```

**Type scale (desktop):**

| Element | Font | Size | Line-height | Color |
|---|---|---|---|---|
| H1 (hero) | Bebas Neue | `clamp(48px, 7vw, 72px)` | 1.1 | white on black |
| H2 (section super-headline) | Bebas Neue | `clamp(44px, 9vw, 97px)` | 1.0 | white or ink-900 |
| H3 (card titles) | Bebas Neue | `clamp(24px, 3vw, 34px)` | 1.1 | ink-900 |
| Eyebrow / kicker | Poppins | 14px / 600 | 1 | UPPERCASE, letter-spacing .12em, **brand-gold** |
| Body | Poppins | 16–18px / 400 | 1.65 | ink-700 / muted |
| Button label | Bebas Neue | 18px / 700 | 1 | white |
| Fine print / footer | Poppins | 13px | 1.5 | muted |

Tailwind examples — hero H1: `font-display text-white text-[clamp(48px,7vw,72px)] leading-[1.1] tracking-[0.01em]`; eyebrow: `font-body font-semibold text-[14px] uppercase tracking-[0.12em] text-brand-gold`.

**Signature heading treatment:** color ONE key word **gold** while the rest stays white/black — e.g. "Make Your Car **Shine** Like Never Before." Wrap the punch word in `<span className="text-brand-gold">`.

---

## 4. Core components (same as the prior sites, recolored)

### 4.1 Buttons — `components/Button.tsx`
Primary CTA is a **pill**. Typed component with `variant` + `href` props:
```tsx
type ButtonProps = { href: string; variant?: "primary" | "accent" | "ghost"; children: React.ReactNode };

const base =
  "inline-flex items-center gap-2 font-display font-bold text-[18px] tracking-[0.02em] " +
  "px-5 py-3 rounded-pill transition-transform transition-colors duration-150 " +
  "hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold";

const variants = {
  primary: "bg-ink-900 text-white hover:bg-ink-850",
  accent:  "bg-brand-gold text-ink-900 hover:bg-brand-gold2",
  ghost:   "bg-transparent text-ink-900 ring-2 ring-inset ring-ink-900",
};

export default function Button({ href, variant = "primary", children }: ButtonProps) {
  return <a href={href} className={`${base} ${variants[variant]}`}>{children}</a>;
}
```
The top CTA everywhere reads **"Book Today"** and links to Calendly (`https://calendly.com/mrdetails617`). Use the **gold** `accent` variant for it so it pops, especially on black. Add a phone CTA next to it: **"Call (617) 827-2268."** (Note: gold accent uses dark text for contrast.)

### 4.2 Service / package cards — `components/ServiceCard.tsx`
Image-topped cards, rounded corners. Hover (desktop) lifts the card and reveals a short description; on mobile the blurb shows by default. Typed props, `next/image`:
```tsx
type ServiceCardProps = { title: string; blurb: string; href: string; img: string; alt: string };
```
Wrapper: `group rounded-card overflow-hidden bg-white shadow-[0_6px_24px_rgba(0,0,0,0.10)] transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_14px_40px_rgba(0,0,0,0.20)]`. Image: `w-full aspect-[3/2] object-cover`. Reveal blurb on `md:` with `max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all`; visible by default below `md`. Use these for the three **packages**.

### 4.3 Before / After slider ★ (signature element) — `components/BeforeAfterSlider.tsx`
**A perfect fit for detailing** — dirty/dull → spotless/glossy. Mark `"use client"`. Two stacked images, a vertical divider with a round grab-handle in **brand-gold**, drag to wipe between "before" (dirty interior / dull paint) and "after" (detailed shine).

Implementation: `useState<number>` for divider percentage; two `next/image` layers absolutely positioned; clip the top image with inline `style={{ clipPath: \`inset(0 ${100 - pos}% 0 0)\` }}`; a handle `<button>` updates `pos` on pointer move (`onPointerDown/Move/Up`) and on `ArrowLeft`/`ArrowRight` keydown. Default `pos = 50`. Label the two sides "BEFORE" / "AFTER" in small `font-display` tags. All drag math typed (`number`), no `any`. Use 1–2 of these (interior + exterior).

### 4.4 Scrolling badge marquee — `components/BadgeMarquee.tsx`
Horizontal auto-scrolling strip, duplicated content for a seamless loop (`animate-marquee`), pause on hover (`hover:[animation-play-state:paused]`). On a **black** or peach band. Mr. Details badge phrases: **We Come to You · Mobile Detailing · 5-Star Experience · Interior & Exterior · All Vehicles · South Shore, MA · Easy Booking.** Separate items with a small gold diamond/star glyph.

### 4.5 Stat / icon blocks
Round icon (or single big letter) above a short bold title and one-line description. Used for the feature/value section and the process steps. Icon fills in gold on black, or charcoal on white.

---

## 5. Page structure (sections, in order)

Build the homepage (`app/page.tsx`) by composing one component per section. Each section is full-width with inner container `max-w-site mx-auto px-6` and padding `py-[clamp(64px,10vw,120px)]`. Pull all copy/data from `lib/content.ts`.

### 5.1 Sticky header / nav — `Header.tsx` (`"use client"`)
- Left: Mr. Details logo (wordmark in Bebas Neue + a small automotive/sparkle mark if you generate one).
- Center/right: nav — **Home**, **Services / Packages** (anchor), **How It Works**, **Reviews**, **Service Area**.
- Far right: phone `(617) 827-2268` as a `tel:` link + a gold pill **"Book Today"** button (→ Calendly).
- Mobile: hamburger → full-screen overlay menu, **black** background, white Bebas Neue links, "Book Today" CTA pinned at bottom.
- Header transparent over the hero, then solid **white** background + subtle shadow on scroll.

### 5.2 Hero
- **Near-black full-bleed background** (`ink-850`) — ideally a darkened photo of a glossy freshly detailed car, with a black overlay so white text pops.
- Logo, then **H1** "Make Your Car **Shine** Like Never Before." — subhead "Book a mobile detail for your car with Mr. Details today." — a **"We Come to You"** badge/eyebrow — and the primary pill CTA ("Book Today") + a secondary ghost CTA ("Call (617) 827-2268").
- One gold accent word in the headline. Reinforce the mobile angle visually (a small map-pin / "at your home or office" line).

### 5.3 Feature teaser (3 quick tiles)
Three icon tiles under the hero — Mr. Details' three pillars — each a simple line icon + name + one line:
- **5-Star Experience** — "Years of experience cleaning all types of vehicles."
- **Local Service** — "We cover the entire South Shore region of Massachusetts."
- **We Come to You** — "Mobile detail at your home or business — service all your vehicles at once."

### 5.4 Badge marquee
The scrolling trust strip from §4.4, on a peach or black band.

### 5.5 "We Come to You" (mobile spotlight)
- Big H2 ("We Come to **You**") + paragraph: "Enjoy the convenience of a mobile detail done at your home or office. We bring everything we need to get the job done — and we can service all of your vehicles at once."
- Supporting image (van/setup on a driveway) + a "Book Today" CTA. This section sells the #1 differentiator — give it prominence.

### 5.6 Packages — "Choose the Right Package"
- H2 ("Choose the Right **Package**") + line: "Choose between a complete interior and exterior detail, or just the interior or exterior."
- **Grid of package cards** (§4.2):
  - **Full Detail (Interior + Exterior)** — "The complete package — a thorough interior and exterior detail for a head-to-toe transformation."
  - **Interior Detail** — "Deep interior cleaning — seats, carpets, surfaces, and glass restored and refreshed."
  - **Exterior Detail** — "Exterior wash and detail that brings back a deep, clean, glossy shine."
  - *(Add specific package contents/pricing as `lib/content.ts` data when the client provides them — placeholders for now.)*

### 5.7 Mid-page CTA band
Full-width **black band**: a "ready to book?" line on the left, gold pill **"Book Today"** on the right + phone. White text, high contrast.

### 5.8 Results — before/after
Header ("See the Transformation"), then one or two **before/after sliders** (§4.3): dirty → detailed interior, dull → glossy exterior.

### 5.9 Reviews (use the real ones)
- "5-Star Reviews" eyebrow + testimonial cards (carousel on mobile), gold stars:
  - "They did a fantastic job and honestly beat all of my expectations. Super convenient." — **Wilfredo Gonzalez, Braintree, MA**
  - "These guys are great! They do what they say they will do." — **Thomas Donahue, Weymouth, MA**
- Leave room to add more as data in `lib/content.ts`.

### 5.10 About / brand story (replaces Stallone's "family-owned" section)
- Eyebrow, big H2 ("Detailing That Comes **To You**"), warm paragraph: Mr. Details is a mobile detailing service delivering a 5-star experience across the South Shore of Massachusetts — bringing professional interior and exterior detailing right to your home or business, with the convenience to service all your vehicles at once.
- Photo slot for the detailer / setup. Optional "South Shore, MA • Mobile" badge accent (gold/black). Link to Instagram `@mrdetails617` for more work.

### 5.11 "Why Mr. Details" — value cards (replaces Stallone's C.H.A.M.P.)
Four icon/letter blocks (§4.5) grounded in their copy:
- **5-Star Experience** — Years detailing all types of vehicles, every time.
- **We Come to You** — Mobile service at your home or business.
- **South Shore Local** — Proudly serving the entire South Shore region.
- **Easy Booking** — Book online in minutes; we handle the rest.

Big gold/charcoal icons or initials (Bebas Neue) over a short title and one sentence.

### 5.12 How it works — 4 steps
Header ("How It Works"), numbered horizontal stepper (vertical on mobile), gold number badges:
1. **Book Online** — pick a time on our Calendly (or call us).
2. **We Come to You** — we arrive at your home or business with everything we need.
3. **We Detail Your Vehicle(s)** — interior, exterior, or both — done right.
4. **Enjoy the Shine** — drive away with a fresh, showroom-clean vehicle.

Connect steps with a dashed line/arrow.

### 5.13 Service area
- Eyebrow "— Where we work", H2 ("Serving the **South Shore** of Massachusetts"), short paragraph, and a "Book Today" CTA.
- Optional simple map graphic. **Towns** as a list (Braintree and Weymouth are confirmed from reviews; add others — e.g. Quincy, Hingham, Milton — as clearly-marked placeholders for the client to confirm).

### 5.14 Final CTA
Big **black** closing band: eyebrow ("— Ready to shine?"), H2 with a gold accent word ("Book Your **Detail** Today"), one persuasive line, primary pill CTA ("Book Today") + phone `(617) 827-2268`.

### 5.15 Footer
**Near-black** footer (`ink-850`), white/gray text, multi-column:
- Col 1: white Mr. Details logo + one-line description ("Mobile auto detailing on the South Shore of Massachusetts — we come to you.") + a "Book Today" link.
- Col 2: **Packages** — Full Detail, Interior Detail, Exterior Detail.
- Col 3: **Company** — How It Works, Reviews, Service Area.
- Col 4: **Contact** — South Shore, MA; phone `(617) 827-2268` (click-to-call); Calendly booking link; Instagram `@mrdetails617`.
- Bottom bar: © [current year] Mr. Details.
- Small floating/sticky **"Book Today"** button on mobile is on-brand.

---

## 6. Motion & interaction (same as the prior sites)

- **Scroll-reveal:** reusable `components/Reveal.tsx` (`"use client"`) wraps children, uses a typed `IntersectionObserver` in `useEffect`, toggles `translate-y-4 opacity-0` → `translate-y-0 opacity-100 transition-all duration-500 ease-out`. Subtle; never bouncy.
- **Hover:** cards lift, buttons darken + rise 2px, links get a **gold** underline wipe.
- **Marquee** auto-scrolls (`animate-marquee`), pauses on hover.
- **Before/after sliders** drag with pointer + touch + keyboard.
- Respect `prefers-reduced-motion` via the observer gate + Tailwind `motion-reduce:` variants.
- Sleek and controlled — premium, convenient, automotive. No neon glows, no excessive parallax.

---

## 7. Imagery & iconography direction

- **Photography:** real mobile-detailing work — glossy paint reflections, clean interiors, the setup at a customer's driveway/office, before/after pairs. Dark, premium automotive photography with warm gold accents. Placeholder: detailed vehicles and on-site mobile detailing.
- **Icons:** simple two-tone line icons — charcoal with occasional gold fill. Auto/mobile icons (car, spray bottle, microfiber/buffer, sparkle/shine, map pin for "we come to you," calendar for booking).
- **Brand motif:** clean shine + mobile convenience — gloss highlights, a sparkle, a location pin. Keep it sleek.
- **Logos/graphics:** white logo variant for black sections, charcoal for white. SVG preferred.
- All decorative graphics use the brand palette only (black / gold / peach / white).

---

## 8. Copy voice

Confident, convenient, premium. Short punchy lines (same energy as the prior sites, automotive flavor). On-brand phrasing from their site: "make your car shine like never before," "we come to you," "5-star experience," "super convenient," "service all your vehicles at once." Always lead CTAs with **Book Today** (and offer the phone number). Emphasize: mobile / we come to you, South Shore MA, interior & exterior packages, 5-star, easy online booking.

---

## 9. Deliverable checklist

- [ ] Next.js (App Router) + TypeScript + Tailwind scaffolded; `npm run build` and `tsc --noEmit` pass with no errors and no `any`.
- [ ] **Mr. Details palette** in `tailwind.config.ts` — near-black/charcoal dark sections, warm gold `#d99a4e` accent, white pages, peach `#fce6cf` soft tint sections.
- [ ] Bebas Neue + Poppins via `next/font/google`; `font-display`/`font-body` utilities wired through CSS variables.
- [ ] Sections split into typed components under `components/`; copy/data in `lib/content.ts`; `"use client"` only where needed.
- [ ] All imagery uses `next/image` with alt text.
- [ ] Sticky header, transparent-over-hero → solid-on-scroll, working mobile hamburger (black overlay).
- [ ] Hero "Make Your Car **Shine**…" with black background, gold accent word, **"We Come to You"** badge, gold pill **"Book Today"** (→ Calendly) + phone CTA.
- [ ] Dedicated **"We Come to You" mobile spotlight** section (the #1 differentiator).
- [ ] At least one working **before/after slider** (dirty → detailed; pointer + touch + keyboard).
- [ ] Auto-scrolling **badge marquee** (Mr. Details badges) that loops seamlessly and pauses on hover.
- [ ] Three **package** cards (Full / Interior / Exterior) with hover-reveal descriptions.
- [ ] Reviews section using the **real testimonials** (Wilfredo Gonzalez – Braintree; Thomas Donahue – Weymouth); "Why Mr. Details" value cards; 4-step how-it-works; About story; South Shore service area.
- [ ] Two black CTA bands (mid + final), each with **Book Today** + phone `(617) 827-2268`.
- [ ] Footer with Packages / Company / Contact columns, Instagram `@mrdetails617`, South Shore MA, © current year.
- [ ] Every "Book Today" links to `https://calendly.com/mrdetails617`; phone is `tel:+16178272268`.
- [ ] Real Mr. Details facts throughout; missing email, full town list, and package details clearly marked as placeholders.
- [ ] Fully responsive at 768/1024; no horizontal scroll on phones; AA contrast; keyboard-navigable; reduced-motion fallback.

Build it section by section, test responsiveness as you go, and keep black + warm gold + white consistent from the hero to the footer.