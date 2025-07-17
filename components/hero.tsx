"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, X } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/sigiriya5.jpg",
    title: "Discover the Beauty of Sri Lanka",
    subtitle: "Explore ancient cities, pristine beaches, and lush landscapes",
  },
  {
    id: 2,
    image: "/images/bg5.jpg",
    title: "Experience Rich Culture & Heritage",
    subtitle: "Immerse yourself in Sri Lanka's vibrant traditions and history",
  },
  {
    id: 3,
    image: "/images/background1.jpg",
    title: "Unforgettable Wildlife Adventures",
    subtitle:
      "Encounter elephants, leopards, and exotic birds in their natural habitat",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        backgroundImage: "url('/images/sigiriya5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative h-[80vh] min-h-[600px]"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-3000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/30 z-10" />
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white hero-animation">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/tours"
              className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Explore Tours
            </Link>
            <div className="flex flex-col items-center">
              {/* Button to open modal */}
              <button
                className="flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium py-3 lg:px-8 px-[32.5%] rounded-lg transition-colors"
                onClick={() => setIsOpen(true)}
              >
                <Play className="h-5 w-5 mr-2" />
                Watch Video
              </button>

              {/* Modal */}
              {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md">
                  <div className="bg-black rounded-lg shadow-lg p-4 relative w-[90%] max-w-2xl">
                    {/* Close button */}
                    <button
                      className="absolute top-2 right-2 text-white hover:text-gray-400"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="w-6 h-6" />
                    </button>

                    {/* Video */}
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        className="w-full h-[300px] md:h-[400px] rounded-lg"
                        src="https://youtu.be/r6HTCiPwJr8"
                        title="YouTube video"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
