import type { Metadata } from 'next';
import { PrismaClient, PRICE } from '@prisma/client';
import SearchSideBar from '@/components/SearchSidebar';
import SearchResultCard from '@/components/SearchResultCard';
import SearchHeader from '@/components/SearchHeader';

export const metadata: Metadata = {
    title: 'Search Restaurants | FreeTable',
    description: 'Search for a restaurant near you.',
}

const prisma = new PrismaClient();

interface SearchParams { city?: string, cuisine?: string, price?: PRICE };

function fetchRestaurantByCity(searchParams: SearchParams) {
    const where: any = {};

    if (searchParams.city) {
        const location = {
            name: {
                equals: searchParams.city.toLowerCase()
            }
        }
        where.location = location
    }

    if (searchParams.cuisine) {
        const cuisine = {
            name: {
                equals: searchParams.cuisine.toLowerCase()
            }
        }
        where.cuisine = cuisine
    }

    if (searchParams.price) {
        const price = {
            equals: searchParams.price
        }
        where.price = price
    }

    const select = {
        id: true,
        name: true,
        main_image: true,
        price: true,
        cuisine: true,
        location: true,
        slug: true
    }

    return prisma.restaurant.findMany({ where, select });
}

async function fetchLocations() {
    return prisma.location.findMany();
}

async function fetchCuisines() {
    return prisma.cuisine.findMany();
}

export default async function SearchPage({searchParams}: { searchParams: SearchParams }) {
    const restaurants = await fetchRestaurantByCity(searchParams);
    const locations = await fetchLocations();
    const cuisines = await fetchCuisines();

    return (
        <div className="bg-gray-100 min-h-screen w-screen">
            <SearchHeader />
            <section className="m-auto bg-white">
                <div className="flex py-6 m-auto w-2/3 justify-between items-start">
                    <SearchSideBar cuisines={cuisines} locations={locations} searchParams={searchParams} />
                    <div className="w-5/6 px-5">
                        {restaurants.length ? (
                            restaurants.map((restaurant) => (
                                <SearchResultCard restaurant={restaurant} key={restaurant.id} />
                            ))
                        ) : (
                            <p>No restaurants found.</p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}