import React from 'react';

const threeReviewDetail = ({ review }) => {
    const { name, rating, about, picture } = review
    return (
        <div className='col-md-4'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>review:{about}</p>

            <p>{rating}</p>
        </div>
    );
};

export default threeReviewDetail;