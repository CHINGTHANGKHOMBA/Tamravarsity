import { Link } from "react-router-dom";

 

const AboutHomeOne = () => {
  return (
    <>
      <section className="about-section fix section-padding pt-0">
            <div className="about-wrapper">
                <div className="row g-4">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="about-image wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s">
                            <img src="assets/img/hero/01.jpg" alt="img" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-6">
                        <div className="about-content">
                            <div className="section-title">
                                <h6 className="wow fadeInUp">About Tamravarsity</h6>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">  
                                18+ Courses to Boost Your Career <br />
                            
                                </h2>
                            </div>
                            <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                            Our platform offers a wide range of 18+ tech courses, covering topics like AI, web development, cloud computing, and data analysis. Whether you're
                             starting your journey or upskilling, our courses are designed to empower you for the future.
                            </p>
                            <div className="counter-box-items">
                                <div className="counter-content wow fadeInUp" data-wow-delay=".3s">
                                    <h2><span className="count">23</span>+</h2>
                                    <p>Years Of Experience</p>
                                </div>
                                <p className="text wow fadeInUp" data-wow-delay=".5s">
                                Offering 18+ tech courses, from AI and web development to cloud computing and data analysis, 
                                to prepare you for the future.
                                </p>
                            </div>
                            <Link to="/about" className="theme-btn wow fadeInUp" data-wow-delay=".3s">Learn More Us</Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="about-image-items">
                            <div className="about-image-2 wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                <img src="assets/img/hero/02.jpg" alt="img" />
                            </div>
                            <div className="about-image-3 wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s">
                                <img src="assets/img/hero/03.jpg" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default AboutHomeOne;