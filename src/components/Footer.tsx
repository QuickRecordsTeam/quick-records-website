import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer id="footer" className="footer light-background">
        <div className="container footer-top">
          <div className=" gy-4 d-flex justify-content-between">
            <div className="footer-about">
              <a href="/" className="logo d-flex align-items-center">
                <span className="sitename">
                  <span className="app-name-one">
                    <img src="/img/logo.png" alt="web application logo"></img>
                    Quick<span className="app-name-two">Records</span>
                  </span>
                </span>
              </a>
              <div className="footer-contact pt-3">
                <p>P.O. Box 280 Buea, Southwest Region</p>
                <p>Cameroon</p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>+237 673660071</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>quickrec93@gmail.com</span>
                </p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href="">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61578903479265">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/company/quickrecords/about">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div className=" footer-links ">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#about">Home</a>
                </li>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#faq">FAQs</a>
                </li>
                <li>
                  <a href="#">Terms of service</a>
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
