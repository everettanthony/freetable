import { PrismaClient } from '@prisma/client';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import ReserveHeader from '@/components/ReserveHeader';
import ReserveForm from '@/components/ReserveForm';

const prisma = new PrismaClient();

type Props = {
    params: { slug: string }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {

    function renderTitle() {
        const nameArr = params.slug.split('-');
        nameArr[nameArr.length - 1] = `(${nameArr[nameArr.length - 1]})`;
        return nameArr.join(' ').replace(/\b\w/g, l => l.toUpperCase());
    }

    return {
      title: `Reserve Table at ${renderTitle()} | FreeTable`,
    }
}

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