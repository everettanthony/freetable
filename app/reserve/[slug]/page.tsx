export default function ReservationPage() {
    return (
        <div className="bg-gray-100 min-h-screen w-screen">
            <div className="m-auto bg-white">
                <div className="border-t h-screen">
                    <div className="py-9 w-3/5 m-auto">
                        {/* HEADER */}
                        <div>
                            <h3 className="font-bold">You're almost done!</h3>
                            <div className="mt-5 flex">
                                <img
                                    src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
                                    alt=""
                                    className="w-32 h-18 rounded"
                                />
                                <div className="ml-4">
                                    <h1 className="text-3xl font-bold">
                                        Herreras
                                    </h1>
                                    <div className="flex mt-.5">
                                        <p className="mr-6">Tues, 22, 2023</p>
                                        <p className="mr-6">7:30 PM</p>
                                        <p className="mr-6">3 people</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* FORM */}
                        <div className="mt-6 flex flex-wrap justify-between w-[660px]">
                            <input
                                type="text"
                                className="border rounded p-3 w-80 mb-4 focus:placeholder-transparent outline-none"
                                placeholder="First name"
                            />
                            <input
                                type="text"
                                className="border rounded p-3 w-80 mb-4 focus:placeholder-transparent outline-none"
                                placeholder="Last name"
                            />
                            <input
                                type="text"
                                className="border rounded p-3 w-80 mb-4 focus:placeholder-transparent outline-none"
                                placeholder="Phone number"
                            />
                            <input
                                type="text"
                                className="border rounded p-3 w-80 mb-4 focus:placeholder-transparent outline-none"
                                placeholder="Email"
                            />
                            <input
                                type="text"
                                className="border rounded p-3 w-80 mb-4 focus:placeholder-transparent outline-none"
                                placeholder="Occasion (optional)"
                            />
                            <input
                                type="text"
                                className="border rounded p-3 w-80 mb-4 focus:placeholder-transparent outline-none"
                                placeholder="Requests (optional)"
                            />
                            <button
                                className="w-full rounded bg-[#da3743] hover:bg-[#e1414e] 
                                transition-colors duration-300 px-9 py-2 text-white">
                                Complete reservation
                            </button>
                            <p className="mt-4 text-sm">
                                By clicking “Complete reservation” you agree to the OpenTable Terms
                                of Use and Privacy Policy. Standard text message rates may apply.
                                You may opt out of receiving text messages at any time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}