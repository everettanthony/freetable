'use client';
import { useEffect, useState } from 'react';
import useReservation from '@/hooks/useReservation';
import Spinner from './Spinner';

export default function ReserveForm({
    slug,
    date,
    partySize,
  }: {
    slug: string;
    date: string;
    partySize: string;
  }) {
    const [inputs, setInputs] = useState({
        bookerFirstName: '',
        bookerLastName: '',
        bookerPhone: '',
        bookerEmail: '',
        bookerOccasion: '',
        bookerRequest: ''
    });
    const [day, time] = date.split('T');
    const [disabled, setDisabled] = useState(true);
    const [didBook, setDidBook] = useState(false);
    const { error, loading, createReservation } = useReservation();

    useEffect(() => {
        if (
            inputs.bookerFirstName &&
            inputs.bookerLastName &&
            inputs.bookerEmail &&
            inputs.bookerPhone
        ) {
            return setDisabled(false);
        }

        return setDisabled(true);
    }, [inputs]);

    function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }

    async function handleClick() {
        const booking = await createReservation({
            slug,
            partySize,
            time,
            day,
            bookerFirstName: inputs.bookerFirstName,
            bookerLastName: inputs.bookerLastName,
            bookerEmail: inputs.bookerEmail,
            bookerOccasion: inputs.bookerOccasion,
            bookerPhone: inputs.bookerPhone,
            bookerRequest: inputs.bookerRequest,
            setDidBook
        });

        console.log('Booking:', booking);
    }

    return (
        <div className="mt-5 flex flex-wrap justify-between w-[660px]">
            {didBook ? (
                <div>
                    <h1>You are all booked up</h1>
                    <p>Enjoy your reservation</p>
                </div>
            ) : (
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                        <input
                            type="text"
                            className="border rounded p-3 focus:placeholder-transparent outline-none"
                            placeholder="First Name"
                            value={inputs.bookerFirstName}
                            name="bookerFirstName"
                            onChange={handleChangeInput}
                        />
                        <input
                            type="text"
                            className="border rounded p-3 focus:placeholder-transparent outline-none"
                            placeholder="Last Name"
                            value={inputs.bookerLastName}
                            name="bookerLastName"
                            onChange={handleChangeInput}
                        />
                        <input
                            type="email"
                            className="border rounded p-3 focus:placeholder-transparent outline-none"
                            placeholder="Email"
                            value={inputs.bookerEmail}
                            name="bookerEmail"
                            onChange={handleChangeInput}
                        />
                        <input
                            type="text"
                            className="border rounded p-3 focus:placeholder-transparent outline-none"
                            placeholder="Phone Number"
                            value={inputs.bookerPhone}
                            name="bookerPhone"
                            onChange={handleChangeInput}
                        />
                        <input
                            type="text"
                            className="border rounded p-3 focus:placeholder-transparent outline-none"
                            placeholder="Occasion (optional)"
                            value={inputs.bookerOccasion}
                            name="bookerOccasion"
                            onChange={handleChangeInput}
                        />
                        <input
                            type="text"
                            className="border rounded p-3 focus:placeholder-transparent outline-none"
                            placeholder="Requests (optional)"
                            value={inputs.bookerRequest}
                            name="bookerRequest"
                            onChange={handleChangeInput}
                        />
                    </div>
                    <button
                        className="w-full rounded bg-[#da3743] hover:bg-[#e1414e] 
                        transition-colors duration-300 px-9 py-2 text-white cursor-pointer"
                        disabled={disabled || loading}
                        onClick={handleClick}>
                        {loading ? (<Spinner visible={loading} />) : ('Complete Reservation')}
                    </button>
                    <p className="mt-4 text-sm">
                        By clicking “Complete reservation” you agree to the OpenTable Terms
                        of Use and Privacy Policy. Standard text message rates may apply.
                        You may opt out of receiving text messages at any time.
                    </p>
               </div>
            )}
        </div>
    )
}