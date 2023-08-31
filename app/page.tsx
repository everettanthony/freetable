import { PrismaClient } from '@prisma/client';
import Banner from '@/components/Banner';
import RestaurantCard from '@/components/RestaurantCard';

const prisma = new PrismaClient();

async function fetchRestaurants() {
  const restaurants = await prisma.restaurant.findMany();
  return restaurants;
}

export default async function Home() {
  const restaurants = await fetchRestaurants();
  console.log(restaurants);

  return (
    <div className="bg-white min-h-screen w-screen">
      <Banner />
      <section className="py-6 px-36 flex flex-wrap justify-center">
        <RestaurantCard />
      </section>
    </div>
  )
}
