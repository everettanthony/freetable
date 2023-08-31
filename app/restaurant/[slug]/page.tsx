import { PrismaClient, Review } from '@prisma/client';
import Image from 'next/image';
import Reviews from '@/components/Reviews';
import RestaurantNavBar from '@/components/RestaurantNavBar';
import Reservation from '@/components/Reservation';
import ReviewRating from '@/components/ReviewRating';
import calculateReviewRatingAverage from '@/utils/calculateReviewRatingAverage';

export interface RestaurantType {
    id: number;
    name: string;
    images: string[];
    description: string; 
    slug: string;
    reviews: Review[];
}

const prisma = new PrismaClient();

async function fetchRestaurantBySlug(slug: string): Promise<RestaurantType> {
    const restaurant = await prisma.restaurant.findUnique({
        where: {
            slug
        },
        select: {
            id: true,
            name: true,
            images: true,
            description: true,
            slug: true,
            reviews: true
        }
    });

    if (!restaurant) {
        throw new Error('No restaurant found.');
    }

    return restaurant;
}
  
export default async function RestaurantDetailsPage({ params }: { params: { slug: string } }) {
    const restaurant = await fetchRestaurantBySlug(params.slug);
    const restaurantRating = calculateReviewRatingAverage(restaurant.reviews);

    return (
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
            <div className="bg-white w-[70%] rounded py-5 px-6 shadow">
                <RestaurantNavBar slug={restaurant.slug} />
                <div className="mt-4 border-b pb-6">
                    <h1 className="font-bold text-6xl capitalize">{restaurant?.name}</h1>
                </div>
                <div className="flex items-end">
                    <div className="ratings mt-2 flex items-center">
                        <div className="flex items-center">                                                   
                            <ReviewRating size={100} rating={restaurantRating} />
                        </div>
                        <p className="text-reg ml-1.5">{restaurantRating}</p>
                    </div>
                    <div>
                        <p className="text-reg ml-4">{restaurant.reviews.length} Review{restaurant.reviews.length === 1 ? '' : 's'}</p>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-lg font-light">
                        {restaurant?.description}
                    </p>
                </div>
                <div>
                    <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                        {restaurant?.images ? restaurant?.images.length : 0} photo{restaurant?.images.length > 1 ? 's' : ''}
                    </h1>
                    <div className="flex flex-wrap">
                        {restaurant?.images.map((image, index) => (
                            <Image 
                                src={image}
                                width={256}
                                height={256}
                                key={index}
                                alt={restaurant.name}
                                className="w-56 h-44 mr-1 mb-1"
                            />
                        ))}
                    </div>
                </div>
                <Reviews reviews={restaurant.reviews} />
            </div>
            <Reservation />
        </div>
    )
}