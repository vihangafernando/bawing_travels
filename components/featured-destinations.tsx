import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const destinations = [
  {
    id: 1,
    name: "Sigiriya",
    image: "/images/sigiriya.jpg",
    description: "Ancient rock fortress with stunning views",
  },
  {
    id: 2,
    name: "Kandy",
    image: "/images/kandy.jpg",
    description: "Cultural capital and home to the Temple of the Tooth",
  },
  {
    id: 3,
    name: "Galle",
    image: "/images/galle.jpg",
    description: "Historic fort city with colonial architecture",
  },
  {
    id: 4,
    name: "Ella",
    image: "/images/ella.jpg",
    description: "Scenic hill country with tea plantations",
  },
]

export default function FeaturedDestinations() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the most beautiful and culturally rich destinations in Sri Lanka. From ancient cities to pristine
            beaches, there's something for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-lg overflow-hidden shadow-md destination-card">
              <div className="relative h-64">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <Link
                  href={`/destinations#${destination.name.toLowerCase()}`}
                  className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium"
                >
                  Explore
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/destinations"
            className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            View All Destinations
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

