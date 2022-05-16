import React from 'react';
import quote from '../../../../assets/icons/quote.svg'
import people1 from '../../../../assets/images/people1.png'
import people2 from '../../../../assets/images/people2.png'
import people3 from '../../../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard';
const Testimonial = () => {
    const reviews =[
        {
            _id: 1,
            name: 'Fluoride Treatment',
            country: 'California',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            country: 'California',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            country: 'California',
            review: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: people3
        }
    ];
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
            <div>
                <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                <h2 className='text-3xl'>What Our Patients Says</h2>
            </div>
            <div>
                <img className='w-24 lg:w-48' src={quote} alt="" />
            </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-gap-5'>
                {
                 reviews.map(review => <TestimonialCard
                 key={review._id}
                 review={review}
                 /> )   
                }
            </div>
        </section>
    );
};

export default Testimonial;