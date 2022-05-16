import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import AvailableService from './AvailableService';
import BookingModal from './BookingModal';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <div>
            <h4 className='text-xl text-secendary text-center'>Available Appointment on: {format(date, 'PP')}</h4>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:flex-cols-3 gap-5'>
         {
            services.map(service => <AvailableService
            key={service._id}
            setTreatment={setTreatment}
            service={service}
            />)
         }
        </div>
        {treatment && <BookingModal 
        date={date} 
        setTreatment={setTreatment}
        treatment={treatment}
        />}</div>
    );
};

export default AvailableAppointment;