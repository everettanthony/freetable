export default function RestaurantLayout({ children, params }: { children: React.ReactNode; params: { slug: string} }) {
    function renderTitle() {
        const nameArr = params.slug.split('-');
        nameArr[nameArr.length - 1] = `(${nameArr[nameArr.length - 1]})`;
        return nameArr.join(' ');
    }

    return (
        <div className="bg-gray-100 min-h-screen w-full">
            <div className="m-auto bg-white">
                <div className="h-96 overflow-hidden">
                    <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] 
                        h-full flex justify-center items-center">
                        <h1 className="text-7xl text-white capitalize text-shadow text-center -translate-y-6 max-w-[1300px]">
                            {renderTitle()}
                        </h1>
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}