import React from 'react';
import useReview from '../../hooks.js/useReview';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const Reviews = () => {
    const [reviews,] = useReview();

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