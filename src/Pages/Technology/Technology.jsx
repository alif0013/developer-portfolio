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


            <div className='grid grid-cols-4 md:grid-cols-8 gap-5'>
                <div>

                    <div data-aos="zoom-in" className="card">
                        <figure className="px-10 pt-10">
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/main/src/assets/html.webp" />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Html</h2>
                        </div>
                    </div>
                </div>

                <div>

                    <div data-aos="zoom-in" className="card">
                        <figure className="px-10 pt-10">
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/main/src/assets/css.webp" />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Css</h2>
                        </div>
                    </div>
                </div>
                <div>

                    <div data-aos="zoom-in" className="card">
                        <figure className="px-10 pt-10">
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/main/src/assets/javascript.webp" />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Jsvascript</h2>
                        </div>
                    </div>
                </div>
                <div>

                    <div data-aos="zoom-in" className="card">
                        <figure className="px-10 pt-10">
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/81e242542b9d65f4f38f03729de6e99d98cbfb81/src/assets/react.svg" />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">React</h2>
                        </div>
                    </div>
                </div>
                <div>

                    <div data-aos="zoom-in" className="card">
                        <figure className="px-10 pt-10">
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/main/src/assets/node.webp" />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Node</h2>
                        </div>
                    </div>
                </div>
                <div>

                    <div data-aos="zoom-in" className="card">
                        <figure className="px-10 pt-10">
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/main/src/assets/ex.webp" />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Express</h2>
                        </div>
                    </div>
                </div>
                <div>

                    <div data-aos="zoom-in" className="card">
                        <figure className="px-10 pt-10">
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/main/src/assets/mongodb.webp" />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">MongoDB</h2>
                        </div>
                    </div>
                </div>
                <div>

                    <div data-aos="zoom-in" className="card">
                        <figure className="px-10 pt-10">
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/main/src/assets/tailwind.webp" />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Tailwind</h2>
                        </div>
                    </div>
                </div>
                <div>

                    <div data-aos="zoom-in" className="card">
                        <figure className="px-10 pt-10">
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/main/src/assets/mu5.webp" />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Material Ui</h2>
                        </div>
                    </div>
                </div>
                <div>

                    <div data-aos="zoom-in" className="card">
                        <figure className="px-10 pt-10">
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/main/src/assets/bootstrap.webp" />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Bootstrap</h2>
                        </div>
                    </div>
                </div>
                <div>

                    <div data-aos="zoom-in" className="card">
                        <figure className="px-10 pt-10">
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/main/src/assets/firebase.webp" />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Firebase</h2>
                        </div>
                    </div>
                </div>
                <div>

                    <div data-aos="zoom-in" className="card">
                        <figure className="px-10 pt-10">
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/main/src/assets/git.webp" />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Git & Github</h2>
                        </div>
                    </div>
                </div>
                <div>

                    <div data-aos="zoom-in" className="card">
                        <figure className="px-10 pt-10">
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/main/src/assets/api.webp" />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Api</h2>
                        </div>
                    </div>
                </div>
                <div>

                    <div data-aos="zoom-in" className="card">
                        <figure className="px-10 pt-10">
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/main/src/assets/figma.webp" />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Figma</h2>
                        </div>
                    </div>
                </div>
                <div>

                    <div data-aos="zoom-in" className="card">
                        <figure className="px-10 pt-10">
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/main/src/assets/socket-io.webp" />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Scoket io</h2>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Technology;