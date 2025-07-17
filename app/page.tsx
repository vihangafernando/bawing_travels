import Hero from "@/components/hero";
import FeaturedDestinations from "@/components/featured-destinations";
import TourPackages from "@/components/tour-packages";
import Testimonials from "@/components/testimonials";
import CallToAction from "@/components/call-to-action";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDestinations />
      <TourPackages />
      <Testimonials />
      <CallToAction />
    </>
  );
}
