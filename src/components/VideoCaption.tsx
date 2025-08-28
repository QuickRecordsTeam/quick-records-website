import React, { Fragment } from "react";
import { VideoModal } from "./VideoModal";

const VideoCaption = () => {
  return (
    <Fragment>
      <section id="portfolio" className="portfolio section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Your Personal Tour</h2>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div
            className="isotope-layout"
            data-default-filter="*"
            data-layout="masonry"
            data-sort="original-order"
          >
            <div
              className="row g-4 isotope-container"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="col-lg-3 col-md-3 portfolio-item isotope-item filter-web"></div>
              <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-web">
                <div className="portfolio-card">
                  <div className="portfolio-image">
                    <img
                      src="/img/illustration/video-caption-image.png"
                      className="img-fluid"
                      alt=""
                      loading="lazy"
                    ></img>
                    <div className="portfolio-overlay">
                      <div className="portfolio-actions">
                        <a
                          href="/video/video-caption.mp4"
                          className="glightbox preview-link"
                          role="button"
                          data-bs-toggle="modal"
                          data-bs-target="#videoModal"
                        >
                          <i className="bi bi-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <p>
                      Ready for a sneaky peek, hint the play button to have a
                      closer look at QuickRecords in action
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 portfolio-item isotope-item filter-web"></div>
            </div>
          </div>
        </div>
      </section>

      <VideoModal />
    </Fragment>
  );
};

export default VideoCaption;
