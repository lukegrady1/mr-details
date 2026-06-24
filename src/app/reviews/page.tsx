import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RatingBand from "@/components/sections/RatingBand";
import Reviews from "@/components/sections/Reviews";
import ValueCards from "@/components/sections/ValueCards";
import InstagramCta from "@/components/sections/InstagramCta";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "See what South Shore customers say about Mr. Details mobile auto detailing — a 5-star experience, every time.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="— 5-Star reviews"
        title="Don't Just Take Our Word"
        accent="Our Word"
        subtitle="A 5-star experience customers across the South Shore keep coming back for."
        crumb="Reviews"
      />
      <RatingBand />
      <ValueCards />
      <Reviews hideHeading />
      <InstagramCta />
      <CtaBand
        eyebrow="— Ready to shine?"
        title="Join Our Happy Customers"
        accent="Happy"
        line="Book a mobile detail today and see the Mr. Details difference for yourself."
        layout="center"
      />
    </>
  );
}
