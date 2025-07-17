import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-16 bg-teal-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore Sri Lanka?</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Contact us today to plan your perfect Sri Lankan adventure. Our travel experts are ready to help you create
          unforgettable memories.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/tours"
            className="bg-white text-teal-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors"
          >
            Browse Tours
          </Link>
          <Link
            href="/contact"
            className="bg-transparent hover:bg-teal-700 border-2 border-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center"
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

