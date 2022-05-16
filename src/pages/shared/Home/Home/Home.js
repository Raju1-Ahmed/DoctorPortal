import React from 'react';
import Card from '../Card/Card/Card';
import Banner from '../../Home/Banner/Banner';
import Services from '../Service/Services';
import Terms from '../Terms/Terms';
import HomeAppointment from '../HomeAppointment/HomeAppointment';
import Testimonial from '../Testimonial/Testimonial';
import HomeLogin from '../HomeLogin/HomeLogin';
import Footer from '../../../Footer/Footer';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Card/>
            <Services/>
            <Terms/>
            <HomeAppointment/>
            <Testimonial/>
            <HomeLogin/>
            <Footer/>
        </div>
    );
};

export default Home;