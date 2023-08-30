import Banner from '@/components/Banner';
import RestaurantCard from '@/components/RestaurantCard';
import Star from '@/components/Star';
import { CalendarDaysIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <div className="bg-white min-h-screen w-screen">
      <Banner />
      <section className="py-6 px-36 flex flex-wrap justify-center">
        <RestaurantCard />
      </section>
    </div>
  )
}
