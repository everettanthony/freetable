'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SearchHeader() {
    const router = useRouter();
    const [location, setLocation] = useState('');

    return (
        <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
            <div className="text-left text-lg py-3 m-auto flex justify-center">
                <input
                    className="rounded mr-3 p-2 px-3 w-[450px] focus:placeholder-transparent outline-none"
                    type="text"
                    placeholder="State, city or town" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)} 
                />
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
    )
}