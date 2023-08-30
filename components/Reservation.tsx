export default function Reservation() {
    return (
        <div className="sticky top-0 right-0 w-[27%] text-reg">
            <div className="w-[100%] bg-white rounded p-3 shadow">
                <div className="text-center border-b pb-2 font-bold">
                    <h4 className="mr-7 text-lg">Make a Reservation</h4>
                </div>
                <div className="my-3 flex flex-col">
                    <label htmlFor="">Party size</label>
                    <select name="" className="p-2 px-1 border-b font-light outline-none" id="">
                        <option value="">1 person</option>
                        <option value="">2 people</option>
                    </select>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="">Date</label>
                        <input type="text" className="p-2 px-1 border-b focus:border-b-[#a5a5a5] font-light outline-none" />
                    </div>
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="">Time</label>
                        <select name="" id="" className="p-2 px-1 border-b font-light outline-none">
                            <option value="">7:30 AM</option>
                            <option value="">9:30 AM</option>
                        </select>
                    </div>
                </div>
                <div className="mt-5">
                    <button className="w-full h-12 text-md rounded bg-[#da3743] hover:bg-[#e1414e] 
                        transition-colors duration-300 px-9 py-2 text-white">
                        Find a Time
                    </button>
                </div>
            </div>
        </div>
    )
}