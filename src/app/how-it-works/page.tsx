import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import HowItWorks from "@/components/sections/HowItWorks";
import WhatToExpect from "@/components/sections/WhatToExpect";
import BadgeMarquee from "@/components/BadgeMarquee";
import MobileSpotlight from "@/components/sections/MobileSpotlight";
import FAQ from "@/components/FAQ";
import CtaBand from "@/components/sections/CtaBand";
import { FAQ_PROCESS } from "@/lib/content";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Booking a mobile detail with Mr. Details is simple: book online, we come to you, we detail your vehicle(s), and you enjoy the shine. A full detail typically takes about 3–4 hours.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="— The process"
        title="How It Works"
        accent="Works"
        subtitle="Four simple steps from booking to a fresh, showroom-clean vehicle — no drop-off, no waiting room."
        crumb="How It Works"
      />
      <HowItWorks hideHeading />
      <WhatToExpect />
      <BadgeMarquee tone="dark" />
      <MobileSpotlight />
      <FAQ
        items={FAQ_PROCESS}
        eyebrow="— Questions"
        title="Before You Book"
        accent="Book"
        tone="peach"
      />
      <CtaBand
        eyebrow="— Ready to shine?"
        title="Book Your Detail Today"
        accent="Detail"
        line="Pick a time that works for you — we'll bring everything we need right to your door."
        layout="center"
      />
    </>
  );
}
