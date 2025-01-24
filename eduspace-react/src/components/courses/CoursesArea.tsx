import { Link } from "react-router-dom";
// import NiceSelect from "../../ui/NiceSelect";

 
const CoursesArea = () => {
//   const selectHandler = (_e: any) => { };

  return (
    <>
       <section className="popular-courses-section fix section-padding">
            <div className="container">
                <div className="coureses-notices-wrapper">
                    <div className="courses-showing">
                
                        {/* <h5>Showing <span>1-6</span> Of <span>24</span> Results</h5> */}
                    </div>
                  
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                <img src="assets/img/courses/ReactJS.png" alt="ReactJS" />
                                    {/* <h3 className="courses-title">React JS</h3> */}
                                    <h4 className="topic-title">Advance Web App</h4>
                                    
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link to="/courses">React JS</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link to="">
                                            Learn With Advance Web
                                            Development
                                        </Link>
                                    </h3>
                                    {/* <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Ronaldo</p>
                                    </div> */}
                                    <ul className="post-class">
                                        
                                        <li>
                                            <Link to="https://courses.lamzingtech.com/course/view.php?id=24" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                <img src="assets/img/courses/CertifiedWebDeveloper.png" alt="CertifiedWebDeveloper" />
                                    {/* <h3 className="courses-title">Web Developer</h3>
                                    <h4 className="topic-title">Certified Web Developer</h4> */}
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link to="/courses">Web Developer</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link to="">
                                        Advance Your Web Development Skills
                                        </Link>
                                    </h3>
                                    {/* <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Raikumar</p>
                                    </div> */}
                                    <ul className="post-class">
                                        {/* <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li> */}
                                        <li>
                                            <Link to="https://courses.lamzingtech.com/course/view.php?id=8" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                <img src="assets/img/courses/CertifiedDataAnalyst.png" alt="CertifiedDataAnalyst" />
                                    {/* <h3 className="courses-title">Data Analyst</h3>
                                    <h4 className="topic-title">Certified Data Analyst</h4> */}
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link to="/courses">Data Analyst</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                    {/* /courses-details */}
                                        <Link to=""> 
                                        Advance Your Career in Data Analysis
                                        </Link>
                                    </h3>
                                    {/* <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Bronson</p>
                                    </div> */}
                                    <ul className="post-class">
                                        {/* <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li> */}
                                        <li>
                                            <Link to="https://courses.lamzingtech.com/course/view.php?id=9" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                <img src="assets/img/courses/MachineLearning.png" alt="MachineLearning" />
                                    {/* <h3 className="courses-title">Machine Learning</h3>
                                    <h4 className="topic-title">Machine Learning using Python</h4> */}
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link to="/courses">Machine Learning</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link to="">
                                        Foundation course in Machine Learning using Python
                                        </Link>
                                    </h3>
                                    {/* <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Yaiphaba</p>
                                    </div> */}
                                    <ul className="post-class">
                                        {/* <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li> */}
                                        <li>
                                            <Link to="https://courses.lamzingtech.com/course/view.php?id=10" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                <img src="assets/img/courses/AIApplications.png" alt="AIApplications" />
                                    {/* <h3 className="courses-title">AI Application</h3>
                                    <h4 className="topic-title">Artificial Intelligence Applications</h4> */}
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link to="/courses">AI Application</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link to="">
                                        Foundation course in AI Applications
                                        </Link>
                                    </h3>
                                    {/* <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Chingkhei</p>
                                    </div> */}
                                    <ul className="post-class">
                                        {/* <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li> */}
                                        <li>
                                            <Link to="https://courses.lamzingtech.com/course/view.php?id=11" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                <img src="assets/img/courses/AIAssociate.png" alt="AIAssociate" />
                                    {/* <h3 className="courses-title">AI Associate "Upskilling"</h3>
                                    <h4 className="topic-title">Artificial Intelligence (AI) Associate "Upskilling"</h4> */}
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link to="/courses">AI Associate "Upskilling"</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link to="">
                                       Artificial Intelligence (AI) Associate "Upskilling"
                                        </Link>
                                    </h3>
                                    {/* <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Nehru</p>
                                    </div> */}
                                    <ul className="post-class">
                                        {/* <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li> */}
                                        <li>
                                            <Link to="https://courses.lamzingtech.com/course/view.php?id=12" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                <img src="assets/img/courses/CloudComputing.png" alt="CloudComputing" />
                                    {/* <h3 className="courses-title">Cloud Computing</h3>
                                    <h4 className="topic-title">Cloud Computing and Virtualization Expert</h4> */}
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link to="/courses">Cloud computing</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link to="">
                                        Certified Cloud Computing and Virtualization Expert
                                        </Link>
                                    </h3>
                                    {/* <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Nehru</p>
                                    </div> */}
                                    <ul className="post-class">
                                        {/* <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li> */}
                                        <li>
                                            <Link to="https://courses.lamzingtech.com/course/view.php?id=13" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                <img src="assets/img/courses/AndroidApps.png" alt="AndroidApps" />
                                    {/* <h3 className="courses-title">Android Apps Developer</h3>
                                    <h4 className="topic-title">Android Apps Developer (Upskilling)</h4> */}
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link to="/courses">Android Apps Developer</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link to="">
                                        Certified Android Apps Developer (Upskilling)
                                        </Link>
                                    </h3>
                                    {/* <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Nehru</p>
                                    </div> */}
                                    <ul className="post-class">
                                        {/* <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li> */}
                                        <li>
                                            <Link to="hhttps://courses.lamzingtech.com/course/view.php?id=14" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                <img src="assets/img/courses/CAA.png" alt="CAA" />
                                    {/* <h3 className="courses-title">Computer Applications Associate"</h3>
                                    <h4 className="topic-title">Computer Applications Associate(CAA)</h4> */}
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link to="/courses">Computer Applications Associate</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link to="">
                                        Computer Applications Associate(CAA)
                                        </Link>
                                    </h3>
                                    {/* <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Nehru</p>
                                    </div> */}
                                    <ul className="post-class">
                                        {/* <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li> */}
                                        <li>
                                            <Link to="https://courses.lamzingtech.com/course/view.php?id=15" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                <img src="assets/img/courses/DataEntry.png" alt="DataEntry" />
                                    {/* <h3 className="courses-title">Data Entry & Office Assistant</h3>
                                    <h4 className="topic-title">Certified Data Entry and Office Assistant (Upskilling)</h4> */}
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link to="/courses">Data Entry & Office Assistant</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link to="">
                                        Certified Data Entry and Office Assistant (Upskilling)
                                        </Link>
                                    </h3>
                                    {/* <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Nehru</p>
                                    </div> */}
                                    <ul className="post-class">
                                        {/* <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li> */}
                                        <li>
                                            <Link to="https://courses.lamzingtech.com/course/view.php?id=16" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                <img src="assets/img/courses/CloudComputingAssistant.png" alt="CloudComputingAssistant" />
                                    {/* <h3 className="courses-title">Cloud Computing Assistant</h3>
                                    <h4 className="topic-title">Cloud Computing Assistant</h4> */}
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link to="/courses">Cloud Computing</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul> <br />
                                    <h3>
                                        <Link to="">
                                        Cloud Computing Assistant
                                        </Link>
                                    </h3>
                                    {/* <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Nehru</p>
                                    </div> */}
                                    <ul className="post-class">
                                        {/* <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li> */}
                                        <li>
                                            <Link to="https://courses.lamzingtech.com/course/view.php?id=17" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                <img src="assets/img/courses/JuniorCloudComputing.png" alt="JuniorCloudComputing" />
                                    {/* <h3 className="courses-title">Cloud Computing Associate"</h3>
                                    <h4 className="topic-title">Junior Cloud Computing Associate</h4> */}
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link to="/courses">Computer Applications Associate</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link to="">
                                        Junior Cloud Computing Associate
                                        </Link>
                                    </h3>
                                    {/* <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Nehru</p>
                                    </div> */}
                                    <ul className="post-class">
                                        {/* <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li> */}
                                        <li>
                                            <Link to="https://courses.lamzingtech.com/course/view.php?id=18" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                <img src="assets/img/courses/CloudComputingAssociate.png" alt="CloudComputingAssociate" />
                                    {/* <h3 className="courses-title">Cloud Computing Associate"</h3>
                                    <h4 className="topic-title">Cloud Computing Associate</h4> */}
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link to="/courses">Cloud Computing Associate</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link to="">
                                        Cloud Computing Associate
                                        </Link>
                                    </h3>
                                    {/* <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Nehru</p>
                                    </div> */}
                                    <ul className="post-class">
                                        {/* <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li> */}
                                        <li>
                                            <Link to="https://courses.lamzingtech.com/course/view.php?id=19" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                <img src="assets/img/courses/AIAssistant.png" alt="AIAssistant" />
                                    {/* <h3 className="courses-title">AI Assistant"</h3>
                                    <h4 className="topic-title">Artificial Intelligence Assistant</h4> */}
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link to="/courses">AI Assistant</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link to="">
                                        Artificial Intelligence Assistant
                                        </Link>
                                    </h3>
                                    {/* <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Nehru</p>
                                    </div> */}
                                    <ul className="post-class">
                                        {/* <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li> */}
                                        <li>
                                            <Link to="https://courses.lamzingtech.com/course/view.php?id=20" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                <img src="assets/img/courses/AIAssociate.png" alt="AIAssociate" />
                                    {/* <h3 className="courses-title">AI Associate"</h3>
                                    <h4 className="topic-title">Artificial Intelligence Associate</h4> */}
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link to="/courses">AI Associate</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link to="">
                                        Artificial Intelligence Associate
                                        </Link>
                                    </h3>
                                    {/* <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Nehru</p>
                                    </div> */}
                                    <ul className="post-class">
                                        {/* <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li> */}
                                        <li>
                                            <Link to="https://courses.lamzingtech.com/course/view.php?id=21" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                <img src="assets/img/courses/AIApplicationDeveloper.jpg" alt="AIApplicationDeveloper.jpg" />
                                    {/* <h3 className="courses-title">AI Application Developer"</h3>
                                    <h4 className="topic-title">Artificial Intelligence Application Developer</h4> */}
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link to="/courses">AI Application Developer</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link to="">
                                        Artificial Intelligence Application Developer
                                        </Link>
                                    </h3>
                                    {/* <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Nehru</p>
                                    </div> */}
                                    <ul className="post-class">
                                        {/* <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li> */}
                                        <li>
                                            <Link to="https://courses.lamzingtech.com/course/view.php?id=22" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="page-nav-wrap pt-5 text-center">
                    <ul>
                        <li><a className="page-numbers" href="#">1</a></li>
                        <li><a className="page-numbers" href="/coursesArea2">2</a></li>
                        <li><a className="page-numbers" href="#">3</a></li>
                        <li><a className="page-numbers" href="#">4</a></li>
                        <li><a className="page-numbers" href="#"><i className="far fa-arrow-right"></i></a></li>
                    </ul>
                </div> */}
            </div>
        </section>
    </>
  );
};

export default CoursesArea;