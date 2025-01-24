import { Link } from "react-router-dom";

import '@fortawesome/fontawesome-free/css/solid.min.css';
import '@fortawesome/fontawesome-free/css/regular.min.css';
import '@fortawesome/fontawesome-free/css/brands.min.css';



 

const TopCategoryHomeOne = () => {
  return (
    <>
       <section className="top-category section-padding">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-5">
                        <div className="section-title">
                            <h6 className="wow fadeInUp">Top Category</h6>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Tamravarsity: Empowering Next-Gen Tech Talent
                            </h2>
                        </div>
                        <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                        TamraVarsity: Where education meets innovation, and courses are designed to shape the future.
                        </p>
                        {/* <div className="top-category-button">
                            <Link to="/courses" className="theme-btn yellow-btn mt-40 wow fadeInUp" data-wow-delay=".3s">View All Category</Link>
                        </div> */}
                        </div>
                    <div className="col-lg-7">
                        <div className="top-category-wrapper">
                            <div className="row g-0">
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="top-category-box-items active">
                                        <Link to="/courses">
                                            <div className="icon">
                                                <i className="fab fa-react"></i>
                                              
                                            </div>
                                            <h6>React Js</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="top-category-box-items">
                                        <Link to="/courses">
                                            <div className="icon">
                                                <i className="fa-solid fa-chart-line"></i>
                                            </div>
                                            <h6>Data Analyst</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                    <div className="top-category-box-items border-right-none">
                                        <Link to="/courses">
                                            <div className="icon">
                                                <i className="fa-solid fa-brain"></i>
                                            </div>
                                            <h6> Machine Learning </h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="top-category-box-items">
                                        <Link to="/courses">
                                            <div className="icon">
                                                <i className="fa-solid fa-robot"></i>
                                            </div>
                                            <h6>Artificial Intelligence Applications</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="top-category-box-items">
                                        <Link to="/courses">
                                            <div className="icon">
                                                <i className="fa-solid fa-cogs"></i>
                                            </div>
                                            <h6>Artificial Intelligence (AI) Associate "Upskilling"</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                    <div className="top-category-box-items border-right-none">
                                        <Link to="/courses">
                                            <div className="icon">
                                                <i className="fa-solid fa-cloud"></i>
                                            </div>
                                            <h6>Cloud Computing and Virtualization Expert</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="top-category-box-items">
                                        <Link to="/courses">
                                            <div className="icon">
                                                <i className="fa-brands fa-android"></i>
                                            </div>
                                            <h6>Android Apps Developer</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="top-category-box-items">
                                        <Link to="/courses">
                                            <div className="icon">
                                                <i className="fa-solid fa-laptop-code"></i>
                                            </div>
                                            <h6>Computer Applications Associate(CAA)</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                    <div className="top-category-box-items border-right-none">
                                        <Link to="/courses">
                                            <div className="icon">
                                                <i className="fa-solid fa-keyboard"></i>
                                            </div>
                                            <h6>Data Entry and Office Assistant</h6>
                                        </Link>
                                    </div>
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

export default TopCategoryHomeOne;