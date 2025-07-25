import { Fragment } from "react";

const Features = () => {
  return (
    <Fragment>
      <section id="features" className="services section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Features</h2>
          <p>
            Unlock the Full Potential of Our Product: Discover Key Features
            Designed to Enhance Efficiency, Boost Productivity, and Simplify
            Your Workflow!
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center g-5">
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="service-item">
                <div className="service-icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="service-content">
                  <h3>User Management</h3>
                  <p>
                    We offer a centralized platform to easily manage all members
                    of your organization or group, tracking their enrollment and
                    registration status.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-left" data-aos-delay="100">
              <div className="service-item">
                <div className="service-icon">
                  <i className="bi bi-currency-dollar"></i>
                </div>
                <div className="service-content">
                  <h3>Income Management</h3>
                  <p>
                    We offer an efficient solution for managing income across
                    various activities and types, featuring a user-friendly
                    interface for data entry and visualization.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="service-item">
                <div className="service-icon">
                  <i className="bi bi-currency-dollar"></i>
                </div>
                <div className="service-content">
                  <h3>Expenditures Management</h3>
                  <p>
                    Struggling to track your expenses? Our Expenditure module
                    offers a seamless solution to monitor spending for each
                    activity, providing clear visualizations of how your income
                    is allocated
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-left" data-aos-delay="200">
              <div className="service-item">
                <div className="service-icon">
                  <i className="bi bi-heart"></i>
                </div>
                <div className="service-content">
                  <h3>Contributions</h3>
                  <p>
                    Let us take the stress out of recording member contributions
                    for various activities. Our contribution module automates
                    this process, offering a user-friendly and collaborative
                    solution, complete with on-demand receipts and reports.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="service-item">
                <div className="service-icon">
                  <i className="bi bi-graph-up"></i>
                </div>
                <div className="service-content">
                  <h3>Reports and Statistics</h3>
                  <p>
                    Eliminate the stress of manual report generation with Excel.
                    Our Reports and Statistics module allows you to create
                    on-demand reports by activity, quarter, or year, and
                    visualize your organization's financial status monthly,
                    empowering informed decision-making.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-left" data-aos-delay="300">
              <div className="service-item">
                <div className="service-icon">
                  <i className="bi bi-file-earmark-text"></i>
                </div>
                <div className="service-content">
                  <h3>Balance Sheets</h3>
                  <p>
                    Our balance sheets offer real-time insights into your
                    organization's financial status, including member
                    contributions, balances, expected income, and expenses. This
                    allows you to forecast your financial position at any
                    moment, enabling effective planning for future projects and
                    finances
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

export default Features;
