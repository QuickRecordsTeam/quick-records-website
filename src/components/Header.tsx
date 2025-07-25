import React, { Fragment, useState } from "react";
interface NavLink {
  id: number;
  title: string;
  href: string;
}
const Header = () => {
  const [currentActiveLink, setCurrentActiveLink] = useState<NavLink>({
    id: 1,
    title: "Home",
    href: "#about",
  });
  const [navLinks, setNavLinks] = useState<NavLink[]>([
    {
      id: 1,
      title: "Home",
      href: "#about",
    },
    {
      id: 2,
      title: "Features",
      href: "#features",
    },
    {
      id: 3,
      title: "FAQs",
      href: "#faq",
    },
    {
      id: 4,
      title: "Contact",
      href: "#contact",
    },
  ]);
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
              {navLinks.map((e) => (
                <li key={e.id}>
                  <a
                    href={e.href}
                    className={e.id == currentActiveLink.id ? "active" : ""}
                    onClick={() => setCurrentActiveLink(e)}
                  >
                    {e.title}
                  </a>
                </li>
              ))}
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
function useRef<T>(arg0: null): any {
  throw new Error("Function not implemented.");
}
