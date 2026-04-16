import { Fragment } from "react";

import { useNavigate } from "react-router-dom";
import { WEBSITE_ROUTES } from "../../constants/navurl";

export const UserManagement = () => {
  const navigate = useNavigate();
  const handleAction = (url: string) => () => {
    navigate(url);
  };
  return (
    <Fragment>
      <section
        id="features"
        className="services section light-background tutorials"
      >
        <div className="container section-title" data-aos="fade-up">
          <h2>Tutorials</h2>
          <p>
            Learn how to make the most of QuickRecords with our comprehensive
            tutorials. From setting up your account to managing your finances
            effectively, our tutorials cover everything you need to know to get
            started and make the most of QuickRecords. Dive in and discover how
            to streamline your financial management today!
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center g-5">
            <div
              className="col-md-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div
                className="service-item tutorial-item"
                onClick={handleAction(WEBSITE_ROUTES.TUTORIAL_USER_MANAGEMENT)}
              >
                <div className="service-icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="service-content">
                  <h3>User Management</h3>
                </div>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-left" data-aos-delay="100">
              <div className="service-item tutorial-item">
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
              className="col-md-4"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="service-item tutorial-item">
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

            <div className="col-md-4" data-aos="fade-left" data-aos-delay="200">
              <div className="service-item tutorial-item">
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
              className="col-md-4"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="service-item tutorial-item">
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

            <div className="col-md-4" data-aos="fade-left" data-aos-delay="300">
              <div className="service-item tutorial-item">
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

            <div className="col-md-4" data-aos="fade-left" data-aos-delay="300">
              <div className="service-item tutorial-item">
                <div className="service-icon">
                  <i className="bi bi-clipboard-check"></i>
                </div>
                <div className="service-content">
                  <h3>Logs and Tracability</h3>
                  <p>
                    Our software offers comprehensive logging for every action
                    taken, along with clear identification of the user
                    responsible for each action. This feature enhances
                    accountability and transparency, making it easier to detect
                    and prevent fraudulent activities. By ensuring a reliable
                    audit trail, you can trust that your financial transactions
                    are secure and monitored
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-left" data-aos-delay="300">
              <div className="service-item tutorial-item">
                <div className="service-icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <div className="service-content">
                  <h3>Security and Secure Storage</h3>
                  <p>
                    Our system employs Role-Based Access Control (RBAC) to
                    ensure that only authorized personnel can access sensitive
                    data. Additionally, we implement data encryption mechanisms
                    for secure transmission of information. Our data backup
                    processes ensure that your information is recoverable in the
                    event of an unexpected incident, guaranteeing a smooth
                    workflow and providing peace of mind
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
