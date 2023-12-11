import './contact.css'

const Contact = () => {
    return (
        <div>

           
            <div className="hero md:min-h-[400px]">
                <div className="hero-content flex-col lg:flex-row gap-40">
                    <img data-aos="zoom-in" src="https://raw.githubusercontent.com/alif0013/developer-portfolio/ed6c3fe2aed0d7b147dd4bfe459357c3c1cfebdc/src/assets/spaceship.svg" className="max-w-sm md:max-w-lg" />

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
                                <button type="submit" class="form-submit-btn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;

