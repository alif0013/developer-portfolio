


const Experience = () => {
    return (
        <div>
            <div data-aos="fade-up" className='mt-20 mb-10 md:mb-20 '>
                <h1 className='text-center text-2xl md:text-5xl'>Educational Experience</h1>
                {/* <hr className="hidden md:block w-[300px] mx-auto mt-5 border-2 border-purple-600" /> */}
            </div>

            <div className='flex flex-col px-3  md:flex-row justify-around'>
                <div className="border-2 border-purple-600  px-16 py-10 rounded">
                    <div>
                        <h1 className="pb-2 text-xl">Education</h1>
                        <hr className="hidden md:block w-[90px] mb-3  border-2 border-purple-600" />

                        <h1>Hsc</h1>
                        <p>Haripur Durgadas High School And College</p>
                        <p>Rode to Admission Bsc</p>
                    </div>
                </div>


                <div className="border-2 border-purple-600 px-20 py-10 rounded">
                <div>
                        <h1 className="pb-2 text-xl">Experience</h1>
                        <hr className="hidden md:block w-[100px] mb-3  border-2 border-purple-600" />

                        <h1>FrontEnd Developer</h1>
                        <h1>Programming Hero Web Development</h1>
                        <p>Jul/2023 - Dec 2023</p>
                    </div>
                    
                </div>
            </div>




        </div>
    );
};

export default Experience;