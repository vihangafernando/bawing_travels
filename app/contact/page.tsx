import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Bawing Travels",
  description:
    "Get in touch with Bawing Travels for inquiries about our Sri Lanka tour packages or to book your next adventure.",
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const selectedTour = searchParams.tour as string | undefined;

  return (
    <div className="container mx-auto px-4 py-12 lg:mt-[5%] mt-[16%]">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-12 max-w-3xl">
        Have questions about our tours or ready to book your Sri Lankan
        adventure? Get in touch with our team of travel experts. We're here to
        help you plan the perfect trip.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <ContactForm selectedTour={selectedTour} />
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex">
                <MapPin className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-600">
                    95/D , Fonsekawatta Road , Phoaddaramulla, Wadduwa <br />
                    Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex">
                <Phone className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">+94 714455312</p>
                </div>
              </div>

              <div className="flex">
                <Mail className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">bookings@bawingtravels.com</p>
                </div>
              </div>

              <div className="flex">
                <Clock className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 1:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0">
                  ✓
                </div>
                <span>Personalized travel experiences</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0">
                  ✓
                </div>
                <span>Expert local guides</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0">
                  ✓
                </div>
                <span>24/7 customer support</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0">
                  ✓
                </div>
                <span>Sustainable tourism practices</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0">
                  ✓
                </div>
                <span>Competitive pricing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
