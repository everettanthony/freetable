import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
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
                <div className="flex items-center">
                    <button className="bg-[#3e496a] text-white border border-[#3e496a] p-1 px-4 rounded mr-3 
                    hover:bg-[#4e5b83] hover:border-[#4e5b83] transition-colors duration-300">
                        Sign In
                    </button>
                    <button className="border border-gray-300 p-1 px-4 rounded">Sign Up</button>
                </div>
            </nav>
        </header>
    )
}