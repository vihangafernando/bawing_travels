import type { Metadata } from "next";
import Image from "next/image";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Destinations | Bawing Travels",
  description:
    "Explore popular travel destinations in Sri Lanka with Bawing Travels. Get travel tips and insights for your next adventure.",
};

const destinations = [
  {
    id: 1,
    name: "Sigiriya",
    description:
      "Home to the ancient rock fortress, Sigiriya is a UNESCO World Heritage site featuring stunning frescoes and landscaped gardens.",
    image: "/images/sigiriya.jpg",
    tips: [
      "Visit early morning to avoid crowds and heat",
      "Wear comfortable shoes for climbing",
      "Bring plenty of water and sunscreen",
      "Allow 3-4 hours for the complete experience",
    ],
  },
  {
    id: 2,
    name: "Kandy",
    description:
      "The cultural capital of Sri Lanka, Kandy is home to the Temple of the Tooth Relic and surrounded by beautiful hills and tea plantations.",
    image: "/images/kandy.jpg",
    tips: [
      "Visit the Temple of the Tooth during a puja ceremony",
      "Explore the Royal Botanical Gardens at Peradeniya",
      "Take a stroll around Kandy Lake",
      "Experience the Kandy Cultural Show",
    ],
  },
  {
    id: 3,
    name: "Galle",
    description:
      "A historic city with Dutch colonial architecture, Galle Fort is a UNESCO World Heritage site with charming streets and ocean views.",
    image: "/images/galle.jpg",
    tips: [
      "Walk the fort walls at sunset for spectacular views",
      "Visit the Maritime Museum to learn about Galle's history",
      "Shop for local crafts and gems in the fort area",
      "Try seafood at one of the many restaurants",
    ],
  },
  {
    id: 4,
    name: "Ella",
    description:
      "A picturesque hill station known for its stunning views, hiking trails, and the famous Nine Arch Bridge.",
    image: "/images/ella.jpg",
    tips: [
      "Hike Little Adam's Peak for panoramic views",
      "Visit Nine Arch Bridge when a train is passing",
      "Try traditional Sri Lankan cuisine at local restaurants",
      "Take the scenic train journey from Ella to Kandy",
    ],
  },
  {
    id: 5,
    name: "Bentota",
    description:
      "A coastal town known for its golden beaches, water sports, and Ayurvedic spas.",
    image: "/images/bentota.jpg",
    tips: [
      "Try water sports like jet skiing and banana boat rides",
      "Visit the Brief Garden, a hidden tropical paradise",
      "Take a boat safari on the Bentota River",
      "Indulge in an Ayurvedic spa treatment",
    ],
  },
  {
    id: 6,
    name: "Yala National Park",
    description:
      "Sri Lanka's most famous wildlife park, home to leopards, elephants, sloth bears, and numerous bird species.",
    image: "/images/yala.jpg",
    tips: [
      "Book a morning safari for the best wildlife viewing",
      "Bring binoculars and a camera with zoom lens",
      "Wear neutral-colored clothing",
      "Stay hydrated and bring snacks for the safari",
    ],
  },
  {
    id: 7,
    name: "Arugam Bay",
    description:
      "A paradise for surfers, Arugam Bay offers stunning beaches, thrilling waves, and a laid-back coastal vibe.",
    image: "/images/ArugamBay.jpg",
    tips: [
      "Best time for surfing is from May to September",
      "Try fresh seafood at beachside restaurants",
      "Visit nearby attractions like Pottuvil Lagoon and Kumana National Park",
      "Rent a scooter to explore the coastline",
    ],
  },
  {
    id: 8,
    name: "Anuradhapura",
    description:
      "One of Sri Lanka's ancient capitals, Anuradhapura is a UNESCO World Heritage site known for its well-preserved ruins of ancient civilization.",
    image: "/images/Anuradhapura.jpg",
    tips: [
      "Visit the sacred Bodhi Tree (Sri Maha Bodhi), one of the oldest trees in the world",
      "Explore the massive stupas like Ruwanwelisaya and Jetavanaramaya",
      "Rent a bicycle to explore the vast ruins",
      "Dress modestly when visiting temples",
    ],
  },
];

export default function DestinationsPage() {
  return (
    <div className="container mx-auto px-4 py-12 lg:mt-[5%] mt-[16%]">
      <h1 className="text-4xl font-bold mb-6">Explore Sri Lanka</h1>
      <p className="text-lg mb-12 max-w-3xl">
        Sri Lanka offers a diverse range of destinations, from ancient cities
        and cultural sites to pristine beaches and wildlife sanctuaries.
        Discover the beauty and charm of this tropical island with our
        comprehensive destination guides.
      </p>

      <div className="space-y-16">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className={`${destination.id % 2 === 0 ? "md:order-2" : ""}`}>
              <div className="flex items-center mb-3">
                <MapPin className="h-5 w-5 text-teal-600 mr-2" />
                <h2 className="text-3xl font-bold">{destination.name}</h2>
              </div>
              <p className="text-lg mb-4">{destination.description}</p>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Travel Tips</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {destination.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Best Time to Visit
                </h3>
                <p>
                  {destination.id % 2 === 0
                    ? "December to April is ideal when the weather is dry and sunny."
                    : "May to September offers pleasant weather and fewer crowds."}
                </p>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={destination.image || "/placeholder.svg"}
                alt={`${destination.name}, Sri Lanka`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
