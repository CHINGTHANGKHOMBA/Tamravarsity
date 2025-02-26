import { useState, useEffect } from "react";
import VideoPopup from "../../modals/VideoPopup";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { COURSES_DATA } from "../../courseData/courses_data";
import { useAuth } from "../../components/sign-in/auth";


type Course = {
    id?: number;
    course_name?: string;
    course_img?: string;
    course_details?: string;
    course_type?: string;
  };

const CoursesDetailsArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [course, setCourse] = useState<Course>({});

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id"); // Extract ID from URL

  const [showPopup, setShowPopup] = useState(false);

  const handleEnrollClick = (e: { preventDefault: () => void; }) => {
    if (!isAuthenticated) {
      e.preventDefault(); // Prevent navigation
      setShowPopup(true);
    }
  };

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return; // Prevent fetching if ID is null

    fetch(`http://127.0.0.1:8000/api/courses/${id}/`)
      .then((response) => response.json())
      .then((data: Course) => {
        console.log("Fetched Course Data:", data);
        setCourse(data); // Set the course data
      })
      .catch((error) => console.log("Fetch error:", error));
  }, [id]);
  
//   const [searchParams] = useSearchParams(); // Get query params
//   const index = searchParams.get("index"); // Extract index
//   const course = index !== null ? COURSES_DATA[parseInt(index)] : null;


//   if (!course) {
//     return <h2>Course Not Found</h2>;
//   }
  return (


    <>

           {/* video modal start */}
           <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Ml4XCF-JS0k"}
      />
      {/* video modal end */}
      <section className="courses-details-section section-padding pt-0">
            <div className="container">
                <div className="courses-details-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-8">
                            <div className="courses-details-items">
                                <div className="courses-image">
                                {course &&  <img src={"http://127.0.0.1:8000/"+course.course_img} alt={course.course_name} 
                                onError={(e) => {e.currentTarget.src = "../../../public/assets/img/courses/Dummy.png"}}
                                />}
                                    <a 
                                    onClick={() => setIsVideoOpen(true)}
                                    style={{ cursor: "pointer" }}
                                    className="video-btn ripple video-popup">
                                        <i className="fas fa-play"></i>
                                    </a>
                                </div>
                                <div className="courses-details-content">
                                    <ul className="nav">
                                        <li className="nav-item wow fadeInUp" data-wow-delay=".3s">
                                            <a href="#Course" data-bs-toggle="tab" className="nav-link active">
                                                Course Info
                                            </a>
                                        </li>
                              
                                        {/* <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
                                            <a href="#Reviews" data-bs-toggle="tab" className="nav-link bb-none">
                                                Reviews
                                            </a>
                                        </li> */}
                                    </ul>
                                    <div id="Course" className="tab-pane fade show active" style={{ padding: "15px", textAlign: "left" }}>
                                            <div className="courses-details-box">
                                                {course?.course_details ? (
                                                <div dangerouslySetInnerHTML={{ __html: String(course.course_details) }} />
                                                ) : (
                                                    <div>
                                                        <p
                                                            style={{
                                                            color: "#546695",
                                                            fontSize: "8vh",
                                                            fontWeight: "bold",
                                                           
                                                            animation: "fadeInOut 1.5s infinite alternate",
                                                            }}
                                                        >
                                                            Loading...
                                                        </p>

                                                        <style>
                                                            {`
                                                            @keyframes fadeInOut {
                                                                0% { opacity: 0.3; }
                                                                100% { opacity: 1; }
                                                            }
                                                            `}
                                                        </style>
                                                        </div>
                                                )}
                                            </div>
                                            </div>
                                                                                <div className="tab-content">
                                        {/* <div id="Reviews" className="tab-pane fade">
                                            <div className="courses-reviews-items">
                                                <h3>Course Reviews</h3>
                                                <div className="courses-reviews-box-items">
                                                    <div className="courses-reviews-box">
                                                        <div className="reviews-box">
                                                            <h2><span className="count">4.8</span></h2>
                                                            <div className="star">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                            </div>
                                                            <p>856+ Reviews</p>
                                                        </div>
                                                        <div className="reviews-ratting-right">
                                                            <div className="reviews-ratting-item">
                                                                <div className="star">
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                </div>
                                                                <div className="progress">
                                                                    <div className="progress-value style-two"></div>
                                                                </div>
                                                                <span>(10)</span>
                                                            </div>
                                                            <div className="reviews-ratting-item">
                                                                <div className="star">
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star color-2"></i>
                                                                </div>
                                                                <div className="progress">
                                                                    <div className="progress-value style-three"></div>
                                                                </div>
                                                                <span>(08)</span>
                                                            </div>
                                                            <div className="reviews-ratting-item">
                                                                <div className="star">
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star color-2"></i>
                                                                    <i className="fas fa-star color-2"></i>
                                                                </div>
                                                                <div className="progress">
                                                                    <div className="progress-value style-three"></div>
                                                                </div>
                                                                <span>(08)</span>
                                                            </div>
                                                            <div className="reviews-ratting-item">
                                                                <div className="star">
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star color-2"></i>
                                                                    <i className="fas fa-star color-2"></i>
                                                                    <i className="fas fa-star color-2"></i>
                                                                </div>
                                                                <div className="progress">
                                                                    <div className="progress-value style-four"></div>
                                                                </div>
                                                                <span>(01)</span>
                                                            </div>
                                                            <div className="reviews-ratting-item">
                                                                <div className="star">
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star color-2"></i>
                                                                    <i className="fas fa-star color-2"></i>
                                                                    <i className="fas fa-star color-2"></i>
                                                                    <i className="fas fa-star color-2"></i>
                                                                </div>
                                                                <div className="progress">
                                                                    <div className="progress-value style-five"></div>
                                                                </div>
                                                                <span>(00)</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                          
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="courses-sidebar-area sticky-style">
                                <div className="courses-items">
                                    <div className="courses-image">
                                    {course &&  <img src={"http://127.0.0.1:8000/"+course.course_img} alt={course.course_name} 
                                       onError={(e) => {e.currentTarget.src = "../../../public/assets/img/courses/Dummy.png"}}
                                    />}
                                        {/* <h3 className="courses-title">React JS</h3> */}
                                        {/* <h4 className="topic-title">Web Development</h4> */}
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
                                
                                        <p>
                                           {/* {course.description3} */}
                                        </p>
                                        <div className="courses-btn">
                                                {isAuthenticated ? (
                                                    <Link
                                                    to="https://docs.google.com/forms/d/1Aca3WPaOzTPqnwsgRQaVGwvS7vnIKGISm4KvkTcvw5M/viewform?edit_requested=true"
                                                    className="theme-btn"
                                                    >
                                                    Enroll Now
                                                    </Link>
                                                ) : (
                                                    <button onClick={handleEnrollClick} className="theme-btn">
                                                    Enroll Now
                                                    </button>
                                                )}

                                                {/* Popup for login warning */}
                                                {showPopup && (
                                                    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                                                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                                        <p className="text-lg font-semibold mb-4">Please log in to enroll!</p>
                                                        <button
                                                        onClick={() => navigate("/sign-in")}
                                                        className="bg-blue-500 text-black px-4 py-2 rounded"
                                                        >
                                                        Go to Login
                                                        </button>
                                                    </div>
                                                    </div>
                                                )}
                                                </div>
                                        {/* <div className="courses-btn">
                                            <Link to="https://docs.google.com/forms/d/1Aca3WPaOzTPqnwsgRQaVGwvS7vnIKGISm4KvkTcvw5M/viewform?edit_requested=true" className="theme-btn">EnRoll Now</Link>
                                            
                                        </div> */}
                                    </div>
                                </div>
                                <div className="courses-category-items">
                                    <h5>Course Includes:</h5>
                                    <ul>
                                        <li>
                                            <span>
                                                <i className="far fa-user"></i>
                                                Lesson
                                            </span>
                                            <span className="text">15</span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="far fa-clock"></i>
                                                Duration
                                            </span>
                                            <span className="text">40h</span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="far fa-user"></i>
                                                Students
                                            </span>
                                            <span className="text">50+</span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="far fa-globe"></i>
                                                Language
                                            </span>
                                            <span className="text">Manipuri</span>
                                             <span className="text">English</span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="far fa-signal-alt"></i>
                                                Skill Level
                                            </span>
                                            <span className="text">All Level</span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fal fa-medal"></i>
                                                Certifications
                                            </span>
                                            <span className="text">Yes</span>
                                        </li>
                                    </ul>
                                    {/* <Link to="/courses-details" className="share-btn"><i className="fas fa-share"></i> Share this courses</Link> */}
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

export default CoursesDetailsArea;