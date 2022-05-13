import React from 'react';
import clock from '../../../../../assets/icons/clock.svg'
import marker from '../../../../../assets/icons/marker.svg'
import phone from '../../../../../assets/icons/phone.svg'
import Info from '../Info/Info';
const Card = () => {
    return (
        <div className='grid px-12 mb-8 grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            <Info CardTitle="Opening Hours" bgclass="bg-primary" img={clock}></Info>
            <Info CardTitle="Visit our location" bgclass="bg-accent" img={marker}></Info>
            <Info CardTitle="Contact us now" bgclass="bg-primary" img={phone}></Info>
        </div>
    );
};

export default Card;