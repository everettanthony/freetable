'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { AuthenticationContext } from '@/context/AuthContext';
import useAuth from '@/hooks/useAuth';
import LoginModal from './LoginModal';

export default function Header() {
    const { data, loading } = useContext(AuthenticationContext);
    const { signout } = useAuth();

    return (
        <header>
            <nav className="bg-white p-4 px-5 flex justify-between border-b">
                <Link href="/" className="font-bold text-gray-700 text-2xl">
                    <Image 
                        src="/logos/logo.svg"
                        width={162}
                        height={36}
                        alt="FreeTable"
                    />
                </Link>            
                {loading ? null : (
                    <div className="flex items-center">
                        {data ? (
                            <div>
                                <span className="mr-4">{`${data.firstName} ${data.lastName}`}</span>
                                <button className="border-gray-300 border p-1 px-4 
                                    rounded mr-3 transition-colors duration-300" onClick={signout}>
                                    Sign Out
                                </button>
                            </div>

                        ) : (
                            <div className="flex items-center">
                                <LoginModal isSignedIn={true} /> 
                                <LoginModal isSignedIn={false} /> 
                            </div>
                        )}
                    </div>
                )}    
            </nav>
        </header>
    )
}