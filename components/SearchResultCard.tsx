import Link from 'next/link';
import Star from '@/components/Star';

export default function SearchResultCard() {
    return (
        <div className="border-b flex pb-5">        
            <img
                src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
                alt=""
                className="w-[172px] rounded"
            />
            <div className="pl-5">
                <h2 className="text-3xl mb-1">
                    <Link href="/restaurant/herreras">
                        Aiāna Restaurant Collective
                    </Link>
                </h2>
                <div className="flex items-start">
                    <div className="flex mb-2">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>
                    <p className="ml-2 text-sm">Awesome</p>
                </div>
                <div className="mb-9">
                    <div className="font-light flex text-reg">
                        <p className="mr-4">$$$</p>
                        <p className="mr-4">Mexican</p>
                        <p className="mr-4">Ottawa</p>
                    </div>
                </div>
                <div className="text-red-600">
                    <Link href="/restaurant/herreras">
                        View more information
                    </Link>
                </div>
            </div>
        </div>
    )
}