import React from 'react';
import Type from './Type';


const About = () => {
    return (
        <div>
            <div data-aos="fade-up" className='mt-20 mb-10 md:mb-5 '>
                <h1 className='text-center text-2xl md:text-5xl'>About me</h1>
                {/* <hr className="hidden md:block w-[300px] mx-auto mt-5 border-2 border-purple-600" /> */}
            </div>


          
            <div className="hero md:min-h-[400px]">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <img data-aos="zoom-in" src="https://raw.githubusercontent.com/alif0013/developer-portfolio/ed6c3fe2aed0d7b147dd4bfe459357c3c1cfebdc/src/assets/spaceship.svg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl">Im Alif and Im a <span className='text-purple-600'><Type></Type></span></h1>
                        <p className="py-6">Im from Pabna Bangladesh. Im currently Complete in my HSC.</p>
                        <p className="py-6">I have learned last two years a few web-related technologies and programming languages like HTML, CSS, Bootstrap, JavaScript, React.js, MaterialUI, Node Expresss.js , MongoDB, and Firebase Authentication system.</p>
                        <p className="py-6">While in love with JavaScript, my preference is to learn and adapt to popular frameworks, libraries, and packages in order to keep pace with the changing web environment.</p>
                        <a href="/images/myw3schoolsimage.jpg" download>
                            <button class="bannerbtn" downlode>Downlode Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;