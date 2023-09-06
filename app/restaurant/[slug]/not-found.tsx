import Image from 'next/image';
import errorMascot from '../../../public/error.png';

export default function NotFound() {
    return (
        <div className="h-[calc(100vh-76px)] bg-gray-200 flex flex-col justify-center items-center">
            <Image src={errorMascot} className="w-56 mb-8" alt="error" />
            <div className="bg-white px-9 py-8 shadow rounded">
                <h3 className="text-3xl font-bold mb-1">Oh my, something went wrong.</h3>
                <p className="text-lg font-semibold">We couldn't find that restaurant.</p>
                <p className="mt-6 text-md font-light">Error Code: 404</p>
            </div>
        </div>
    )
}