import { Star } from "lucide-react";
import Image from "next/image";
import type { Review } from "@/lib/types";

export default function ReviewList({ reviews }: { reviews: Review[] }) {
  if (reviews.length === 0) {
    return (
      <div className="bg-gray-50 p-6 rounded-lg text-center">
        <p className="text-gray-500">
          No reviews yet. Be the first to leave a review!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review.id} className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.location}</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="mt-2 text-gray-600">{review.comment}</p>
              <p className="mt-2 text-gray-400 text-sm">{review.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
