import React from 'react';

const AvailableService = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card text-center lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-xl text-primary">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500 '>try another day</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div className="card-actions justify-center">
                    <label
                        for="Booking-modal"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        className="btn btn-sm btn-primary text-white uppercase">Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default AvailableService;