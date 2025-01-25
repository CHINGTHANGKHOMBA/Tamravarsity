

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import robsonImg from "../../../../public/assets/img/testimonial/robson.jpg"
import ronaldoImg from "../../../../public/assets/img/testimonial/ronaldo.jpeg"
import rhianImg from "../../../../public/assets/img/testimonial/rhian.jpeg"

 

const TestimonialHomeOne = () => {
  return (
    <>
      <section className="testimonial-section fix section-padding">
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="wow fadeInUp">
                        Students Reviews
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                       Students Say About Our <br /> Courses and Instructors
                    </h2>
                </div>
                <Swiper 
                spaceBetween={30}
                speed={2000}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: ".dot",
                    clickable: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                  1199: {
                      slidesPerView: 2,
                  },
                  991: {
                      slidesPerView: 1,
                  },
                  767: {
                      slidesPerView: 1,
                  },
                  575: {
                      slidesPerView: 1,
                  },
                  0: {
                      slidesPerView: 1,
                  },
              }}
                className="swiper testimonial-slider"> 
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-box-items">
                            <div className="testimonial-content">
                                <div className="star">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p>
                                    "
                                    The Tamravarsity ReactJS course is incredibly comprehensive, well-structured,
                                     and expertly taught, making it an excellent resource for learning ReactJS."
                                </p>
                                <div className="client-info">
                                    <h4>Robson Wairokpam</h4>
                                    <span>Web Developer</span>
                                </div>
                            </div>
                            <div className="testimonial-image" >
                                <img style={{width: '20vh', height: '25vh'}} src={robsonImg} alt="img" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-box-items bg-2">
                            <div className="testimonial-content">
                                <div className="star">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p>
                                The Tamravarsity Android App Development course is a fantastic learning experience, providing a solid foundation in 
                                web development fundamentals and the latest industry trends.
                                </p>
                                <div className="client-info">
                                    <h4>Ronaldo</h4>
                                    <span>Android App Developer</span>
                                </div>
                            </div>
                            <div className="testimonial-image">
                            <img  style={{width: '20vh', height: '25vh'}} src={ronaldoImg} alt="img" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-box-items">
                            <div className="testimonial-content">
                                <div className="star">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p>
                                The Tamravarsity Machine Learning course is an outstanding program that delivers hands-on expertise in machine learning concepts, 
                                algorithms, and tools, preparing students for real-world applications.
                                </p>
                                <div className="client-info">
                                    <h4>Rhian</h4>
                                    <span>Machine Learning</span>
                                </div>
                            </div>
                            <div className="testimonial-image">
                                <img  style={{width: '20vh', height: '25vh'}} src={rhianImg} alt="img" />
                            </div>
                        </div>
                    </SwiperSlide>
                     
                    <div className="swiper-dot text-center mt-5">
                        <div className="dot"></div>
                    </div>
                </Swiper>
            </div>
        </section>
    </>
  );
};

export default TestimonialHomeOne;