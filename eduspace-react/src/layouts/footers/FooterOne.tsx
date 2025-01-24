import { Link } from "react-router-dom";
import tamravarsity_logo from "../../../public/assets/img/logo/tamravarsity.jpeg"

 

const FooterOne = ({style_2} : any) => {
  return (
    <>
       <footer className={`footer-section fix ${style_2 ? "" : "footer-bg"}`}>
            <div className="container">
                <div className={`footer-widget-wrapper ${style_2 ? "style-4" : ""}`}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                                    {style_2 ? (
                                        <img src="assets/img/logo/black-logo-2.svg" alt="img" />
                                    ) : (
                                        <img src={tamravarsity_logo} alt="img" />
                                    )}
                                    <h3 style={{ marginLeft: '10px' }}>Tamravarsity</h3>
                                    </Link>
                                  
                                </div>
                                <div className="footer-content">
                                    <p>
                                    "Unlock your tech potential with TamraVarsity, your gateway to expert-led courses in React, Python, DevOps, and more. Transform your career with our cutting-edge training programs."
                                    </p>
                                    <div className="social-icon">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        {/* <a href="#"><i className="fab fa-dribbble"></i></a>
                                        <a href="#"><i className="fab fa-behance"></i></a> */}
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Online Platform</h3>
                                </div>
                                <ul className="list-area">
                                    <li><Link to="/courses">Coursera</Link></li>
                                    <li><Link to="/courses">MasterClass</Link></li>
                                    <li><Link to="/courses">Skillshare</Link></li>
                                    <li><Link to="/courses">LinkedIn Learning</Link></li>
                                    <li><Link to="/courses">FutureLearn</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".6s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Quick Link</h3>
                                </div>
                                <ul className="list-area">
                                    <li><Link to="/about">About Tamravarsity</Link></li>
                                    <li><Link to="/instructor">Instructors</Link></li>
                                    <li><Link to="/courses">Best Courses</Link></li>
                                    <li><Link to="/contact">Student Reviews</Link></li>
                                    <li><Link to="/faq">FAQs</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Contact Us</h3>
                                </div>
                                <div className="footer-content">
                                    <ul className="contact-info">
                                        <li>
                                           Akampat, Neilit Campus
                                        </li>
                                   
                                        <li>
                                            <a href="mailto:tamraversity.lamzingtech.com" className="link">tamraversity.lamzingtech.com</a>
                                        </li>
                                        <li>
                                            <a href="tel:+91 6909255992">+91 6909255992</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`footer-bottom wow fadeInUp ${style_2 ? "style-4" : ""}`} data-wow-delay=".3s">
                    <p>Copyright © <Link to="/">Tamravarsity</Link>, all rights reserved.</p>
                </div>
            </div>
            {/* <div className={`footer-name ${style_2 ? "style-2" : ""}`}>
                <h2>
                    Eduspace
                </h2>
            </div> */}
        </footer>
    </>
  );
};

export default FooterOne;