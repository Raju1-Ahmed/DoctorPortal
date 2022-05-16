import React from 'react';
import clock from '../../../../../assets/icons/clock.svg'
import marker from '../../../../../assets/icons/marker.svg'
import phone from '../../../../../assets/icons/phone.svg'
import Info from '../Info/Info';
const Card = () => {
    return (
        <div className='grid  mb-8 grid-cols-1 lg:grid-cols-3 gap-5 '>
            <Info CardTitle="Opening Hours" bgclassName="bg-primary" img={clock}></Info>
            <Info CardTitle="Visit our location" bgclassName="bg-accent" img={marker}></Info>
            <Info CardTitle="Contact us now" bgclassName="bg-primary" img={phone}></Info>
        </div>
    );
};

export default Card;