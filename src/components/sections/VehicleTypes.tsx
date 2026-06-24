import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { VEHICLE_TYPES } from "@/lib/content";

/**
 * VehicleTypes — "Auto · Marine · Aviation" (from their Instagram bio). A dark
 * premium band highlighting that Mr. Details cleans more than just cars.
 */
export default function VehicleTypes() {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-white grain section-y">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand-gold/15 blur-3xl" />
      <div className="container-site relative z-10">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">— More than cars</span>
            <h2 className="mt-4 text-[clamp(40px,7vw,80px)] leading-[0.98]">
              Auto. Marine. <span className="text-brand-gold">Aviation.</span>
            </h2>
            <p className="mt-4 font-body text-[17px] leading-relaxed text-white/75">
              We bring the same 5-star, come-to-you detailing to more than just
              cars — boats and aircraft too.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {VEHICLE_TYPES.map((type, i) => (
            <Reveal key={type.name} delay={i * 100}>
              <div className="group h-full rounded-card border border-white/10 bg-white/[0.03] p-8 transition-all duration-200 hover:-translate-y-1 hover:border-brand-gold/40">
                <span className="grid h-14 w-14 place-items-center rounded-pill bg-brand-gold text-ink-900 transition-transform duration-200 group-hover:-translate-y-0.5">
                  <Icon name={type.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-[30px] leading-none text-white">
                  {type.name}
                </h3>
                <p className="mt-2 font-body text-[15px] leading-relaxed text-white/70">
                  {type.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
