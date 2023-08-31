import { Cuisine, Location, PRICE } from '@prisma/client';
import Link from 'next/link';

export default function SearchSideBar({
        cuisines, 
        locations,
        searchParams
    }: { 
        cuisines: Cuisine[], 
        locations: Location[],
        searchParams: { city?: string, cuisine?: string, price?: PRICE }
    }) {   
    return (
        <div className="w-1/5 pr-5">
            <div className="border-b pb-4">
                <h2 className="mb-2 font-semibold">Region</h2>
                <ul className="group font-light text-reg capitalize">
                    {locations.map((location) =>
                        <li key={location.id}>
                            <Link href={{
                                pathname: 'search',
                                query: {
                                    ...searchParams,
                                    city: location.name
                                }
                            }}>{location.name}</Link>
                        </li>
                    )}
                </ul>
            </div>
            <div className="border-b pb-4 mt-3">
                <h2 className="mb-2 font-semibold">Cuisine</h2>
                <ul className="group font-light text-reg capitalize">
                    {cuisines.map((cuisine) =>
                        <li key={cuisine.id}>
                            <Link href={{
                                pathname: 'search',
                                query: {
                                    ...searchParams,
                                    cuisine: cuisine.name
                                }
                            }}>{cuisine.name}</Link>
                        </li>
                    )}
                </ul>
            </div>
            <div className="mt-3 pb-4">
                <h2 className="mb-2 font-semibold">Price</h2>
                <div className="flex group text-reg font-light">
                    <Link 
                        href={{
                            pathname: 'search',
                            query: {
                                ...searchParams,
                                price: PRICE.CHEAP
                            }
                        }}
                        className="border rounded-l text-center w-full p-2">
                        $
                    </Link>
                    <Link 
                        href={{
                            pathname: 'search',
                            query: {
                                ...searchParams,
                                price: PRICE.REGULAR
                            }
                        }}
                        className="border-r border-t border-b text-center w-full p-2">
                        $$
                    </Link>
                    <Link 
                        href={{
                            pathname: 'search',
                            query: {
                                ...searchParams,
                                price: PRICE.EXPENSIVE
                            }
                        }}
                        className="border-r border-t border-b rounded-r text-center w-full p-2">
                        $$$
                    </Link>
                </div>
            </div>
        </div>
    )
}