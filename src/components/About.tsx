import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 content"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p className="who-we-are">About</p>
              <h3>Unleashing Potential with Creative Strategy</h3>
              <p className="fst-italic">
                In today’s fast-paced world, efficient record management is
                crucial. QuickRecords eliminates the hassle of traditional
                record-keeping methods, allowing you to focus on maximizing
                productivity.
              </p>

              <a href="#" className="read-more">
                <span>Get Started</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            <div
              className="col-lg-6 about-images"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row gy-4">
                <div className="col-lg-6">
                  <img
                    src="/img/about/about-portrait-1.webp"
                    className="img-fluid"
                    alt=""
                  ></img>
                </div>
                <div className="col-lg-6">
                  <div className="row gy-4">
                    <div className="col-lg-12">
                      <img
                        src="/img/about/about-8.webp"
                        className="img-fluid"
                        alt=""
                      ></img>
                    </div>
                    <div className="col-lg-12">
                      <img
                        src="/img/about/about-12.webp"
                        className="img-fluid"
                        alt=""
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
