import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Packages from "@/components/sections/Packages";
import PackageDetails from "@/components/sections/PackageDetails";
import Addons from "@/components/sections/Addons";
import VehicleTypes from "@/components/sections/VehicleTypes";
import Specials from "@/components/sections/Specials";
import Results from "@/components/sections/Results";
import FAQ from "@/components/FAQ";
import CtaBand from "@/components/sections/CtaBand";
import { FAQ_PACKAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Mr. Details mobile detailing packages — full interior + exterior, interior only, or exterior only, plus ceramic wax, rim restoration and more add-ons. We come to you across the South Shore of Massachusetts.",
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="— Our packages"
        title="Choose the Right Package"
        accent="Package"
        subtitle="Choose a complete interior and exterior detail, or just the interior or exterior — and let us service all of your vehicles at once."
        crumb="Packages"
      />
      <Packages hideHeading showAll />
      <PackageDetails />
      <Addons />
      <Results />
      <VehicleTypes />
      <Specials />
      <FAQ
        items={FAQ_PACKAGES}
        eyebrow="— Good to know"
        title="Package Questions"
        accent="Questions"
        tone="peach"
      />
      <CtaBand
        title="Ready to book your mobile detail?"
        accent="mobile"
        line="We come to you across the South Shore — pick a time and we'll handle the rest."
        layout="split"
      />
    </>
  );
}
