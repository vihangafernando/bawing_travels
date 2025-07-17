import type { Tour } from "./types";

const tours: Tour[] = [
  {
    id: "8",
    title: "8 Days Cultural Tour",
    description:
      "Explore the cultural triangle and ancient cities of Sri Lanka on this comprehensive 8-day tour. Visit UNESCO World Heritage sites, discover ancient ruins, and experience the rich cultural heritage of the island.",
    days: 8,
    price: 1200,
    image: "/images/tourcultural.jpg",
    destinations: [
      "Colombo",
      "Sigiriya",
      "Polonnaruwa",
      "Kandy",
      "Nuwara Eliya",
      "Galle",
    ],
    highlights: [
      "Climb the iconic Sigiriya Rock Fortress",
      "Explore the ancient city of Polonnaruwa",
      "Visit the Temple of the Sacred Tooth Relic in Kandy",
      "Experience a traditional cultural dance performance",
      "Tour a tea plantation in Nuwara Eliya",
      "Discover the Temple of Tooth",
    ],
    itinerary: [
      {
        title: " Airport to Negombo",
        description:
          "Arrive at Bandaranaike International Airport where you'll be met by your guide. Transfer to your hotel in Negombo for an evening at leisure after a welcome dinner.",
        location: "Negombo",
      },
      {
        title: "Negombo to Sigiriya  ",
        description:
          "After breakfast, drive to Sigiriya.  A UNESCO World Heritage site featuring Buddhist mural paintings and statues.",
        location: "Sigiriya",
      },
      {
        title: "Habarana",
        description:
          "Habarana is a small city in the Anuradhapura District of Sri Lanka.. In the afternoon, enjoy a village safari experience to learn about rural Sri Lankan life.",
        location: "Habarana",
      },
      {
        title: "Polonnaruwa",
        description:
          "Full-day excursion to the ancient city of Polonnaruwa, the second capital of Sri Lanka. Explore the well-preserved ruins and archaeological treasures.",
        location: "Polonnaruwa",
      },
      {
        title: "Sigiriya to Kandy",
        description:
          "Travel to Kandy, visiting a spice garden en route. Evening visit to the Temple of the Sacred Tooth Relic followed by a cultural dance performance.",
        location: "Kandy",
      },
      {
        title: "Dambulla cave temple",
        description:
          "Dambulla cave temple, also known as the Golden Temple of Dambulla,A UNESCO World Heritage site featuring Buddhist mural paintings and statues.",
        location: "Dambulla",
      },
      {
        title: "Kandy",
        description:
          "Kandy is a large city in central Sri Lanka. It's set on a plateau surrounded by mountains, which are home to tea plantations and biodiverse rainforest. The city's heart is scenic Kandy Lake (Bogambara Lake), which is popular for strolling. Kandy is famed for sacred Buddhist sites, including the Temple of the Tooth (Sri Dalada Maligawa) shrine, celebrated with the grand Esala Perahera annual procession.",
        location: "Kandy",
      },
      {
        title: "Nuwara Eliya / Ella",
        description:
          "Experience the scenic train journey from Nanu Oya to Ella, considered one of the most beautiful train rides in the world. Afternoon hike to Little Adam's Peak.",
        location: "Nuwara Eliya",
      },
    ],
  },
  {
    id: "12",
    title: "12 Days Highlights Tour",
    description:
      "Experience the best of Sri Lanka's culture, wildlife, and beaches on this comprehensive 12-day tour. From ancient cities to wildlife safaris and relaxing beach stays, this tour offers a perfect balance of exploration and relaxation.",
    days: 12,
    price: 1800,
    image: "/images/tourhighlights.jpg",
    destinations: [
      "Colombo",
      "Anuradhapura",
      "Sigiriya",
      "Kandy",
      "Nuwara Eliya",
      "Yala",
      "Mirissa",
      "Galle",
    ],
    highlights: [
      "Explore the sacred ancient city of Anuradhapura",
      "Climb the iconic Sigiriya Rock Fortress",
      "Visit the Temple of the Sacred Tooth Relic in Kandy",
      "Experience the scenic train ride to Ella",
      "Spot leopards and elephants on a safari in Yala National Park",
      "Whale watching excursion in Mirissa (seasonal)",
      "Discover the colonial charm of Galle Fort",
    ],
    itinerary: [
      {
        title: " Airport to Negombo",
        description:
          "Arrive at Bandaranaike International Airport where you'll be met by your guide. Transfer to your hotel in Negombo for an evening at leisure after a welcome dinner.",
        location: "Negombo",
      },
      {
        title: "Negombo to Sigiriya  ",
        description:
          "After breakfast, drive to Sigiriya.  A UNESCO World Heritage site featuring Buddhist mural paintings and statues.",
        location: "Sigiriya",
      },
      {
        title: "Habarana",
        description:
          "Habarana is a small city in the Anuradhapura District of Sri Lanka.. In the afternoon, enjoy a village safari experience to learn about rural Sri Lankan life.",
        location: "Habarana",
      },
      {
        title: "Polonnaruwa",
        description:
          "Full-day excursion to the ancient city of Polonnaruwa, the second capital of Sri Lanka. Explore the well-preserved ruins and archaeological treasures.",
        location: "Polonnaruwa",
      },
      {
        title: "Sigiriya to Kandy",
        description:
          "Travel to Kandy, visiting a spice garden en route. Evening visit to the Temple of the Sacred Tooth Relic followed by a cultural dance performance.",
        location: "Kandy",
      },
      {
        title: "Dambulla cave temple",
        description:
          "Dambulla cave temple, also known as the Golden Temple of Dambulla,A UNESCO World Heritage site featuring Buddhist mural paintings and statues.",
        location: "Dambulla",
      },
      {
        title: "Kandy",
        description:
          "Kandy is a large city in central Sri Lanka. It's set on a plateau surrounded by mountains, which are home to tea plantations and biodiverse rainforest. The city's heart is scenic Kandy Lake (Bogambara Lake), which is popular for strolling. Kandy is famed for sacred Buddhist sites, including the Temple of the Tooth (Sri Dalada Maligawa) shrine, celebrated with the grand Esala Perahera annual procession.",
        location: "Kandy",
      },
      {
        title: "Nuwara Eliya / Ella",
        description:
          "Experience the scenic train journey from Nanu Oya to Ella, considered one of the most beautiful train rides in the world. Afternoon hike to Little Adam's Peak.",
        location: "Nuwara Eliya",
      },
      {
        title: "Ella to Yala",
        description:
          "Morning visit to the Nine Arch Bridge. Drive to Yala with a stop at Ravana Falls. Afternoon safari in Yala National Park, famous for its leopard population.",
        location: "Yala",
      },
      {
        title: "Yala to Mirissa",
        description:
          "Morning safari in Yala National Park. Afternoon drive to Mirissa, a beautiful beach destination on the south coast.",
        location: "Mirissa",
      },
      {
        title: "Mirissa",
        description:
          "Early morning whale watching excursion (seasonal). Afternoon at leisure to relax on the beach or explore the charming coastal town.",
        location: "Mirissa",
      },
      {
        title: "Galle",
        description:
          "Morning visit to Galle Fort. Afternoon return to Colombo for last-minute shopping before your departure transfer to the airport.",
        location: "Galle",
      },
    ],
  },
  {
    id: "15",
    title: "15 Days Complete Tour",
    description:
      "The ultimate Sri Lankan experience, this comprehensive 15-day tour takes you through the island's diverse landscapes, rich cultural heritage, and stunning natural beauty. From ancient cities to wildlife safaris, tea plantations to pristine beaches, this tour offers it all.",
    days: 15,
    price: 2200,
    image: "/images/tourcomplete.jpg",
    destinations: [
      "Colombo",
      "Anuradhapura",
      "Jaffna",
      "Trincomalee",
      "Sigiriya",
      "Kandy",
      "Nuwara Eliya",
      "Ella",
      "Yala",
      "Mirissa",
      "Galle",
    ],
    highlights: [
      "Explore the ancient cities of Anuradhapura and Polonnaruwa",
      "Discover the unique culture of Down South in South Sri Lanka",
      "Relax on the pristine beaches of Trincomalee",
      "Climb the iconic Sigiriya Rock Fortress",
      "Experience the scenic train ride to Ella",
      "Spot wildlife on safaris in Minneriya and Yala National Parks",
      "Whale watching excursion in Mirissa (seasonal)",
      "Discover the colonial charm of Galle Fort",
    ],
    itinerary: [
      {
        title: " Airport to Negombo",
        description:
          "Arrive at Bandaranaike International Airport where you'll be met by your guide. Transfer to your hotel in Negombo for an evening at leisure after a welcome dinner.",
        location: "Negombo",
      },
      {
        title: "Negombo to Sigiriya  ",
        description:
          "After breakfast, drive to Sigiriya.  A UNESCO World Heritage site featuring Buddhist mural paintings and statues.",
        location: "Sigiriya",
      },
      {
        title: "Habarana",
        description:
          "Habarana is a small city in the Anuradhapura District of Sri Lanka.. In the afternoon, enjoy a village safari experience to learn about rural Sri Lankan life.",
        location: "Habarana",
      },
      {
        title: "Anuradhapura",
        description:
          "Anuradhapura, a Ceylonese political and religious capital that flourished for 1,300 years, was abandoned after an invasion in 993.",
        location: "Anuradhapura",
      },
      {
        title: "Polonnaruwa",
        description:
          "Full-day excursion to the ancient city of Polonnaruwa, the second capital of Sri Lanka. Explore the well-preserved ruins and archaeological treasures.",
        location: "Polonnaruwa",
      },
      {
        title: "Sigiriya to Kandy",
        description:
          "Travel to Kandy, visiting a spice garden en route. Evening visit to the Temple of the Sacred Tooth Relic followed by a cultural dance performance.",
        location: "Kandy",
      },
      {
        title: "Dambulla cave temple",
        description:
          "Dambulla cave temple, also known as the Golden Temple of Dambulla,A UNESCO World Heritage site featuring Buddhist mural paintings and statues.",
        location: "Dambulla",
      },
      {
        title: "Kandy",
        description:
          "Kandy is a large city in central Sri Lanka. It's set on a plateau surrounded by mountains, which are home to tea plantations and biodiverse rainforest. The city's heart is scenic Kandy Lake (Bogambara Lake), which is popular for strolling. Kandy is famed for sacred Buddhist sites, including the Temple of the Tooth (Sri Dalada Maligawa) shrine, celebrated with the grand Esala Perahera annual procession.",
        location: "Kandy",
      },
      {
        title: "Nuwara Eliya / Ella",
        description:
          "Experience the scenic train journey from Nanu Oya to Ella, considered one of the most beautiful train rides in the world. Afternoon hike to Little Adam's Peak.",
        location: "Nuwara Eliya",
      },
      {
        title: "Ella to Yala",
        description:
          "Morning visit to the Nine Arch Bridge. Drive to Yala with a stop at Ravana Falls. Afternoon safari in Yala National Park, famous for its leopard population.",
        location: "Yala",
      },

      {
        title: "Yala to Mirissa",
        description:
          "Morning safari in Yala National Park. Afternoon drive to Mirissa, a beautiful beach destination on the south coast.",
        location: "Mirissa",
      },

      {
        title: "Arugambay",
        description:
          "Arugam Bay, known locally as Arugam Kudah, is situated on the Indian Ocean in the dry zone of Sri Lanka's southeast coast, and a historic settlement of the ancient Batticaloa Territory.",
        location: "Arugambay",
      },
      {
        title: "Galle",
        description:
          "Morning visit to Galle Fort. Afternoon return to Colombo for last-minute shopping before your departure transfer to the airport.",
        location: "Galle",
      },
      {
        title: "Galle to Colombo ",
        description:
          "Early morning whale watching excursion (seasonal). Visit Galle Fort en route to Colombo. Evening departure transfer to the airport.",
        location: "Colombo",
      },
      {
        title: "Negambo ",
        description:
          "Early morning whale watching excursion (seasonal). Visit Beaches en route to Airport. Evening departure transfer to the airport.",
        location: "Negambo",
      },
    ],
  },
];

export function getTourByDays(days: string): Tour | undefined {
  return tours.find((tour) => tour.id === days);
}

export function getAllTours(): Tour[] {
  return tours;
}
