import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/images/logoo2.png"
                alt="Bawing Travels Logo"
                width={110}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Discover the beauty of Sri Lanka with Bawing Travels. We offer
              personalized tours and unforgettable experiences across the
              island.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1MZMgYb1TY/?mibextid=wwXIfr"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/bawing_travels?igsh=b2o3YXZheHBnemZl&utm_source=qr"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/tours"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tours
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Popular Tours</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tours/8"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  8 Days Cultural Tour
                </Link>
              </li>
              <li>
                <Link
                  href="/tours/12"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  12 Days Highlights Tour
                </Link>
              </li>
              <li>
                <Link
                  href="/tours/15"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  15 Days Complete Tour
                </Link>
              </li>
              <li>
                <Link
                  href="/tours"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Wildlife Safari
                </Link>
              </li>
              <li>
                <Link
                  href="/tours"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Beach Getaway
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300">
                  95/D , Fonsekawatta Road , Phoaddaramulla, Wadduwa
                  <br />
                  Sri Lanka
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300">+94 714455312</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300">
                  bookings@bawingtravels.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Bawing Travels. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="https://codecrest.it.com/"
              className="text-gray-200 hover:text-lime-400 text-sm transition-colors"
            >
              Powered by CodeCrest (PVT) LTD
            </Link>
            <Link
              href=""
              className="text-gray-600 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
