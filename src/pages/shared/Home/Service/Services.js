import React from 'react';
import cavity from '../../../../assets/images/cavity.png';
import fluoride from '../../../../assets/images/fluoride.png';
import whitening from '../../../../assets/images/whitening.png';
import Service from './Service';




const Services = () => {
    const services =[
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        }
    ];
    return (
        <div className='my-28'>
            <div className='text-center '>
                <h2 className='text-primary text-xl font-bold uppercase'>OUR SERVICE: {services.length}</h2>
                <h3>Services We Provide</h3>
            </div>
           <div className='grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
          {
              services.map(service => <Service
                  
              key={service._id}
              service={service} >

              </Service>)
          }
           </div>
        </div>
    );
};

export default Services;