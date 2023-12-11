import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration in milliseconds
            once: true,    // Whether the animation should only happen once
        });

        AOS.refresh();
    }, [])

    return (
        <div>

            <div data-aos="fade-up" className='mt-10 mb-10 md:mb-20 '>
                <h1 className='text-center text-2xl md:text-5xl'>My Services</h1>
            </div>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div>
                            
                            <div data-aos="zoom-in" className="card md:w-60  border-2 border-purple-600 rounded-xl shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img  src="https://raw.githubusercontent.com/alif0013/developer-portfolio/e9eb3c43cd153e30cfcd4aa72157c1a49306a46d/src/assets/font-end.svg" alt="img" className="rounded-xl w-[200px] md:h-[100px]" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">FrontEnd</h2>
                                    <p>Html, Css, JavaScript, React, Next js</p>
                                  
                                </div>
                            </div>
                        </div>
                        <div>
                        <div data-aos="zoom-in" className="card md:w-60  border-2 border-purple-600 rounded-xl  shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/e9eb3c43cd153e30cfcd4aa72157c1a49306a46d/src/assets/backend.svg" alt="img" className="rounded-xl w-[220px] md:h-[100px]" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">BackEnd</h2>
                                    <p>Node, Express, MongoDB, Mongoos</p>
                                  
                                </div>
                            </div>
                        </div>
                        <div>
                        <div data-aos="zoom-in" className="card md:w-60 border-2 border-purple-600 rounded-xl shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/e9eb3c43cd153e30cfcd4aa72157c1a49306a46d/src/assets/developer.svg" alt="img" className="rounded-xl w-[220px] md:h-[100px]" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Development</h2>
                                    <p>Html, Css, JavaScript, React, Mui, Tailwind</p>
                                  
                                </div>
                            </div>
                        </div>
                        <div>
                        <div data-aos="zoom-in" className="card md:w-60 border-2 border-purple-600 rounded-xl shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/e9eb3c43cd153e30cfcd4aa72157c1a49306a46d/src/assets/desing.svg" alt="img" className="rounded-xl w-[220px] md:h-[100px]" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Design</h2>
                                    <p>Figma, Sketch, Photoshop</p>
                                  
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">My Awesome Services!</h1>
                        <p className="py-6">Im a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction. I love to solve real-world problems. I am strategic, goal-oriented, and always work with an end goal in mind. I pride myself on doing quality work. Most of the time I work with JavaScript ReactJS...</p>
                        <a href="/images/myw3schoolsimage.jpg" download>
                            <button class="bannerbtn" downlode>Downlode Cv</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;