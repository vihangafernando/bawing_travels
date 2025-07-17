import type { Metadata } from "next";
import TourPackages from "@/components/tour-packages";
import CustomTourCTA from "@/components/custom-tour-cta";

export const metadata: Metadata = {
  title: "Tour Packages | Bawing Travels",
  description:
    "Explore our carefully crafted tour packages for Sri Lanka. Choose from 8, 12, or 15-day tours or create your own custom itinerary.",
};

export default function ToursPage() {
  return (
    <div className="container mx-auto px-4 py-12 lg:mt-[5%] mt-[16%]">
      <h1 className="text-4xl font-bold mb-6">Sri Lanka Tour Packages</h1>
      <p className="text-lg mb-12 max-w-3xl">
        Discover the beauty and diversity of Sri Lanka with our carefully
        crafted tour packages. Whether you're looking for a short getaway or an
        extended exploration, we have the perfect itinerary for you. Each tour
        includes comfortable accommodation, transportation, experienced guides,
        and carefully selected experiences to showcase the best of Sri Lanka.
      </p>

      <TourPackages showDetailed={true} />

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Create Your Dream Journey</h2>
        <p className="text-lg mb-8">
          Can't find exactly what you're looking for? Let us design a
          personalized itinerary tailored to your interests, preferences, and
          schedule. Our travel experts will work with you to create a unique Sri
          Lankan experience.
        </p>

        <CustomTourCTA />
      </div>
    </div>
  );
}
