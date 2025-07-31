import React, { Fragment } from "react";

const Hero = () => {
  return (
    <Fragment>
      <section id="about" className="hero section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="badge-wrapper mb-3">
                <div className="d-inline-flex align-items-center rounded-pill border border-accent-light">
                  <div className="icon-circle me-2">
                    <i className="bi bi-bell"></i>
                  </div>
                  <span className="badge-text me-3">Innovative Technology</span>
                </div>
              </div>

              <h1 className="hero-title mb-4">
                Streamlining Finance Management with Innovative Technology
              </h1>

              <p className="hero-description mb-4">
                QuickRecords is a user-friendly and collaborative SaaS that
                streamlines record management of finances, allowing you to focus
                on maximizing productivity.
              </p>
              <div className="cta-wrapper">
                <a href="#contact" className="btn btn-primary">
                  Get Started
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-image">
                <img
                  src="/img/illustration/illustration-example.png"
                  alt="Business Growth"
                  className="img-fluid"
                  loading="lazy"
                ></img>
              </div>
            </div>
          </div>

          <div className="row feature-boxes">
            <div
              className="col-lg-4 mb-4 mb-lg-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="feature-box">
                <div className="feature-icon me-sm-4 mb-3 mb-sm-0">
                  <i className="bi bi-cash"></i>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">
                    Intuitive Transaction Management
                  </h3>
                  <p className="feature-text">
                    Easily record income, expenditures, contributions, and
                    savings with an efficient workflow.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 mb-4 mb-lg-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="feature-box">
                <div className="feature-icon me-sm-4 mb-3 mb-sm-0">
                  <i className="bi bi-file-earmark-text"></i>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Report Generation</h3>
                  <p className="feature-text">
                    Generate on-demand Activity, Quarterly, and Yearly reports
                    to save you time.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
              <div className="feature-box">
                <div className="feature-icon me-sm-4 mb-3 mb-sm-0">
                  <i className="bi bi-graph-up"></i>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title"> Analytics Dashboard</h3>
                  <p className="feature-text">
                    Gain insights into your records to make informed decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
