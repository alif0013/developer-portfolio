import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../Services/Service';
import Technology from '../../Technology/Technology';
import About from '../../About/About';
import Contact from '../../ContactMe/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Technology></Technology>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;