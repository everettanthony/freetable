'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Banner() {
    const router = useRouter();
    const [location, setLocation] = useState('');

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
                    onChange={(e) => setLocation(e.target.value)} />
                    <button className="rounded bg-[#da3743] hover:bg-[#e1414e] 
                        transition-colors duration-300 px-9 py-2 text-white"
                        onClick={() => {
                            if (location === 'banana') return;
                            router.push('/search');
                        }}>
                        Let's Go
                    </button>
                </div>
            </div>
        </section>
    )
}