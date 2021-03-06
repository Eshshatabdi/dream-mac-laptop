import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import image1 from '../../image1.avif';
import ReviewDetails from '../ReviewDetails/ReviewDetails';


const Home = () => {
    const [reviews] = useReview();
    const navigate = useNavigate()
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-6 '>
                    <h2 className='text-primary'>Your Dream Mac Laptop</h2>
                    <p>A laptop is a portable computer, including everything you need for work. It has a screen, a keyboard, a trackpad, many ports and usually a webcam and microphone.</p>
                    <button className=' bg-primary text-white border-0'>Live demo</button>
                </div>
                <div className='col-md-6 '>
                    <img className='h-75' src={image1} alt="" />

                </div>

            </div>

            <div>
                <h2 className='text-primary'>Customer Reviews (3)</h2>
                <div className='row'>
                    {
                        reviews.slice(0, 3).map(review => <ReviewDetails
                            key={review.id}
                            review={review}

                        ></ReviewDetails>



                        )
                    }

                </div>
                <div className='mt-5 mb-3'>
                    <button onClick={() => navigate('/reviews')} className='w-25 bg-primary text-white border-0'>see all reviews</button>

                </div>

            </div>
        </div >
    );
};

export default Home;