import Link from 'next/link';
import RestaurantNavBar from '@/components/RestaurantNavBar';

export default function RestaurantMenuPage() {
    return (
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
            <div className="bg-white w-[70%] rounded py-5 px-6 shadow">
                <RestaurantNavBar />
                <div className="bg-white mt-5">
                    <div className="mt-4 pb-1 mb-1">
                        <h1 className="font-bold text-4xl">Menu</h1>
                    </div>
                    <div className="flex flex-wrap justify-between">
                        <div className=" border rounded p-3 w-[49%] mb-3">
                            <h3 className="font-bold text-lg">
                                Carne Asada
                            </h3>
                            <p className="font-light mt-1 text-sm">
                                A seasoned steak mixed with grilled onions and peppers.
                            </p>
                            <p className="mt-2">$80.00</p>
                        </div>
                        <div className=" border rounded p-3 w-[49%] mb-3">
                            <h3 className="font-bold text-lg">
                                Chicken Enchiladas
                            </h3>
                            <p className="font-light mt-1 text-sm">
                                Shredded chicken wrapped in a corn tortilla
                            </p>
                            <p className="mt-2">$40.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}