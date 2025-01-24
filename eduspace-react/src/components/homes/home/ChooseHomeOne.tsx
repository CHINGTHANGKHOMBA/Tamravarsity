import Count from "../../../common/Count";
import '@fortawesome/fontawesome-free/css/all.min.css';

 

const ChooseHomeOne = () => {
  return (
    <>
      <section className="choose-us-section fix section-padding">
            <div className="container">
                <div className="main-choose-us-wrapper">
                    <div className="line-shape">
                        <img src="assets/img/line-shape.png" alt="" />
                    </div>
                    <div className="choose-us-top">
                        <div className="section-title mb-0">
                            <h6 className="wow fadeInUp">
                                Why Choose Us
                            </h6>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Unlock Your Potential <br /> with Interactive <br /> Learning
                            </h2>
                        </div>
                        <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                            <div className="icon">
                                <i className="fa-solid fa-briefcase"></i>
                            </div>
                            <div className="content">
                               <h2><span className="odometer" data-count="99"> <Count number={99} text='%' /> </span></h2>
                               <p>
                               Enroll in our courses and we’ll guide you every step of the way <br /> to secure a job in your desired field.
                               </p>
                            </div>
                        </div>
                    </div>
                    <div className="choose-us-bottom">
                        <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                            <div className="icon">
                                <i className="fa-solid fa-graduation-cap"></i>
                            </div>
                            <div className="content">
                                <p>Student Enrolled</p>
                                <h2><span className="odometer" data-count="48.5"><Count number={720} text='+' /></span></h2>
                                <p>
                                Our courses empower you with in-demand skills <br /> to drive innovation and build a brighter future.
                                </p>
                            </div>
                        </div>
                        <div className="icon-items style-2 wow fadeInUp" data-wow-delay=".5s">
                            <div className="icon">
                                <i className="fa-solid fa-chalkboard-teacher"></i>
                            </div>
                            <div className="content">
                                <p>Instructors</p>
                                <h2><span className="odometer" data-count="250"><Count number={35} text='+' /></span></h2>
                                <p>
                                Learn from industry experts who are passionate about <br /> empowering you with the latest skills.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default ChooseHomeOne;