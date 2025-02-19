import { useState } from "react";
import VideoPopup from "../../modals/VideoPopup";
import { Link, useSearchParams } from "react-router-dom";
import { COURSES_DATA } from "../../courseData/courses_data";



const CoursesDetailsArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const [searchParams] = useSearchParams(); // Get query params
  const index = searchParams.get("index"); // Extract index
  const course = index !== null ? COURSES_DATA[parseInt(index)] : null;


  if (!course) {
    return <h2>Course Not Found</h2>;
  }
  return (


    <>

           {/* video modal start */}
           <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Ml4XCF-JS0k"}
      />
      {/* video modal end */}

      {/* <div>
      {COURSES_DATA.map((course) => (
        <Link to={`/courses-details/${encodeURIComponent(course.title)}`} key={course.title}>
          <div className="courses-image">
            <img src={course.image} alt={course.title} />
            <h4 className="topic-title">{course.description}</h4>
          </div>
        </Link>
      ))}
    </div> */}
      
      <section className="courses-details-section section-padding pt-0">
            <div className="container">
                <div className="courses-details-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-8">
                            <div className="courses-details-items">
                                <div className="courses-image">
                                    <img src={course.image} alt={course.title} />
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
                                            <a href="#Curriculum" data-bs-toggle="tab" className="nav-link">
                                                Curriculum
                                            </a>
                                        </li> */}
                                        {/* <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
                                            <a href="#Instructors" data-bs-toggle="tab" className="nav-link">
                                                Instructors
                                            </a>
                                        </li> */}
                                        <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
                                            <a href="#Reviews" data-bs-toggle="tab" className="nav-link bb-none">
                                                Reviews
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div id="Course" className="tab-pane fade show active">
                                            <div className="description-content">
                                                <h3>Description</h3>
                                                <p className="mb-3">
                                                {course.description1}
                                                </p>
                                                <p>
                                                {course.description2}
                                                </p>
                                                <h3 className="mt-5">What you'll learn in this course?</h3>
                                                <p className="mb-4">
                                                The course is designed for beginners with no prior experience and offers a certificate upon completion.
                                                </p>
                                                <div className="row g-4 mb-5">
                                                    <div className="col-lg-12">
                                                        <ul className="list-item">
                                                            <li>
                                                                <i className="fas fa-check-circle"></i>
                                                               {/* <h4>{course.course_schedule?.description}</h4> <br /> */}
                                                               <ul>
                                                               <li>
                                                                    {course.course_schedule?.["syllabus"]
                                                                        ?.split(" :") // Split text by " :"
                                                                        .map((item, index) => {
                                                                        const trimmedItem = item.trim();
                                                                        const isTitle = trimmedItem.endsWith("-"); // Detects section titles dynamically

                                                                        return (
                                                                            <span key={index}>
                                                                            {isTitle ? <h4>{trimmedItem}</h4> : trimmedItem}
                                                                            <br />
                                                                            </span>
                                                                        );
                                                                        })}
                                                                    </li>

                                                               </ul>
                                                             
                                                           

                                                            </li>
                                                            <li>
                                                                <i className="fas fa-check-circle"></i>
                                                                {/* <h4>{course.course_schedule?.description}</h4> <br /> */}
                                                               <ul>
                                                               {/* <li>
                                                                    {course.course_schedule?.["syllabus"]
                                                                    ?.split(": ")
                                                                    .map((item, index) => (
                                                                        <span key={index}>
                                                                        {item}
                                                                        <br />
                                                                        </span>
                                                                    ))}
                                                                </li> */}
                                                               </ul>
                                                            </li>
                                                           
                                                        </ul>
                                                    </div>
                                                    {/* <div className="col-lg-6">
                                                        <ul className="list-item">
                                                            <li>
                                                                <i className="fas fa-check-circle"></i>
                                                                Forms & Validation
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-check-circle"></i>
                                                                Performance Optimization
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-check-circle"></i>
                                                                State Management with Redux (Optional)
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-check-circle"></i>
                                                                Mobile & Responsive Design
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-check-circle"></i>
                                                                Deployment & Best Practices
                                                            </li>
                                                        </ul>
                                                    </div> */}
                                                </div>
                                                <h3>How to Benefits in this Courses</h3>
                                                <p>
                                               {course.description4}
                                                </p>
                                            </div>
                                        </div>
                                        {/* <div id="Curriculum" className="tab-pane fade">
                                            <div className="course-curriculum-items">
                                                <h3>Course Curriculum</h3>
                                                <div className="courses-faq-items">
                                                    <div className="accordion" id="accordionExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="headingOne">
                                                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                    Intro to UX/UI Design 
                                                                </button>
                                                            </h2>
                                                            <div id="collapseOne" className="accordion-collapse collapse show"
                                                                aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                                <div className="accordion-body">
                                                                    <ul>
                                                                        <li>
                                                                            <span>
                                                                                <i className="fas fa-file-alt"></i>
                                                                                Lesson 1 : Introduction to UX/UI Design
                                                                            </span>
                                                                            <span>
                                                                                <i className="far fa-lock"></i>  (45:00 m) 
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span>
                                                                                <i className="fas fa-file-alt"></i>
                                                                                Lesson 2 : Design Thinking & User Research
                                                                            </span>
                                                                            <span>
                                                                                <i className="far fa-lock"></i>  (45:00 m) 
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span>
                                                                                <i className="fas fa-file-alt"></i>
                                                                                Lesson 3 : Wireframing & Prototyping
                                                                            </span>
                                                                            <span>
                                                                                <i className="far fa-lock"></i>  (45:00 m) 
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span>
                                                                                <i className="fas fa-file-alt"></i>
                                                                                Lesson 4 : Visual Design Principles
                                                                            </span>
                                                                            <span>
                                                                                <i className="far fa-lock"></i>  (45:00 m) 
                                                                            </span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="headingTwo">
                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                    Q.  How do I get started with CRM software?
                                                                </button>
                                                            </h2>
                                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                                                data-bs-parent="#accordionExample">
                                                                <div className="accordion-body">
                                                                    <ul>
                                                                        <li>
                                                                            <span>
                                                                                <i className="fas fa-file-alt"></i>
                                                                                Lesson 1 : Introduction to UX/UI Design
                                                                            </span>
                                                                            <span>
                                                                                <i className="far fa-lock"></i>  (45:00 m) 
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span>
                                                                                <i className="fas fa-file-alt"></i>
                                                                                Lesson 2 : Design Thinking & User Research
                                                                            </span>
                                                                            <span>
                                                                                <i className="far fa-lock"></i>  (45:00 m) 
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span>
                                                                                <i className="fas fa-file-alt"></i>
                                                                                Lesson 3 : Wireframing & Prototyping
                                                                            </span>
                                                                            <span>
                                                                                <i className="far fa-lock"></i>  (45:00 m) 
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span>
                                                                                <i className="fas fa-file-alt"></i>
                                                                                Lesson 4 : Visual Design Principles
                                                                            </span>
                                                                            <span>
                                                                                <i className="far fa-lock"></i>  (45:00 m) 
                                                                            </span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item mb-0">
                                                            <h2 className="accordion-header" id="headingthree">
                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#collapsethree" aria-expanded="false"
                                                                    aria-controls="collapsethree">
                                                                    Q. Can I customize CRM software my business needs?
                                                                </button>
                                                            </h2>
                                                            <div id="collapsethree" className="accordion-collapse collapse"
                                                                aria-labelledby="headingthree" data-bs-parent="#accordionExample">
                                                                <div className="accordion-body">
                                                                    <ul>
                                                                        <li>
                                                                            <span>
                                                                                <i className="fas fa-file-alt"></i>
                                                                                Lesson 1 : Introduction to UX/UI Design
                                                                            </span>
                                                                            <span>
                                                                                <i className="far fa-lock"></i>  (45:00 m) 
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span>
                                                                                <i className="fas fa-file-alt"></i>
                                                                                Lesson 2 : Design Thinking & User Research
                                                                            </span>
                                                                            <span>
                                                                                <i className="far fa-lock"></i>  (45:00 m) 
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span>
                                                                                <i className="fas fa-file-alt"></i>
                                                                                Lesson 3 : Wireframing & Prototyping
                                                                            </span>
                                                                            <span>
                                                                                <i className="far fa-lock"></i>  (45:00 m) 
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span>
                                                                                <i className="fas fa-file-alt"></i>
                                                                                Lesson 4 : Visual Design Principles
                                                                            </span>
                                                                            <span>
                                                                                <i className="far fa-lock"></i>  (45:00 m) 
                                                                            </span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        {/* <div id="Instructors" className="tab-pane fade">
                                            <div className="instructors-items">
                                                <h3>Instructors</h3>
                                                <div className="instructors-box-items">
                                                    <div className="thumb">
                                                        <img src="assets/img/courses/instructors-1.png" alt="img" />
                                                    </div>
                                                    <div className="content">
                                                        <h4>Norman K. Zapata</h4>
                                                        <span>Lead UX/UI Designer</span>
                                                        <p>
                                                            UX/UI design courses offer a comprehensive introduction to the world of user experience and user interface design
                                                        </p>
                                                        <div className="social-icon">
                                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                                            <a href="#"><i className="fab fa-dribbble"></i></a>
                                                            <a href="#"><i className="fab fa-behance"></i></a>
                                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="instructors-box-items style-2">
                                                    <div className="thumb">
                                                        <img src="assets/img/courses/instructors-2.png" alt="img" />
                                                    </div>
                                                    <div className="content">
                                                        <h4>Ryan M. Carmichael</h4>
                                                        <span>Product Designer</span>
                                                        <p>
                                                            UX/UI design courses offer a comprehensive introduction to the world of user experience and user interface design
                                                        </p>
                                                        <div className="social-icon">
                                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                                            <a href="#"><i className="fab fa-dribbble"></i></a>
                                                            <a href="#"><i className="fab fa-behance"></i></a>
                                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div id="Reviews" className="tab-pane fade">
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
                                                    {/* <div className="instructors-box-items">
                                                        <div className="thumb">
                                                            <img src="assets/img/courses/instructors-3.png" alt="img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Maria L</h4>
                                                            <span>Junior UX Designer</span>
                                                            <div className="star">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                            </div>
                                                            <p>
                                                                "I enrolled in this UX/UI design course with minimal knowledge the field, and it completely transformed my understanding."
                                                            </p>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="courses-sidebar-area sticky-style">
                                <div className="courses-items">
                                    <div className="courses-image">
                                        <img src={course.image} alt={course.title} />
                                        {/* <h3 className="courses-title">React JS</h3> */}
                                        <h4 className="topic-title">Web Development</h4>
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
                                           {course.description3}
                                        </p>
                                        <div className="courses-btn">
                                            <Link to="https://docs.google.com/forms/d/1Aca3WPaOzTPqnwsgRQaVGwvS7vnIKGISm4KvkTcvw5M/viewform?edit_requested=true" className="theme-btn">EnRoll Now</Link>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-category-items">
                                    <h5>Course Includes:</h5>
                                    <ul>
                                        {/* <li>
                                            <span>
                                                <i className="far fa-chalkboard-teacher"></i>
                                                Instructor
                                            </span>
                                            <span className="text">Mario S. Davis</span>
                                        </li> */}
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
                                        {/* <li>
                                            <span>
                                                <i className="far fa-calendar-alt"></i>
                                                Deadline
                                            </span>
                                            <span className="text">15 December 2024</span>
                                        </li> */}
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