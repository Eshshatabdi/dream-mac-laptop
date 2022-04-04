import React from 'react';
import { useParams } from 'react-router-dom';
import useReview from '../../customHooks/useReview';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const Reviews = () => {
    const [reviews, setReviews] = useReview();

    return (
        <div className='container'>
            <div className='row'>
                {
                    reviews.map(review => <ReviewDetails
                        key={review.id}
                        review={review}

                    ></ReviewDetails>)
                }


            </div>
        </div>
    );
};

export default Reviews;