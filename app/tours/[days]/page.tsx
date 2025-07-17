import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, MapPin, Users } from "lucide-react";
import { getTourByDays } from "@/lib/tours";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { days: string };
}): Promise<Metadata> {
  const tour = getTourByDays(params.days);

  if (!tour) {
    return {
      title: "Tour Not Found | Bawing Travels",
    };
  }

  return {
    title: `${tour.title} | Bawing Travels`,
    description: tour.description,
  };
}

export default function TourDetailsPage({
  params,
}: {
  params: { days: string };
}) {
  const tour = getTourByDays(params.days);

  if (!tour) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 lg:mt-[5%] mt-[16%]">
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{tour.title}</h1>
          <p className="text-lg mb-6">{tour.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <Calendar className="h-6 w-6 text-teal-600 mb-2" />
              <span className="text-sm text-gray-500">Duration</span>
              <span className="font-medium">{tour.days} Days</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <MapPin className="h-6 w-6 text-teal-600 mb-2" />
              <span className="text-sm text-gray-500">Destinations</span>
              <span className="font-medium">
                {tour.destinations.length + 12}+
              </span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <Users className="h-6 w-6 text-teal-600 mb-2" />
              <span className="text-sm text-gray-500">Group Size</span>
              <span className="font-medium">2-12 People</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <Clock className="h-6 w-6 text-teal-600 mb-2" />
              <span className="text-sm text-gray-500">Start Time</span>
              <span className="font-medium">Flexible</span>
            </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
            <Image
              src={tour.image || "/placeholder.svg"}
              alt={tour.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Tour Highlights</h2>
            <ul className="grid md:grid-cols-2 gap-2">
              {tour.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
            <div className="space-y-6">
              {tour.itinerary.map((day, index) => (
                <div
                  key={index}
                  className="border-l-2 border-teal-600 pl-4 pb-6"
                >
                  <h3 className="text-xl font-bold mb-2">
                    Day {index + 1}: {day.title}
                  </h3>
                  <p className="mb-3">{day.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{day.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white rounded-lg shadow-lg p-6 border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">Book This Tour</h2>
            <div className="mb-4 pb-4 border-b">
              <div className="flex justify-between text-sm text-gray-500"></div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Included in the price:</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-teal-600 mr-1 mt-0.5 flex-shrink-0" />
                  <span>Accommodation ({tour.days - 1} nights)</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-teal-600 mr-1 mt-0.5 flex-shrink-0" />
                  <span>Transportation throughout the tour</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-teal-600 mr-1 mt-0.5 flex-shrink-0" />
                  <span>English-speaking guide</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-teal-600 mr-1 mt-0.5 flex-shrink-0" />
                  <span>Insurance through out the tour</span>
                </li>
                {/* <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-teal-600 mr-1 mt-0.5 flex-shrink-0" />
                  <span>Entrance fees to attractions</span>
                </li> */}
              </ul>
            </div>

            <Link
              href={`/contact?tour=${tour.id}`}
              className="block w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-4 rounded-lg text-center transition-colors"
            >
              Book Now
            </Link>

            <p className="text-sm text-center mt-4 text-gray-500">
              No payment required now. We'll contact you to finalize details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
