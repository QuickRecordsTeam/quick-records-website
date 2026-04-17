import { Fragment } from "react";

export const BalanceSheet = () => {
  return (
    <Fragment>
      <section
        id="features"
        className="services section light-background tutorials"
      >
         
        <div className="container section-title" data-aos="fade-up">
          <h2>Balance Sheet</h2>
          <p>
            Gain a comprehensive, real-time overview of your organization's
            financial health by visualizing the balance between assets,
            liabilities, and equity.
            <br />
            <b>Instant Accuracy: </b>Automatically aggregates validated income,
            expenditures, and savings to provide an up-to-date financial
            snapshot.
            <br />
            <b>Financial Position: </b>Easily compare total contributions and
            sponsorships against project spending and operational costs.
            <br />
            <b>Audit-Ready: </b>Generate professional summaries that ensure
            transparency and accountability for stakeholders and members.
          </p>
        </div>

        <section id="portfolio" className="portfolio section">
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
                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-web">
                  <h3>Step 1: Login to Your Account</h3>

                  <ul>
                    <li>
                      <span>
                        Click on the <b>Log In</b> button to navigate to the
                        login page.
                      </span>
                    </li>
                    <li>
                      <span>Fill in all the required fields in the form</span>
                    </li>
                    <li>
                      <span>
                        Click on <b>Login</b> to complete the login process and
                        start using QuickRecords.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="portfolio-image">
                      <img
                        src="/img/authentication/login.png"
                        className="img-fluid"
                        alt=""
                        loading="lazy"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>

              <hr />
              <div
                className="row g-4 isotope-container"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-web">
                  <h3>Step 2: Balance Sheet</h3>
                  <ul>
                    <li>
                      <span>
                        Click on the <b>Balance Sheet</b> tab on the left
                        sidebar to navigate to the balance sheet page.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="portfolio-image">
                      <img
                        src="/img/balance_sheet/balance_sheet.png"
                        className="img-fluid"
                        alt=""
                        loading="lazy"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div
                className="row g-4 isotope-container"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-web">
                  <h3>Step 3: Generate Balance Sheets</h3>

                  <ul>
                    <li>
                      <span>
                        Select a year whose balance sheet you want to generate
                      </span>
                    </li>
                    <li>
                      <span>
                        Click <b>Generate Balance Sheet</b> button to preview
                        the results
                      </span>
                    </li>
                    <li>
                      <span>
                        Click <b>Print</b> get a PDF document of the result
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="">
                      <img
                        src="/img/balance_sheet/balance_sheet_preview.png"
                        className="img-fluid"
                        alt=""
                        loading="lazy"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </Fragment>
  );
};
