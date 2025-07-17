import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const tourPackages = [
  {
    id: "8",
    title: "8 Days Cultural Tour",
    description:
      "Explore the cultural triangle and ancient cities of Sri Lanka",
    days: 8,
    price: 1200,
    image: "/images/tourcultural.jpg",
    destinations: ["Colombo", "Sigiriya", "Kandy", "Nuwara Eliya", "Galle"],
  },
  {
    id: "12",
    title: "12 Days Highlights Tour",
    description:
      "Experience the best of Sri Lanka's culture, wildlife, and beaches",
    days: 12,
    price: 1800,
    image: "/images/tourhighlights.jpg",
    destinations: [
      "Colombo",
      "Sigiriya",
      "Kandy",
      "Nuwara Eliya",
      "Yala",
      "Mirissa",
      "Galle",
    ],
  },
  {
    id: "15",
    title: "15 Days Complete Tour",
    description:
      "Comprehensive journey through Sri Lanka's diverse landscapes and heritage",
    days: 15,

    image: "/images/tourcomplete.jpg",
    destinations: [
      "Colombo",
      "Anuradhapura",
      "Sigiriya",
      "Kandy",
      "Nuwara Eliya",
      "Ella",
      "Yala",
      "Mirissa",
      "Galle",
    ],
  },
];

export default function TourPackages({
  showDetailed = false,
}: {
  showDetailed?: boolean;
}) {
  return (
    <section className={showDetailed ? "" : "py-16 "}>
      {!showDetailed && (
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Tour Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully crafted tour packages designed to showcase
            the best of Sri Lanka. Each tour includes accommodation,
            transportation, and expert guides.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tourPackages.map((tour) => (
          <div
            key={tour.id}
            className="bg-white rounded-lg overflow-hidden shadow-md tour-card"
          >
            <div className="relative h-56">
              <Image
                src={tour.image || "/placeholder.svg"}
                alt={tour.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-teal-600 text-white py-1 px-3 rounded-full text-sm font-medium"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
              <p className="text-gray-600 mb-4">{tour.description}</p>

              <div className="flex items-center text-gray-500 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>
                  {tour.days} days / {tour.days - 1} nights
                </span>
              </div>

              <div className="flex items-center text-gray-500 mb-6">
                <MapPin className="h-4 w-4 mr-2" />
                <span>
                  {tour.destinations.slice(0, 3).join(", ")}
                  {tour.destinations.length > 3 && "..."}
                </span>
              </div>

              <div className="flex justify-between">
                <Link
                  href={`/tours/${tour.id}`}
                  className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium "
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href={`/contact?tour=${tour.id}`}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
