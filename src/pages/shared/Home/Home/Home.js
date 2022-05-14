import React from 'react';
import Card from '../Card/Card/Card';
import Banner from '../../Home/Banner/Banner';
import Services from '../Service/Services';
import Terms from '../Terms/Terms';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Card/>
            <Services/>
            <Terms/>
        </div>
    );
};

export default Home;