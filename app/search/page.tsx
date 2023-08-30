import SearchSideBar from '@/components/SearchSidebar';
import SearchResultCard from '@/components/SearchResultCard';
import SearchHeader from '@/components/SearchHeader';

export default function SearchPage() {
    return (
        <div className="bg-gray-100 min-h-screen w-screen">
            <SearchHeader />
            <section className="m-auto bg-white">
                <div className="flex py-6 m-auto w-2/3 justify-between items-start">
                    <SearchSideBar />
                    <div className="w-5/6">
                        <SearchResultCard />
                    </div>
                </div>
            </section>
        </div>
    )
}