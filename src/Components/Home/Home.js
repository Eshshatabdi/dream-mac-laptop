import React from 'react';
import useReview from '../../customHooks/useReview';
import image from '../../image.avif'
import Reviews from '../Reviews/Reviews';

const Home = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-6 '>
                    <h2 className='text-primary'>Your Dream Laptop</h2>
                    <p>A laptop is a portable computer, including everything you need for work. It has a screen, a keyboard, a trackpad, many ports and usually a webcam and microphone.</p>
                    <button className='bg-primary'>Live demo</button>
                </div>
                <div className='col-md-6 '>
                    <img className='h-200' src={image} alt="" />

                </div>

            </div>

            <div>
                <h2>Customer Reviews (3)</h2>
                <div className='row'>
                    {
                        reviews.map(review => <div className='col-md-4'
                        >
                            <h4>Name:{review.name}</h4>
                            <p>Rating:{review.rating}</p>
                            { }


                        </div>)
                    }

                </div>
                <div>
                    <button className='w-50 border-0'>see all reviews</button>

                </div>

            </div>
        </div >
    );
};

export default Home;