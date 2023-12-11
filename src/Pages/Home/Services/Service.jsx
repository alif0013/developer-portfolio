import img1 from '../../../assets/font-end.svg'
import img2 from '../../../assets/backend.svg'
import img3 from '../../../assets/developer.svg'
import img4 from '../../../assets/design.svg'

const Service = () => {
    return (
        <div>

            <div className='mb-20'>
                <h1 className='text-center text-2xl md:text-5xl'>My Services</h1>
            </div>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div>
                            {/* <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-lg rounded-lg" /> */}
                            <div className="card md:w-60 border-2 border-purple-600 rounded-xl shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={img1} alt="img" className="rounded-xl w-[200px]" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">FrontEnd</h2>
                                    <p>Html, Css, JavaScript, React, Next js</p>
                                  
                                </div>
                            </div>
                        </div>
                        <div>
                        <div className="card md:w-60 border-2 border-purple-600 rounded-xl  shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={img1} alt="img" className="rounded-xl w-[220px]" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">FrontEnd</h2>
                                    <p>Html, Css, JavaScript, React, Next js</p>
                                  
                                </div>
                            </div>
                        </div>
                        <div>
                        <div className="card md:w-60 border-2 border-purple-600 rounded-xl shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={img1} alt="img" className="rounded-xl w-[220px]" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">FrontEnd</h2>
                                    <p>Html, Css, JavaScript, React, Next js</p>
                                  
                                </div>
                            </div>
                        </div>
                        <div>
                        <div className="card md:w-60 border-2 border-purple-600 rounded-xl shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={img1} alt="img" className="rounded-xl w-[220px]" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">FrontEnd</h2>
                                    <p>Html, Css, JavaScript, React, Next js</p>
                                  
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