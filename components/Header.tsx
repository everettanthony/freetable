import Image from 'next/image';
import Link from 'next/link';
import LoginModal from './LoginModal';

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
                    <LoginModal isSignedIn={false} />
                </div>
            </nav>
        </header>
    )
}