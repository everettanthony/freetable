'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Spinner from './Spinner';

export default function Banner() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [location, setLocation] = useState('');

    function submitHandler() {
        if (location === '') return;

        setIsLoading(true);
        router.push(`/search?city=${location}`);
        setLocation('');
    }

    return (
        <section className="flex flex-col items-center justify-center h-[400px] 
            bg-gradient-to-r from-[#101e47] via-[#3e496a] to-[#7682a1] p-2">
            <div className="text-center">
            <h1 className="text-white text-5xl font-bold mb-4">
                Find your table for any occasion
            </h1>
                <div className="text-left text-lg py-3 m-auto flex justify-center">
                    <input
                        className="rounded  mr-3 p-2 px-3 w-[450px] focus:placeholder-transparent outline-none"
                        type="text"
                        placeholder="State, city or town" 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') submitHandler();
                        }} 
                    />
                    <button className="flex items-center justify-center rounded bg-[#da3743] hover:bg-[#e1414e] 
                        transition-colors duration-300 px-9 py-2 text-white w-[132px]"
                        onClick={submitHandler}>
                        {!isLoading && (<span>Let's Go</span>)}<Spinner visible={isLoading} />
                    </button>
                </div>
            </div>
        </section>
    )
}