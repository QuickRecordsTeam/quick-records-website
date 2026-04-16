import { Fragment } from "react";
import { WEBSITE_ROUTES } from "../constants/navurl";
import { useNavigate } from "react-router-dom";

export const TutorialList = () => {
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
            tutorials. <br />
            From setting up your account to managing your finances effectively,
            our tutorials cover everything you need to know to get started and
            make the most of QuickRecords. <br />
            Dive in and discover how to streamline your financial management
            today!
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
                onClick={handleAction(WEBSITE_ROUTES.TUTORIAL_ACCOUNT_SETUP)}
              >
                <div className="service-icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="service-content">
                  <h3>Organisation Setup</h3>
                </div>
              </div>
            </div>
             <div
              className="col-md-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div
                className="service-item tutorial-item"
                onClick={handleAction(WEBSITE_ROUTES.TUTORIAL_LOGIN)}
              >
                <div className="service-icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="service-content">
                  <h3>Login</h3>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div
                className="service-item tutorial-item"
                onClick={handleAction(
                  WEBSITE_ROUTES.TUTORIAL_CURRENT_YEAR_SETUP,
                )}
              >
                <div className="service-icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="service-content">
                  <h3>Financial Year Setup</h3>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div
                className="service-item tutorial-item"
                onClick={handleAction(
                  WEBSITE_ROUTES.TUTORIAL_MEMBERSHIP_FEE_SETUP,
                )}
              >
                <div className="service-icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="service-content">
                  <h3>Membership Fee</h3>
                </div>
              </div>
            </div>
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

            <div
              className="col-md-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div
                className="service-item tutorial-item"
                onClick={handleAction(WEBSITE_ROUTES.TUTORIAL_ROLE_MANAGEMENT)}
              >
                <div className="service-icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="service-content">
                  <h3>Role Management</h3>
                </div>
              </div>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div
                className="service-item tutorial-item"
                onClick={handleAction(
                  WEBSITE_ROUTES.TUTORIAL_INVITE_COLLABORATOR,
                )}
              >
                <div className="service-icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="service-content">
                  <h3>Invite Collaborators</h3>
                </div>
              </div>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div
                className="service-item tutorial-item"
                onClick={handleAction(
                  WEBSITE_ROUTES.TUTORIAL_USER_REGISTRATION,
                )}
              >
                <div className="service-icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="service-content">
                  <h3>User Registration</h3>
                </div>
              </div>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div
                className="service-item tutorial-item"
                onClick={handleAction(
                  WEBSITE_ROUTES.TUTORIAL_PAYMENT_CATEGORY_MANAGEMENT,
                )}
              >
                <div className="service-icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="service-content">
                  <h3>Payment Categories</h3>
                </div>
              </div>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div
                className="service-item tutorial-item"
                onClick={handleAction(
                  WEBSITE_ROUTES.TUTORIAL_PAYMENT_ITEM_MANAGEMENT,
                )}
              >
                <div className="service-icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="service-content">
                  <h3>Payment Items</h3>
                </div>
              </div>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div
                className="service-item tutorial-item"
                onClick={handleAction(
                  WEBSITE_ROUTES.TUTORIAL_EXPENDITURE_MANAGEMENT,
                )}
              >
                <div className="service-icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="service-content">
                  <h3>Expenditure Categories</h3>
                </div>
              </div>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div
                className="service-item tutorial-item"
                onClick={handleAction(
                  WEBSITE_ROUTES.TUTORIAL_EXPENDITURE_ITEM_MANAGEMENT,
                )}
              >
                <div className="service-icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="service-content">
                  <h3>Expenditure Items</h3>
                </div>
              </div>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div
                className="service-item tutorial-item"
                onClick={handleAction(
                  WEBSITE_ROUTES.TUTORIAL_EXPENDITURE_ITEM_DETAIL_MANAGEMENT,
                )}
              >
                <div className="service-icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="service-content">
                  <h3>Expenditure Items Details</h3>
                </div>
              </div>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div
                className="service-item tutorial-item"
                onClick={handleAction(
                  WEBSITE_ROUTES.TUTORIAL_INCOME_MANAGEMENT,
                )}
              >
                <div className="service-icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="service-content">
                  <h3>Income Activities</h3>
                </div>
              </div>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div
                className="service-item tutorial-item"
                onClick={handleAction(
                  WEBSITE_ROUTES.TUTORIAL_SPONSHOR_MANAGEMENT,
                )}
              >
                <div className="service-icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="service-content">
                  <h3>Sponsorship Management</h3>
                </div>
              </div>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div
                className="service-item tutorial-item"
                onClick={handleAction(
                  WEBSITE_ROUTES.TUTORIAL_CONTRIBUTION_MANAGEMENT,
                )}
              >
                <div className="service-icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="service-content">
                  <h3>Contribution Management</h3>
                </div>
              </div>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div
                className="service-item tutorial-item"
                onClick={handleAction(
                  WEBSITE_ROUTES.TUTORIAL_REPORT_MANAGEMENT,
                )}
              >
                <div className="service-icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="service-content">
                  <h3>Report Generation</h3>
                </div>
              </div>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div
                className="service-item tutorial-item"
                onClick={handleAction(WEBSITE_ROUTES.TUTORIAL_BALANCE_SHEET)}
              >
                <div className="service-icon">
                  <i className="bi bi-people"></i>
                </div>
                <div className="service-content">
                  <h3>Balance Sheet</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
