import React from 'react';

const ReviewDetails = ({ review }) => {
    const { name, rating, about } = review
    return (

        <div className='col-md-4 g-5'>
            <div className='card h-100'>
                <h4>Name:{name}</h4>
                <h6>Review:{about}</h6>
                <h5>Ratings:{rating}</h5>


            </div>

        </div>


    );
};

export default ReviewDetails;