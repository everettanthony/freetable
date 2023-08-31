import Link from 'next/link';
import Image from 'next/image';
import { RestaurantCardType } from '@/app/page';
import ReviewRating from '@/components/ReviewRating';
import Price from './Price';
import calculateReviewRatingAverage from '@/utils/calculateReviewRatingAverage';

interface Props {
    restaurant: RestaurantCardType
}

export default function SearchResultCard({ restaurant }: Props) {
    const rating = calculateReviewRatingAverage(restaurant.reviews);

    function renderGreetingText() {
        if (rating > 4) return 'Awesome';
        else if (rating <= 4 && rating > 3) return 'Good';
        else if (rating <= 3 && rating > 0) return 'Average';
        else '';
    }

    return (
        <div className="border-b flex pb-5 mb-5">        
            <Image
                src={restaurant.main_image}
                width={172}
                height={172}
                alt={restaurant.name}
                className="w-[172px] rounded"
            />
            <div className="pl-5">
                <h2 className="text-3xl mb-1 capitalize">
                    <Link href={`/restaurant/${restaurant.slug}`}>
                        {restaurant.name}
                    </Link>
                </h2>
                <div className="flex items-start">
                    <div className="flex mb-2 -ml-0.5">
                        <ReviewRating size={100} rating={rating} />
                    </div>
                    <div className="ml-2 text-sm">{renderGreetingText()}</div>
                </div>
                <div className="mb-9">
                    <div className="font-light flex text-reg">
                        <div className="mr-1"><Price price={restaurant.price} /></div>
                        <div className="mr-4 capitalize">{restaurant.cuisine.name}</div>
                        <div className="mr-4 capitalize">{restaurant.location.name}</div>
                    </div>
                </div>
                <div className="text-red-600">
                    <Link href={`/restaurant/${restaurant.slug}`}>
                        View more information
                    </Link>
                </div>
            </div>
        </div>
    )
}