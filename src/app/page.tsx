import Hero from "@/components/sections/Hero";
import FeatureTeaser from "@/components/sections/FeatureTeaser";
import BadgeMarquee from "@/components/BadgeMarquee";
import MobileSpotlight from "@/components/sections/MobileSpotlight";
import Packages from "@/components/sections/Packages";
import CtaBand from "@/components/sections/CtaBand";
import Results from "@/components/sections/Results";
import Reviews from "@/components/sections/Reviews";
import About from "@/components/sections/About";
import ValueCards from "@/components/sections/ValueCards";
import HowItWorks from "@/components/sections/HowItWorks";
import ServiceArea from "@/components/sections/ServiceArea";

/**
 * Mr. Details homepage — section flow per DESIGN.md §5.
 * Each section is its own component; copy/data lives in lib/content.ts.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <FeatureTeaser />
      <BadgeMarquee tone="peach" />
      <MobileSpotlight />
      <Packages />

      {/* §5.7 mid-page CTA */}
      <CtaBand
        title="Ready to book your mobile detail?"
        accent="mobile"
        line="We come to you across the South Shore — pick a time and we'll handle the rest."
        layout="split"
      />

      <Results />
      <Reviews />
      <About />
      <ValueCards />
      <HowItWorks />
      <ServiceArea />

      {/* §5.14 final CTA */}
      <CtaBand
        eyebrow="— Ready to shine?"
        title="Book Your Detail Today"
        accent="Detail"
        line="Make your car shine like never before. Mobile auto detailing, brought right to your door on the South Shore of Massachusetts."
        layout="center"
      />
    </>
  );
}
