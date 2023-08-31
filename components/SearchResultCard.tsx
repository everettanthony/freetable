import Link from 'next/link';
import Image from 'next/image';
import { RestaurantCardType } from '@/app/page';
import Reviews from './Reviews';
import Price from './Price';

interface Props {
    restaurant: RestaurantCardType
}

export default function SearchResultCard({restaurant}: Props) {
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
                        <Reviews size={100} />
                    </div>
                    <p className="ml-2 text-sm">Awesome</p>
                </div>
                <div className="mb-9">
                    <div className="font-light flex text-reg">
                        <p className="mr-1"><Price price={restaurant.price} /></p>
                        <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
                        <p className="mr-4 capitalize">{restaurant.location.name}</p>
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