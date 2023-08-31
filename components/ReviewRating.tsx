import { Rating, Star } from '@smastrom/react-rating';

const ratingStyles = {
    itemShapes: Star,
    activeFillColor: '#da3743',
    inactiveFillColor: '#fbbcc1'
};

export default function ReviewRating(props: { size: number, rating: number }) {
  return (
        <div>
            <Rating 
                style={{ maxWidth: props.size }}
                value={props.rating} 
                itemStyles={ratingStyles} 
                halfFillMode = 'svg'
                readOnly
            />
        </div>
  )
}
