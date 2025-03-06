import { Link } from "react-router-dom";
import MobileMenu from "../layouts/headers/MobileMenu";
import { useAuth } from "../components/sign-in/auth";
 

const OffCanvas = ({setOpenCanvas, openCanvas} : any) => {


      
        const { isAuthenticated, logout } = useAuth();
        
  return (
    <>
         <div className="fix-area">
            <div className={`offcanvas__info ${openCanvas ? "info-open" : ""}`}>
                <div className="offcanvas__wrapper">
                    <div className="offcanvas__content">
                        <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                            <div className="offcanvas__logo">
                                <Link to="/">
                                    <img src="../../public/assets/img/logo/tamravarsityfooter.png" alt="logo-img" style={{ width: '6vh' }}/>
                                    </Link>
                            </div>
                            <div className="offcanvas__close" onClick={() => setOpenCanvas(false)}>
  <button>
    <i className="fa-solid fa-xmark"></i>
  </button>
</div>

                        </div>
                        <h3 className="offcanvas-title">Welcome to Tamravarsity</h3>
                        <p>Tamravarsity courses empower learners with industry-relevant skills, blending expert
                             guidance and hands-on experience for career success. </p>
                        <div className="social-icon d-flex align-items-center">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>

                        <div className="header-button">
                                                    {isAuthenticated ? (
                                                            <button onClick={logout} className="theme-btn style-2">
                                                          <i className="fa-solid fa-user"></i> Logout
                        
                                                            </button>
                                                        ) : (
                                                            <Link to="/sign-in" className="theme-btn style-2">
                                                            <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
                                                            </Link>
                                                        )}
                                                     
                                                    </div>
                                                    <br />
                        <div className="mobile-menu fix mb-3 mean-container">
                          <MobileMenu />
                        </div>
                        <div className="offcanvas__contact">
                            <h3>Contact Us</h3>
                            <ul className="contact-list">
                                <li>
                                    <span>
                                        Address:
                                    </span>
                                    <a href=""> Akampat, Neilit Camput</a>
                                </li>
                                <li>
                                    <span>
                                        Call Us:
                                    </span>
                                    <a href="tel:+00012345688"> +91 6909255992</a>
                                </li>
                                <li>
                                    <span>
                                        Email:
                                    </span>
                                    <a href="mailto:tamraversity.lamzingtech.com"> tamraversity.lamzingtech.com</a>
                                </li>
                            </ul>
                            {/* <div className="offcanvas-button">
                                <Link to="/sign-in" className="theme-btn style-2"><i className="far fa-user"></i> Admin</Link>
                                <Link to="/register" className="theme-btn yellow-btn">Enroll Now</Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`offcanvas__overlay ${openCanvas? "overlay-open" : ""}`} onClick={() => setOpenCanvas(false)}></div>
    </>
  );
};

export default OffCanvas;