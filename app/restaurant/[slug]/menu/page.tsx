import { PrismaClient } from '@prisma/client';
import RestaurantNavBar from '@/components/RestaurantNavBar';

const prisma = new PrismaClient();

async function fetchRestaurantMenu(slug: string) {
    const restaurant = await prisma.restaurant.findUnique({
        where: {
            slug
        },
        select: {
            items: true
        }
    });

    if (!restaurant) {
        throw new Error('No restaurant found.');
    }

    return restaurant.items;
}

export default async function RestaurantMenuPage({ params }: { params: { slug: string } }) {
    const menu = await fetchRestaurantMenu(params.slug);

    return (
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
            <div className="bg-white w-[70%] rounded py-5 px-6 shadow">
                <RestaurantNavBar slug={params.slug} />
                <div className="bg-white mt-5">
                    <div className="mt-4 pb-1 mb-1">
                        <h1 className="font-bold text-4xl mb-3">Menu</h1>
                    </div>
                    <div className="flex flex-wrap justify-between">
                        {menu.length ? (
                            menu.map((item) => (
                                <div className="border rounded p-3 w-[49%] mb-3" key={item.id}>
                                    <h3 className="font-bold text-lg">
                                        {item.name}
                                    </h3>
                                    <p className="font-light mt-1 text-sm">
                                        {item.description}
                                    </p>
                                    <p className="mt-2">{item.price}</p>
                                </div>
                            ))
                        ) : (
                            <div className="my-3">
                                No menu items found. Please check again later.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}