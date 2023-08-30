import Link from 'next/link';
import Star from "@/components/Star";
import Reviews from '@/components/Reviews';
import RestaurantNavBar from '@/components/RestaurantNavBar';
import Reservation from '@/components/Reservation';

export default function RestaurantDetailsPage() {
    return (
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
            <div className="bg-white w-[70%] rounded py-5 px-6 shadow">
                <RestaurantNavBar />
                <div className="mt-4 border-b pb-6">
                    <h1 className="font-bold text-6xl">Herrera's</h1>
                </div>
                <div className="flex items-end">
                    <div className="ratings mt-2 flex items-center">
                        <div className="flex items-center">                                                   
                            <Reviews size={100} />
                        </div>
                        <p className="text-reg ml-4">5.0</p>
                    </div>
                    <div>
                        <p className="text-reg ml-4">600 Reviews</p>
                    </div>
                </div>
                {/* DESCRIPTION */}
                <div className="mt-4">
                    <p className="text-lg font-light">
                        The classics you love prepared with a perfect twist, all served up
                        in an atmosphere that feels just right. That's the Herrera's
                        promise. So, whether you're celebrating a milestone, making the most
                        of Happy Hour or enjoying brunch with friends, you can be sure that
                        every Herrera's experience is a simple and perfectly memorable one.
                    </p>
                </div>
                {/* IMAGES */}
                <div>
                    <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                        5 photos
                    </h1>
                    <div className="flex flex-wrap">
                        <img
                            className="w-56 h-44 mr-1 mb-1"
                            src="https://resizer.otstatic.com/v2/photos/xlarge/3/41701449.jpg"
                            alt=""
                        />
                        <img
                            className="w-56 h-44 mr-1 mb-1"
                            src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701450.jpg"
                            alt=""
                        />
                        <img
                            className="w-56 h-44 mr-1 mb-1"
                            src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701452.jpg"
                            alt=""
                        />
                        <img
                            className="w-56 h-44 mr-1 mb-1"
                            src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701453.jpg"
                            alt=""
                        />
                        <img
                            className="w-56 h-44 mr-1 mb-1"
                            src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701454.jpg"
                            alt=""
                        />
                    </div>
                </div>
                {/* REVIEWS */}
                <div>
                    <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
                        What 100 people are saying
                    </h1>
                    <div>
                        {/* REVIEW CARD */}
                        <div className="border-b pb-7 mb-7">
                            <div className="flex">
                                <div className="w-1/6 flex flex-col items-center">
                                    <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                                        <h2 className="text-white text-2xl">MJ</h2>
                                    </div>
                                    <p className="text-center">Michael Jordan</p>
                                </div>
                                <div className="ml-10 w-5/6">
                                    <div className="flex -ml-1">
                                        <Reviews size={150} />
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-lg font-light">
                                            Laurie was on top of everything! Slow night due to the
                                            snow storm so it worked in our favor to have more one on
                                            one with the staff. Delicious and well worth the money.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Reservation />
        </div>
    )
}