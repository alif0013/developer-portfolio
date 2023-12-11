import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Technology = () => {

    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration in milliseconds
            once: true,    // Whether the animation should only happen once
        });

        AOS.refresh();
    }, [])

    return (
        <div>
            <div data-aos="fade-up" className='mt-10 mb-10 md:mb-20 pt-20'>
                <h1 className='text-center text-2xl md:text-5xl'>Technology That I Know</h1>
            {/* <hr className="hidden md:block w-[600px] mx-auto mt-5 border-2 border-purple-600" /> */}
            </div>


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

                        
                    
                    </div>
        
        </div>
    );
};

export default Technology;