import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <a
            href="index.html"
            className="logo d-flex align-items-center me-auto me-xl-0"
          >
            {/* Uncomment the line below if you also wish to use an image logo   */}
            <img src="/img/logo.png" alt="web application logo"></img>
            <h1>
              <span className="app-name-one">
                Quick<span className="app-name-two">Records</span>
              </span>
            </h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="#hero" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#faq">FAQs</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <a className="btn-getstarted" href="#contact">
            Live Demo
          </a>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
