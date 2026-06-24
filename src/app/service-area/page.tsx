import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceArea from "@/components/sections/ServiceArea";
import Regions from "@/components/sections/Regions";
import MobileSpotlight from "@/components/sections/MobileSpotlight";
import FAQ from "@/components/FAQ";
import CtaBand from "@/components/sections/CtaBand";
import { FAQ_AREA } from "@/lib/content";

export const metadata: Metadata = {
  title: "Service Area",
  description:
    "Mr. Details brings mobile auto detailing across the South Shore of Massachusetts — Braintree, Weymouth, and surrounding towns — plus Southwest Florida.",
};

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        eyebrow="— Where we work"
        title="Serving the South Shore"
        accent="South Shore"
        subtitle="Mobile detailing across the South Shore region of Massachusetts. Don't see your town? Reach out — we likely cover it."
        crumb="Service Area"
      />
      <ServiceArea hideHeading />
      <Regions />
      <MobileSpotlight />
      <FAQ
        items={FAQ_AREA}
        eyebrow="— Coverage"
        title="Service Area Questions"
        accent="Questions"
        tone="peach"
      />
      <CtaBand
        title="We come to your town"
        accent="your town"
        line="Book online and we'll bring professional detailing right to your driveway."
        layout="split"
      />
    </>
  );
}
