import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Projects = () => {
    return (
        <div className='' id='projects'>
             <div data-aos="fade-up" className='mt-20 mb-10 md:mb-20 '>
                <h1 className='text-center text-2xl md:text-5xl'>My Recent Projects</h1>
                {/* <hr className="hidden md:block w-[300px] mx-auto mt-5 border-2 border-purple-600" /> */}
            </div>

            <div className=''>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/main/src/assets/tapy-co-poster.jpg" />
                        <Link to='https://online-forum-a2790.web.app/' target='_blank'><h2>Live Site</h2></Link>
                        <Link to='https://github.com/alif0013/online-forum-client' target='_blank'><h2>Code Link</h2></Link>
                    
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/main/src/assets/tryotel-b2c-cover.jpg" />
                    
                        <Link to='https://well-off-bit.surge.sh/' target='_blank'><h2>Live Site</h2></Link>
                        <Link to='https://github.com/alif0013/online-group-study?tab=readme-ov-file' target='_blank'><h2>Code Link</h2></Link>
                    

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/main/src/assets/desktop.png" />
                        <Link to='/' target='_blank'><h2>Social Media</h2></Link>
                        <Link to='/' target='_blank'><h2>Comming Soon</h2></Link>
                    
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/main/src/assets/swiper01_2.webp" />
                        <Link to='https://brand-shop-4a376.web.app/' target='_blank'><h2>Live Site</h2></Link>
                        <Link to='https://github.com/alif0013/brand-shop-client' target='_blank'><h2>Code Link</h2></Link>
                    
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/main/src/assets/swi6.jpg" />
                        <Link to='https://academist-ea732.web.app/' target='_blank'><h2>Live Site</h2></Link>
                        <Link to='https://github.com/alif0013/learning-event-management' target='_blank'><h2>Code Link</h2></Link>
                    
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Projects;