import { Review } from '@prisma/client';

export default function calculateReviewRatingAverage(reviews: Review[]) {
    if (!reviews.length) return 0;

    const average = reviews.reduce((sum, review) => {
        return sum + review.rating
    }, 0) / reviews.length;

    return Math.floor(Math.ceil(average * 2) / 2);
}