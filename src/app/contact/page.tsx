import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/FAQ";
import CtaBand from "@/components/sections/CtaBand";
import { FAQ_GENERAL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a mobile detail with Mr. Details. Call (617) 827-2268 or book online via Calendly — serving the South Shore of Massachusetts.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="— Contact"
        title="Let's Get You Booked"
        accent="Booked"
        subtitle="Book online in minutes, or call us — we'll bring the detail to your home or business."
        crumb="Contact"
      />
      <Contact />
      <FAQ
        items={FAQ_GENERAL}
        eyebrow="— Common questions"
        title="Frequently Asked"
        accent="Asked"
        tone="peach"
      />
      <CtaBand
        title="We come to you"
        accent="you"
        line="Mobile auto detailing across the South Shore — book your detail today."
        layout="split"
      />
    </>
  );
}
