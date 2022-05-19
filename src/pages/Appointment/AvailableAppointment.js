import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading/Loading';
import AvailableService from './AvailableService';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null)

    const formateDate = format(date, 'pp')
    const { data: services, isLoading, refetch } = useQuery(['available', formateDate], () =>
        fetch(`http://localhost:5000/available?date=${formateDate}`)
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }

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
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;