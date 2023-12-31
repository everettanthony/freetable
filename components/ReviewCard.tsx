import { Review } from '@prisma/client';
import ReviewRating from './ReviewRating';

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="border-b pb-7 mb-7">
        <div className="flex">
            <div className="w-1/6 flex flex-col items-center">
                <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                    <h2 className="text-white text-2xl">
                        {review.first_name[0]}{review.last_name[0]}
                    </h2>
                </div>
                <p className="text-center mt-1">{review.first_name} {review.last_name}</p>
            </div>
            <div className="ml-10 w-5/6">
                <div className="flex -ml-1">
                    <ReviewRating size={150} rating={review.rating} />
                </div>
                <div className="mt-3">
                    <p className="text-lg font-light">
                        {review.text}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
