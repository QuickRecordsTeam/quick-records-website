import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer id="footer" className="footer light-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="/" className="logo d-flex align-items-center">
                <span className="sitename">
                  <span className="app-name-one">
                    Quick<span className="app-name-two">Records</span>
                  </span>
                </span>
              </a>
              <div className="footer-contact pt-3">
                <p>Buea, Southwest Region</p>
                <p>Cameroon</p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>+237 673660071</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>info@quickrecords.com</span>
                </p>
              </div>
              <div className="social-links d-flex mt-4">
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

            <div className="col-lg-4 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about">About us</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Terms of service</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-3 footer-links">
              <h4>Features</h4>
              <ul>
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4"></div>
      </footer>
    </Fragment>
  );
};

export default Footer;
