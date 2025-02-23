import NavMenu from "./NavMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../../common/Search";
import UseSticky from "../../hooks/UseSticky";
// import NiceSelect from "../../ui/NiceSelect";
import OffCanvas from "../../common/OffCanvas";
import MarqueeOne from "../../common/MarqueeOne";
import Tamravarsity from "../../../public/assets/img/logo/tamravarsityfooter.png"
import { useAuth } from "../../components/sign-in/auth";
 
const HeaderOne = () => {

//   const selectHandler = (_e: any) => { };
  const { sticky } = UseSticky()


  const [open, setOpen] = useState(false)
  const [openCanvas, setOpenCanvas] = useState(false)

  const { isAuthenticated, logout } = useAuth();
  return (
    <>
    <MarqueeOne />
     <header id="header-sticky" className={`header-1 ${sticky ? "sticky" : ""}`}>
            <div className="container-fluid">
                <div className="mega-menu-wrapper">
                    <div className="header-main" style={{padding: "0px" }}>
                        <div className="header-left">
                            <div className="logo">
                                <Link to="/" className="header-logo">
                                    {/* <img src="assets/img/logo/black-logo.svg" alt="logo-img" /> */}
                                    <div className="header-left" style={{gap: "10px"}}>
                                    <img src={Tamravarsity} style={{width: "7vh"}} alt="Tamravarsity" />
                                    <h3>Tamravarsity</h3>
                                    </div>
                                  
                                
                                </Link>
                            </div>
                            {/* <div className="category-oneadjust">
                               <div className="dot">
                                    <img src="assets/img/logo/dot.png" alt="img" />
                               </div> 

                                <NiceSelect
                                  className="category"
                                  options={[
                                    { value: "01", text: "Category" },
                                    { value: "02", text: "Web Design" },
                                    { value: "03", text: "Web Development" },
                                    { value: "04", text: "Graphic Design" },
                                    { value: "05", text: "Software Eng" },
                                  ]}
                                  defaultCurrent={0}
                                  onChange={selectHandler}
                                  name=""
                                  placeholder="" />

                            </div> */}
                        </div>
                        <div className="header-right d-flex justify-content-end align-items-center">
                            <div className="mean__menu-wrapper">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <NavMenu />
                                    </nav>
                                </div>
                            </div>
                            {/* <div className="header-search">
                                <button 
                                onClick={ () => setOpen(!open)}
                                className="d-flex align-items-center search-toggle"><i className="fa-solid fa-search"></i></button>
                            </div> */}
                            <div className="header-button">
                            {isAuthenticated ? (
                                    <button onClick={logout} className="theme-btn style-2">
                                   <i className="fa-solid fa-arrow-left-to-bracket"></i> Logout
                                    </button>
                                ) : (
                                    <Link to="/sign-in" className="theme-btn style-2">
                                    <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
                                    </Link>
                                )}
                             
                            </div>

                               {/* <Link to="/register" className="theme-btn yellow-btn">Enroll Now</Link> */}
                            <div className="header__hamburger d-xl-none my-auto">
                                <div className="sidebar__toggle">
                                    <div className="header-bar" onClick={ () => setOpenCanvas(!openCanvas)}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <Search open={open} setOpen={setOpen} />
        <OffCanvas openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />
      
    </>
  );
};

export default HeaderOne;