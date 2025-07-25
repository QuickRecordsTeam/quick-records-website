import React, { Fragment, useRef, useState } from "react";
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

  const navRef = useRef<HTMLAnchorElement>(null);
  const demoBtnRef = useRef<HTMLAnchorElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const showMobileMenu = () => {
    navRef.current?.classList.add("d-none");
  };

  const showMobileMenuBars = () => {
    navRef.current?.classList.add("d-block");
    navRef.current?.classList.remove("d-xl-none");
    navRef.current?.classList.remove("d-none");
  };
  const handleActiveNavLink = (e: NavLink) => {
    setCurrentActiveLink(e);
    buttonRef.current?.click();
    const currentLocation = window.location.origin.replaceAll("#", "");
    window.location.href = `${currentLocation}${e.href}`;
  };
  return (
    <Fragment>
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <a
            href="/"
            className="logo d-flex align-items-center me-auto me-xl-0"
          >
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
            <i
              className="mobile-nav-toggle d-xl-none bi bi-list"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              onClick={() => showMobileMenu()}
              ref={navRef}
            ></i>
          </nav>

          <a className="btn-getstarted" href="#contact" ref={demoBtnRef}>
            Live Demo
          </a>
        </div>

        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <span>
              <a
                href="/"
                className="logo d-flex align-items-center me-auto me-xl-0"
              >
                <img src="/img/logo.png" alt="web application logo"></img>
                <span className="app-name-one">
                  Quick<span className="app-name-two">Records</span>
                </span>
              </a>
            </span>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              ref={buttonRef}
              onClick={() => showMobileMenuBars()}
            ></button>
          </div>
          <div className="offcanvas-body">
            <nav id="navmenu" className="navmenu-mobile">
              <ul>
                {navLinks.map((e) => (
                  <li key={e.id}>
                    <a
                      href={e.href}
                      data-bs-dismiss="offcanvas"
                      className={e.id == currentActiveLink.id ? "active" : ""}
                      onClick={() => handleActiveNavLink(e)}
                    >
                      {e.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
