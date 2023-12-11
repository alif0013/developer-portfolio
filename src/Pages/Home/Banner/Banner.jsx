
import './custombtn.css';


const Banner = () => {

    return (
        <div>

            <div className="hero md:min-h-[550px]" style={{ backgroundImage: 'url(https://i.ibb.co/37GbCT5/arrows.png)' }}>
                <div></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hey! I'm Alif</h1>
                        <p className="py-6">I am Alif. Being interested to explore technologies I found web development as my passion. I am aspiring to bring that passion to a full-time role.</p>

                        <a href="/images/myw3schoolsimage.jpg" download>
                            <button class="bannerbtn" downlode>Downlode Cv</button>
                        </a>

                    </div>
                </div>
            </div>

            {/* <div className="hero md:min-h-[400px]">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Hey! I'm Alif</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        <button class="bannerbtn">Downlode Cv</button>

                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;
