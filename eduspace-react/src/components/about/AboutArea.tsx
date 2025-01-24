import Count from "../../common/Count";

const AboutArea = () => {
  return (
    <>
    <section className="about-section fix">
            <div className="about-wrapper-5">
                <div className="container">
                    <div className="row g-4 justify-content-between">
                        <div className="col-lg-6">
                            <div className="section-title mb-0">
                                <h6 className="wow fadeInUp">About Tamravarsity</h6>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Education drives careers in technology while 
                                fostering innovation and responsibility.
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <p className="wow fadeInUp" data-wow-delay=".3s">
                                Tamravarsity offers a wide range of tech courses, including React.js, web development, Android development, DevOps, machine learning, and more, 
                                equipping learners with the skills and expertise to excel in diverse technology domains.
                                </p>
                                <div className="counter-box-items">
                                    <div className="counter-content wow fadeInUp" data-wow-delay=".3s">
                                        <h2><span className="odometer" data-count="23">
                                          <Count number={23} text='+' />
                                          </span></h2>
                                        <p>Years Of Experience</p>
                                    </div>
                                    <p className="text wow fadeInUp" data-wow-delay=".5s">
                                    Tamravarsity offers courses in React.js, web development, Android development, DevOps, machine 
                                    learning, and more, equipping learners to excel in diverse tech fields.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
    </>
  );
};

export default AboutArea;