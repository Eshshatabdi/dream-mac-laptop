import React from 'react';

const threeReviewDetail = ({ review }) => {
    const { name, rating } = review
    return (
        <div className='col-md-4'>
            <h4>{name}</h4>
            <p>{rating}</p>
        </div>
    );
};

export default threeReviewDetail;