import React from 'react';

const TestimonialCard = ({ review }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review.review}</p>
                <div className='flex items-center '>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-2">
                            <img src={review.img} alt=""/>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <p>{review.country}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;