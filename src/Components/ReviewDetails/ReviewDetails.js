import React from 'react';

const ReviewDetails = ({ review }) => {
    const { name, rating } = review
    return (

        <div className='col-md-4 g-5'>
            <div className='card'>
                <h4>name:{name}</h4>
                <h5>rating:{rating}</h5>

            </div>

        </div>


    );
};

export default ReviewDetails;