import Link from 'next/link';
import Image from 'next/image';
import { RestaurantCardType } from '@/app/page';
import { CalendarDaysIcon } from '@heroicons/react/24/solid';
import Reviews from './Reviews';
import Price from './Price';

interface Props {
  restaurant: RestaurantCardType
}

export default function RestaurantCard({restaurant}: Props) {
    return (
      <Link href={`/restaurant/${restaurant.slug}`} className="w-72 m-3 rounded-lg overflow-hidden border border-gray-300 transition-transform hover:-translate-y-2 duration-300">
        <Image
          src={restaurant.main_image}
          alt={restaurant.name}
          width={284}
          height={144}
          className="w-full h-36" />
        <div className="py-5 px-6 pb-6 text-[#2d333f]">
          <h3 className="font-bold text-2xl capitalize mb-1">
            {restaurant.name}
          </h3>
          <div className="flex items-center">
            <div className="flex mb-2 lg:mb-0 -ml-0.5">
              <Reviews size={100} />
            </div>
            <p className="ml-2 font-medium">77 reviews</p>
          </div>
          <div className="flex font-normal capitalize">
            <div className="mr-3">{restaurant.cuisine.name}</div>
            <Price price={restaurant.price} />
            <div>{restaurant.location.name}</div>
          </div>
          <div className="mt-2 flex items-center font-medium">
            <CalendarDaysIcon className="w-[25px] h-[25px] mr-2" />
            <span>Booked 3 times today</span>
          </div>
        </div>
      </Link>
    )
}