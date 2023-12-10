import React from 'react';
import './custombtn.css';


const Banner = () => {
    return (
        <div className="hero md:min-h-[400px]">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Hey! I'm Alif</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    
                    <button class="bannerbtn">Downlode Cv</button>

                </div>
            </div>
        </div>
    );
};

export default Banner;