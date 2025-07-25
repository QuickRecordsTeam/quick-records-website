import React, { Fragment } from "react";

const CallToAction = () => {
  return (
    <Fragment>
      <section
        id="call-to-action-2"
        className="call-to-action-2 section light-background"
      >
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="cta-image-wrapper">
                <img
                  src="/img/cta/cta-4.webp"
                  alt="Call to Action"
                  className="img-fluid rounded-4"
                ></img>
                <div className="cta-pattern"></div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
              <div className="cta-content">
                <h2>Elevant your Financial Management Journey Today</h2>
                <p className="lead">
                  Say Goodbye to the Hassle of Manual Entry and Stressful
                  Reports. Experience Effortless Management and Gain Confidence
                  in Your Financial Insights!
                </p>

                <div className="cta-features">
                  <div
                    className="feature-item"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Visual Financial Transactions and Statistics</span>
                  </div>
                  <div
                    className="feature-item"
                    data-aos="zoom-in"
                    data-aos-delay="450"
                  >
                    <i className="bi bi-check-circle-fill"></i>
                    <span>On-demand Reports and Balance Sheets</span>
                  </div>
                  <div
                    className="feature-item"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                  >
                    <i className="bi bi-check-circle-fill"></i>
                    <span>A 30-day free trial</span>
                  </div>
                </div>

                <div className="cta-action mt-5">
                  <a href="#contact" className="btn btn-primary btn-lg me-3">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CallToAction;
