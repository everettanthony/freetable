'use client';
import { useState } from 'react';
import { Rating, Star } from '@smastrom/react-rating';

const ratingStyles = {
    itemShapes: Star,
    activeFillColor: '#da3743',
    inactiveFillColor: '#fbbcc1'
};

export default function Reviews(props: { size: number }) {
    const [rating, setRating] = useState(5);

    return (
        <div>
            <Rating 
                style={{ maxWidth: props.size }}
                value={rating} 
                onChange={setRating} 
                itemStyles={ratingStyles} 
                readOnly
            />
        </div>
    )
}