import React, { Fragment } from "react";

const Team = () => {
  return (
    <Fragment>
      <section id="team" className="team section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-5">
            <div
              className="col-md-4 col-lg-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            ></div>
            <div
              className="col-md-4 col-lg-4"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="team-card">
                <div className="team-image">
                  <img
                    src="/img/person/person-m-1.webp"
                    className="img-fluid"
                    alt=""
                  ></img>
                  <div className="team-overlay">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla quam velit, vulputate eu pharetra nec, mattis ac
                      neque.
                    </p>
                    <div className="team-social">
                      <a href="">
                        <i className="bi bi-twitter-x"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h4>Edmond N. Suh</h4>
                  <span className="position">Founder</span>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-lg-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            ></div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Team;
