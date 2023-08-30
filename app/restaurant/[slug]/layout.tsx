export default function RestaurantLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-gray-100 min-h-screen w-screen">
            <div className="m-auto bg-white">
                <div className="h-96 overflow-hidden">
                    <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] 
                        h-full flex justify-center items-center">
                        <h1 className="text-7xl text-white captitalize text-shadow text-center -translate-y-6">
                            Herrera's
                        </h1>
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}