import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../Services/Service';
import Technology from '../../Technology/Technology';
import About from '../../About/About';
import Contact from '../../ContactMe/Contact';
import Footer from '../../Footer/Footer';
import Projects from '../../../Projects/Projects';
import Experience from '../../Expreience/Experience';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Technology></Technology>
            <Experience></Experience>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;