import { PrismaClient, Cuisine, Location, PRICE } from '@prisma/client';
import Banner from '@/components/Banner';
import RestaurantCard from '@/components/RestaurantCard';

export interface RestaurantCardType {
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug: string;
}

const prisma = new PrismaClient();

async function fetchRestaurants(): Promise<RestaurantCardType[]> {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      slug: true,
    }
  });
  return restaurants;
}

export default async function Home() {
  const restaurants = await fetchRestaurants();
  
  return (
    <div className="bg-white min-h-screen w-screen">
      <Banner />
      <section className="py-6 px-36 flex flex-wrap justify-center">
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        ))}
      </section>
    </div>
  )
}
