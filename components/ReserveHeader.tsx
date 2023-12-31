import { format } from 'date-fns';
import { convertToDisplayTime, Time } from '@/utils/convertToDisplayTime';

export default function ReserveHeader({
    image,
    name,
    date,
    partySize,
  }: {
    image: string;
    name: string;
    date: string;
    partySize: string;
  }) {
    const [day, time] = date.split('T');

    return (
        <div>
            <div className="font-bold text-xl">You're almost done!</div>
            <div className="mt-6 flex">
                <img
                    src={image}
                    alt={name}
                    className="w-32 h-18 rounded"
                />
                <div className="ml-4">
                    <h1 className="text-3xl font-bold">{name}</h1>
                    <div className="flex mt-.5">
                        <p className="mr-6">{format(new Date(date), 'ccc, LLL d')}</p>
                        <p className="mr-6">{convertToDisplayTime(time as Time)}</p>
                        <p className="mr-6">{partySize} {parseInt(partySize) === 1 ? 'person' : 'people'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}