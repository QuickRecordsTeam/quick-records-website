import { Fragment } from "react";

export const ReportGeneration = () => {
  return (
    <Fragment>
      <section
        id="features"
        className="services section light-background tutorials"
      >
        <div className="container section-title" data-aos="fade-up">
          <h2>Report Generation</h2>
          <p>
            Generate detailed, professional insights into your organization’s
            performance with customizable reporting tools.
            <br />
            <b>Comprehensive Summaries: </b>View a complete breakdown of
            memberships, contributions, and expenditures in one place.
            <br />
            <b>Filter-Driven Data: </b>Customize reports based on specific
            sessions, categories, or payment items to find exactly what you
            need.
            <br />
            <b>Validation-Locked: </b>Ensures 100% accuracy by only including
            data that has been officially verified by leadership.
            <br />
            <b>Exportable Formats: </b>Instantly convert your data into PDF
            documents for printing, sharing, or official record-keeping.
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
                  <h3>Step 2: Report Generation</h3>
                  <ul>
                    <li>
                      <span>
                        Click on the <b>Report Generation</b> tab on the left
                        sidebar to navigate to the report generation page.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="portfolio-image">
                      <img
                        src="/img/reports/report_tab.png"
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
                  <h3>Step 3: Generate Reports</h3>
                  <p className="fst-italic">
                    Tip1: Tailor your financial insights by generating reports that align with your organization’s specific needs and timelines. <br/>
                    Tip2: Generate data for individual payment items to track the success of specific activities. <br/>
                    Tip3: Choose from Quarterly, Mid-Year, or Annual reports to review performance over set intervals. <br/>
                    Tip4: Easily evaluate financial trends and progress across different phases of your organization's calendar.
                  </p>
                  <ul>
                    <li>
                      <span>
                        Select a type of report to generate
                      </span>
                    </li>
                    <li>
                      <span>
                       For activity reports, select the payment item, or select the quarter or year
                      </span>
                    </li>
                    <li>
                      <span>
                        Click <b>Generate Report</b> generate and preview the report
                      </span>
                    </li>
                    <li>
                      <span>
                        Click <b>Print</b> get a PDF document of the report
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="">
                      <img
                        src="/img/reports/report_preview.png"
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
