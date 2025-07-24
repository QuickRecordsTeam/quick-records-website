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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo. Sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua.
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
                        src="/img/person/person-m-8.webp"
                        alt="Profile Image"
                      ></img>
                      <div>
                        <h3>Robert Johnson</h3>
                        <h4>Marketing Director</h4>
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
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et maecenas aliquam.
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
                        src="/img/person/person-f-3.webp"
                        alt="Profile Image"
                      ></img>
                      <div>
                        <h3>Lisa Williams</h3>
                        <h4>Product Manager</h4>
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
                      Enim nisi quem export duis labore cillum quae magna enim
                      sint quorum nulla quem veniam duis minim tempor labore
                      quem eram duis noster aute amet eram.
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
                        src="/img/person/person-f-10.webp"
                        alt="Profile Image"
                      ></img>
                      <div>
                        <h3>Emma Parker</h3>
                        <h4>UX Designer</h4>
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
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                      multos export minim fugiat minim velit minim dolor enim
                      duis veniam ipsum anim magna sunt elit.
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
                        src="/img/person/person-m-5.webp"
                        alt="Profile Image"
                      ></img>
                      <div>
                        <h3>David Miller</h3>
                        <h4>Senior Developer</h4>
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
                      Quis quorum aliqua sint quem legam fore sunt eram irure
                      aliqua veniam tempor noster veniam enim culpa labore duis
                      sunt culpa nulla illum cillum fugiat.
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
                        src="/img/person/person-m-2.webp"
                        alt="Profile Image"
                      ></img>
                      <div>
                        <h3>Michael Davis</h3>
                        <h4>CEO &amp; Founder</h4>
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
                      Eius ipsam praesentium dolor quaerat inventore rerum odio.
                      Quos laudantium adipisci eius. Accusamus qui iste
                      cupiditate sed temporibus est aspernatur.
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
                        src="/img/person/person-f-7.webp"
                        alt="Profile Image"
                      ></img>
                      <div>
                        <h3>Sarah Thompson</h3>
                        <h4>Art Director</h4>
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
