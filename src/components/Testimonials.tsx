import React, { Fragment, useEffect } from "react";

const swiperConfig = {
  loop: true,
  speed: 800,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    "768": {
      slidesPerView: 2,
    },
    "1200": {
      slidesPerView: 3,
    },
  },
};
const Testimonials = () => {
  useEffect(() => {}, []);
  return (
    <Fragment>
      <section
        id="testimonials"
        className="testimonials section light-background"
      >
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>Get Inspired by Our Clients' Success Stories</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="testimonials-slider swiper init-swiper">
            <div
              dangerouslySetInnerHTML={{
                __html: `<script type="application/json" class="swiper-config">
              ${JSON.stringify(swiperConfig)}
            </script>`,
              }}
            ></div>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <p>
                      <i className="bi bi-quote quote-icon"></i>
                      QuickRecords has revolutionized our financial management
                      with its user-friendly interface and collaborative
                      features. It streamlines record-keeping, boosting our
                      productivity and providing unprecedented efficiency and
                      clarity. Highly recommended!
                    </p>
                  </div>
                  <div className="testimonial-profile">
                    <div className="rating">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <div className="profile-info">
                      <img
                        src="/img/person/person-icon.webp"
                        alt="Profile Image"
                      ></img>
                      <div>
                        <h3>Mr. Ngiemboon Willson Yemba</h3>
                        <h4>
                          President (Growth Mindset Association, Buea, Cameroon)
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <p>
                      <i className="bi bi-quote quote-icon"></i>
                      QuickRecords has revolutionized our financial management
                      with its user-friendly interface and collaborative
                      features. It streamlines record-keeping, boosting our
                      productivity and providing unprecedented efficiency and
                      clarity. Highly recommended!
                    </p>
                  </div>
                  <div className="testimonial-profile">
                    <div className="rating">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <div className="profile-info">
                      <img
                        src="/img/person/person-icon.webp"
                        alt="Profile Image"
                      ></img>
                      <div>
                        <h3>Mr. Ngiemboon Willson Yemba</h3>
                        <h4>
                          President (Growth Mindset Association, Buea, Cameroon)
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <p>
                      <i className="bi bi-quote quote-icon"></i>
                      QuickRecords has revolutionized our financial management
                      with its user-friendly interface and collaborative
                      features. It streamlines record-keeping, boosting our
                      productivity and providing unprecedented efficiency and
                      clarity. Highly recommended!
                    </p>
                  </div>
                  <div className="testimonial-profile">
                    <div className="rating">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <div className="profile-info">
                      <img
                        src="/img/person/person-icon.webp"
                        alt="Profile Image"
                      ></img>
                      <div>
                        <h3>Mr. Ngiemboon Willson Yemba</h3>
                        <h4>
                          President (Growth Mindset Association, Buea, Cameroon)
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <p>
                      <i className="bi bi-quote quote-icon"></i>
                      QuickRecords has revolutionized our financial management
                      with its user-friendly interface and collaborative
                      features. It streamlines record-keeping, boosting our
                      productivity and providing unprecedented efficiency and
                      clarity. Highly recommended!
                    </p>
                  </div>
                  <div className="testimonial-profile">
                    <div className="rating">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <div className="profile-info">
                      <img
                        src="/img/person/person-icon.webp"
                        alt="Profile Image"
                      ></img>
                      <div>
                        <h3>Mr. Ngiemboon Willson Yemba</h3>
                        <h4>
                          President (Growth Mindset Association, Buea, Cameroon)
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <p>
                      <i className="bi bi-quote quote-icon"></i>
                      QuickRecords has revolutionized our financial management
                      with its user-friendly interface and collaborative
                      features. It streamlines record-keeping, boosting our
                      productivity and providing unprecedented efficiency and
                      clarity. Highly recommended!
                    </p>
                  </div>
                  <div className="testimonial-profile">
                    <div className="rating">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <div className="profile-info">
                      <img
                        src="/img/person/person-icon.webp"
                        alt="Profile Image"
                      ></img>
                      <div>
                        <h3>Mr. Ngiemboon Willson Yemba</h3>
                        <h4>
                          President (Growth Mindset Association, Buea, Cameroon)
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <p>
                      <i className="bi bi-quote quote-icon"></i>
                      QuickRecords has revolutionized our financial management
                      with its user-friendly interface and collaborative
                      features. It streamlines record-keeping, boosting our
                      productivity and providing unprecedented efficiency and
                      clarity. Highly recommended!
                    </p>
                  </div>
                  <div className="testimonial-profile">
                    <div className="rating">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <div className="profile-info">
                      <img
                        src="/img/person/person-icon.webp"
                        alt="Profile Image"
                      ></img>
                      <div>
                        <h3>Mr. Ngiemboon Willson Yemba</h3>
                        <h4>
                          President (Growth Mindset Association, Buea, Cameroon)
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Testimonials;
