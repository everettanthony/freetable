'use client';
import { useState } from 'react';
import Link from 'next/link';
import DatePicker from 'react-datepicker';
import { partySize as partySizes, times } from '@/data';
import { convertToDisplayTime, Time } from '@/utils/convertToDisplayTime';
import useAvailabilities from '@/hooks/useAvailabilities';
import Spinner from './Spinner';

export default function Reservation({
    openTime,
    closeTime,
    slug,
  }: {
    openTime: string;
    closeTime: string;
    slug: string;
  }) {
    const { data, loading, error, fetchAvailabilities } = useAvailabilities();
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [time, setTime] = useState(openTime);
    const [partySize, setPartySize] = useState('2');
    const [day, setDay] = useState(new Date().toISOString().split('T')[0]);
    
    function handleChangeDate(date: Date | null) {
        if (date) {
            setDay(date.toISOString().split('T')[0]);
            return setSelectedDate(date);
        }

        return setSelectedDate(null);
    }

    function handleClick() {
        fetchAvailabilities({
            slug,
            day,
            time,
            partySize
        });     
    }

    function filterTimeByRestaurantOpenWindow() {
        const timesWithinWindow: typeof times = [];
        let isWithinWindow = false;

        times.forEach((time) => {
            if (time.time === openTime) {
                isWithinWindow = true;
            }
            if (isWithinWindow) {
                timesWithinWindow.push(time);
            }
            if (time.time === closeTime) {
                isWithinWindow = false;
            }
        });

        return timesWithinWindow;
    }

    return (
        <div className="sticky top-0 right-0 w-[27%] text-reg">
            <div className="w-[100%] bg-white rounded p-3 shadow">
                <div className="text-center border-b pb-2 font-bold">
                    <h4 className="mr-7 text-lg">Make a Reservation</h4>
                </div>
                <div className="my-3 flex flex-col">
                    <label className="font-semibold">Party Size</label>
                    <select 
                        name="partySize" 
                        className="p-2 px-1 border-b font-light outline-none"
                        value={partySize}
                        onChange={(e) => setPartySize(e.target.value)}>
                        {partySizes.map((size, index) => (
                            <option value={size.value} key={index}>{size.label}</option>
                        ))}
                    </select>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col w-[48%]">
                        <label className="font-semibold">Date</label>
                        <DatePicker 
                            selected={selectedDate}
                            onChange={handleChangeDate}
                            dateFormat="MMMM d" 
                            className="p-2 px-1 border-b focus:border-b-[#a5a5a5] font-light outline-none w-full h-[41px]"
                            wrapperClassName="w-full"
                        />
                    </div>
                    <div className="flex flex-col w-[48%]">
                        <label className="font-semibold">Time</label>
                        <select 
                            name="Time" 
                            className="p-2 px-1 border-b font-light outline-none h-[41px]"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}>
                            {filterTimeByRestaurantOpenWindow().map((time, index) => (
                                <option value={time.time} key={index}>{time.displayTime}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="mt-5">
                    <button 
                        className="w-full h-12 text-md rounded bg-[#da3743] 
                        hover:bg-[#e1414e] transition-colors duration-300 
                        px-9 py-2 text-white"
                        onClick={handleClick}
                        disabled={loading}>
                        {loading ? <Spinner visible={loading} /> : 'Find a Time'}
                    </button>
                </div>
                {data && data.length ? (
                    <div className="mt-5">
                        <div className="font-semibold">Select a Time</div>
                        <div className="flex flex-wrap mt-2">
                            {data.map((time, index) => {
                                return time.available ? (
                                    <Link
                                        href={`/reserve/${slug}?date=${day}T${time.time}&partySize=${partySize}`}
                                        className="bg-[#da3743] hover:bg-[#e1414e] cursor-pointer p-2 w-24 
                                        text-center text-white mb-3 rounded mr-3 transition-colors duration-300"
                                        key={index}>
                                        <div className="text-sm font-medium">
                                            {convertToDisplayTime(time.time as Time)}
                                        </div>
                                    </Link>
                                ) : (
                                    <div className="bg-gray-200 p-2 w-24 mb-3 h-[36px] rounded mr-3" key={index}></div>
                                );
                            })}
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    )
}