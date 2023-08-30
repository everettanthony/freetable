import Link from 'next/link';
import Star from './Star';
import { CalendarDaysIcon } from '@heroicons/react/24/solid';
import Reviews from './Reviews';

export default function RestaurantCard() {
    return (
      <Link href="/restaurant/herreras" className="w-72 m-3 rounded-lg overflow-hidden border border-gray-300 transition-transform hover:-translate-y-2 duration-300">
        <img
          src="https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg"
          alt=""
          className="w-full h-36" />
        <div className="py-5 px-6 pb-6 text-[#2d333f]">
          <h3 className="font-bold text-2xl mb-1">
            Herrera's
          </h3>
          <div className="flex items-center">
            <div className="flex mb-2 lg:mb-0 -ml-0.5">
              <Reviews size={100} />
            </div>
            <p className="ml-2 font-medium">77 reviews</p>
          </div>
          <div className="flex font-normal capitalize">
            <div className="mr-3">Mexican</div>
            <div className="mr-3">$$$</div>
            <div>Dallas</div>
          </div>
          <div className="mt-2 flex items-center font-medium">
            <CalendarDaysIcon className="w-[25px] h-[25px] mr-2" />
            <span>Booked 3 times today</span>
          </div>
        </div>
      </Link>
    )
}