import Image from "next/image";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { BUSINESS } from "@/lib/content";

/**
 * InstagramCta — a "follow our work" band with a small placeholder gallery that
 * links to the real Instagram. Swap the tile images for real post photos when
 * available.
 */

const tiles: { src: string; alt: string }[] = [
  { src: "/img/pkg-exterior.svg", alt: "Glossy detailed car exterior" },
  { src: "/img/ba-interior-after.svg", alt: "Spotless detailed car interior" },
  { src: "/img/mobile-van.svg", alt: "Mobile detailing setup on a driveway" },
  { src: "/img/pkg-full.svg", alt: "A fully detailed vehicle" },
];

export default function InstagramCta() {
  return (
    <section className="section-y bg-white">
      <div className="container-site">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="eyebrow">— See our work</span>
              <h2 className="mt-4 text-ink-900 text-[clamp(36px,6vw,68px)] leading-[0.98]">
                Follow Along on{" "}
                <span className="text-brand-gold">Instagram</span>
              </h2>
              <p className="mt-4 font-body text-[17px] leading-relaxed text-ink-700">
                See the latest transformations and before-and-afters from across
                the South Shore.
              </p>
            </div>
            <Button href={BUSINESS.instagram} variant="primary" external>
              {BUSINESS.instagramHandle}
            </Button>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {tiles.map((tile, i) => (
            <Reveal key={tile.src} delay={i * 80}>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-card ring-1 ring-black/5 focus-visible:outline-none"
              >
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 280px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink-900/0 transition-colors duration-200 group-hover:bg-ink-900/45">
                  <span className="font-body text-[13px] font-semibold uppercase tracking-[0.12em] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    View
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
