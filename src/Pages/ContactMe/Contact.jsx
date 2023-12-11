import './contact.css'

const Contact = () => {
    return (
        <div>

            <div data-aos="fade-up" className='mt-20 mb-10 md:mb-20 '>
                <h1 className='text-center text-2xl md:text-5xl'>Contact me</h1>
                {/* <hr className="hidden md:block w-[300px] mx-auto mt-5 border-2 border-purple-600" /> */}
            </div>

            <div className="hero md:min-h-[400px]">
                <div className="hero-content flex-col lg:flex-row gap-40">
                    <img data-aos="zoom-in" src="https://raw.githubusercontent.com/alif0013/developer-portfolio/06c9deda36c75cd9aff565d257b3b901bcb67b18/src/assets/contact.svg" className="max-w-sm md:max-w-lg" />

                    <div>
                        <div class="form-container">
                            <form class="form">
                                <div class="form-group">
                                    <label for="email">Your Email</label>
                                    <input required="" name="email" id="email" type="text" />
                                </div>
                                <div class="form-group">
                                    <label for="textarea">How Can I Help You?</label>
                                    <textarea required="" cols="50" rows="10" id="textarea" name="textarea">          </textarea>
                                </div>
                                <button type="submit" class="form-submit-btn">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='mt-20' />

        </div>
    );
};

export default Contact;

