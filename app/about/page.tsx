import type { Metadata } from "next";
import Image from "next/image";
import { getReviews } from "@/lib/api";
import ReviewForm from "@/components/review-form";
import ReviewList from "@/components/review-list";

export const metadata: Metadata = {
  title: "About Us | Bawing Travels",
  description:
    "Learn about Bawing Travels, your trusted travel agency in Sri Lanka offering exceptional tour experiences.",
};

export default async function AboutPage() {
  // Fetch reviews server-side
  const reviews = await getReviews();

  return (
    <div className="container mx-auto px-4 py-12 lg:mt-[5%] mt-[16%]">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6">About Bawing Travels</h1>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              Bawing Travels is a premier travel agency based in Sri Lanka,
              dedicated to providing unforgettable experiences for travelers
              from around the world. With our deep knowledge of Sri Lanka's rich
              culture, stunning landscapes, and hidden gems, we craft journeys
              that showcase the best this beautiful island has to offer.
            </p>
            <p className="text-lg mb-4">
              Founded in 2010, our team of experienced travel professionals is
              passionate about creating personalized itineraries that cater to
              your interests, preferences, and budget. Whether you're seeking
              adventure, relaxation, cultural immersion, or wildlife encounters,
              we have the expertise to make your Sri Lankan dream vacation a
              reality.
            </p>
            <p className="text-lg">
              Our commitment to exceptional service, attention to detail, and
              sustainable tourism practices has earned us a reputation as one of
              Sri Lanka's most trusted travel partners. We believe in
              responsible tourism that benefits local communities while
              preserving the natural beauty and cultural heritage of our island.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/aboutuss.png"
              alt="Bawing Travels Team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <div key={num} className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={`/images/gallery-${num}.jpg`}
                alt={`Sri Lanka travel gallery image ${num}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-14">
        <div>
          <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>
          <ReviewList reviews={reviews} />
        </div>
        <div>
          <img src="/mapsl.png" alt="" className="" />
        </div>
      </section>
    </div>
  );
}
