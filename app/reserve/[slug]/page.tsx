import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import ReserveHeader from '@/components/ReserveHeader';
import ReserveForm from '@/components/ReserveForm';

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (slug: string) => {
    const restaurant = await prisma.restaurant.findUnique({
        where: {
            slug
        }
    });

    if (!restaurant) {
        notFound();
    }

    return restaurant;
};

export default async function ReservationPage({
    params,
    searchParams,
  }: {
    params: { slug: string };
    searchParams: { date: string; partySize: string };
  }) {
    const restaurant = await fetchRestaurantBySlug(params.slug);

    return (
        <div className="bg-gray-100 min-h-screen w-full">
            <div className="m-auto bg-white">
                <div className="border-t h-screen">
                    <div className="py-9 w-3/5 m-auto">
                        <ReserveHeader           
                            image={restaurant.main_image}
                            name={restaurant.name}
                            date={searchParams.date}
                            partySize={searchParams.partySize} />

                        {/* FORM */}
                        <div className="mt-6 flex flex-wrap justify-between w-[660px]">
                            <ReserveForm 
                                partySize={searchParams.partySize}
                                slug={params.slug}
                                date={searchParams.date} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}