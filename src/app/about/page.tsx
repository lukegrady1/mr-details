import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import About from "@/components/sections/About";
import VehicleTypes from "@/components/sections/VehicleTypes";
import ValueCards from "@/components/sections/ValueCards";
import BadgeMarquee from "@/components/BadgeMarquee";
import InstagramCta from "@/components/sections/InstagramCta";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mr. Details is a mobile detailing service delivering a 5-star experience across the South Shore of Massachusetts — auto, marine and aviation detailing brought right to you.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="— Our story"
        title="Detailing That Comes To You"
        accent="To You"
        subtitle="A mobile detailing service built on a 5-star standard — professional detailing brought right to your home or business."
        crumb="About"
      />
      <About hideHeading />
      <VehicleTypes />
      <ValueCards />
      <BadgeMarquee tone="dark" />
      <InstagramCta />
      <CtaBand
        eyebrow="— Ready to shine?"
        title="Make Your Car Shine"
        accent="Shine"
        line="Experience mobile detailing done right. Book your detail with Mr. Details today."
        layout="center"
      />
    </>
  );
}
