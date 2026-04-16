import { Fragment } from "react";

export const OrganisationSetup = () => {
  return (
    <Fragment>
      <section
        id="features"
        className="services section light-background tutorials"
      >
        <div className="container section-title" data-aos="fade-up">
          <h2>Organisation Setup</h2>
          <p>
            To get started with QuickRecords, your first step is to create an
            organization. This acts as your central hub for managing members,
            activities, and financial records in one unified place
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
                  <h3>Step 1: Create Admin Account</h3>

                  <ul>
                    <li>
                      <span>
                        Click on the <b>Get Started</b> button to begin the
                        registration process.
                      </span>
                    </li>
                    <li>
                      <span>Fill in all the required fields in the form</span>
                    </li>
                    <li>
                      <span>
                        Click on the <b>Create an Account</b> button to finalize
                        your registration.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="portfolio-image">
                      <img
                        src="/img/account_setup/create_account_view.png"
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
                  <h3>Step 2: Create Organisation</h3>

                  <ul>
                    <li>
                      <span>
                        Fill all the required fields in the form to create your
                        organization.
                      </span>
                    </li>
                    <li>
                      <span>
                        Click on the <b>Save Organisation</b> button to finalize
                        the creation of your organization.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="portfolio-image">
                      <img
                        src="/img/account_setup/create_org_view.png"
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
                  <h3>Step 3: Activate Subscription</h3>

                  <ul>
                    <li>
                      <span>
                        Click on the <b>Start Trial</b> button to activate a
                        trial package for your organization.
                      </span>
                    </li>
                    <li>
                      <span className="text-red">
                        To ensure uninterrupted access to QuickRecords, it's
                        important to activate your subscription before the trial
                        period ends. Call/WhatsApp <b>+237673660071</b>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="portfolio-image">
                      <img
                        src="/img/account_setup/subscription_view.png"
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
                  <h3>Step 4: Confirm Subscription</h3>

                  <ul>
                    <li>
                      <span>
                        Review your subscription details and click on the{" "}
                        <b>Click here to Login to QuickRecords</b> and start
                        using QuickRecords.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="portfolio-image">
                      <img
                        src="/img/account_setup/confirm_subscription_view.png"
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
                  <h3>Confirm Account (Optional Step)</h3>
                  <p className="fst-italic">
                    In event you stopped the setup process before confirming
                    your subscription, you can always continue the setup process
                    by confirming your account.
                  </p>
                  <ul>
                    <li>
                      <span>
                        Fill in your username and password to confirm your
                        account.
                      </span>
                    </li>
                    <li>
                      <span>
                        Click on the <b>Confirm your account</b> button to
                        continue with the setting up your organisation
                        QuickRecords.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="portfolio-image">
                      <img
                        src="/img/account_setup/confirm_acc_view.png"
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
