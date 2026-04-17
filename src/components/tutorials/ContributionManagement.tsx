import { Fragment } from "react";

export const ContributionManagement = () => {
  return (
    <Fragment>
      <section
        id="features"
        className="services section light-background tutorials"
      >
        <div className="container section-title" data-aos="fade-up">
          <h2>Contributions</h2>
          <p>
            Efficiently track and manage member contributions with automated
            progress monitoring and flexible payment options.
            <br />
            Progress Tracking: Automatically monitors every contribution made
            until the target amount is reached.
            <br />
            Savings Integration: Members can conveniently use their accumulated
            savings to fulfill their contribution requirements. <br />
            Real-time Status: View at a glance who has met their goal and who
            still has outstanding balances.
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
                  <h3>Step 2: Contribution</h3>
                  <ul>
                    <li>
                      <span>
                        Click on the <b>Contribution</b> tab on the left sidebar
                        to navigate to the contribution page.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="portfolio-image">
                      <img
                        src="/img/contribution/contribution_tab.png"
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
                  <h3>Step 3: Add Contribution (Instant Deposite) </h3>
                  <p className="fst-italic">
                    You can add member's contribution using two methods:
                    manually filling out the required information for a cash
                    deposite or use the member's saving to complete the
                    contribution
                  </p>
                  <ul>
                    <li>
                      <span>
                        Click the <b>Add +</b> button add a member's
                        contribution for a particular payment item or activity.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="">
                      <img
                        src="/img/contribution/add_contribution_btn.png"
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
                  <h3>Step 3.1: Choose Enter Contribution</h3>
                  <ul>
                    <li>
                      <span>
                        Select a session to load all payment items for that
                        year.
                      </span>
                    </li>
                    <li>
                      <span>
                        Select the payment item or activity you want to record
                        the contribution
                      </span>
                    </li>
                    <li>
                      <span>
                        Click the <b>Next</b> button to continue the process.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="">
                      <img
                        src="/img/contribution/add_contribution_form_one.png"
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
                  <h3>Step 3.2: Fill Contribution Information</h3>
                  <p className="fst-italic">
                    Tip1: If a member has already completed contribution for a
                    particular payment item, then you no longer add contribution
                    for that member <br />
                    Tip2: For payment Items that are specific to some members,
                    only their names would appear in the drop down field.
                  </p>
                  <ul>
                    <li>
                      <span>Select the Member's Name</span>
                    </li>
                    <li>
                      <span>
                        Click the <b>Save</b> button to complete the process.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="">
                      <img
                        src="/img/contribution/add_contribution_form_two.png"
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
                  <h3>Step 4: Add Contribution (Use Member's Saving) </h3>
                  <ul>
                    <li>
                      <span>
                        Click the <b>Add +</b> button add a member's
                        contribution for a particular payment item or activity.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="">
                      <img
                        src="/img/contribution/add_contribution_btn.png"
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
                  <h3>Step 4.1: Choose Use Saving</h3>
                  <ul>
                    <li>
                      <span>
                        Select a session to load all payment items for that
                        year.
                      </span>
                    </li>
                    <li>
                      <span>
                        Select the payment item or activity you want to record
                        the contribution
                      </span>
                    </li>
                    <li>
                      <span>
                        Click the <b>Next</b> button to continue the process.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="">
                      <img
                        src="/img/contribution/add_contribution_form_one_saving_option.png"
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
                  <h3>Step 4.2: Fill Contribution Information</h3>
                  <p className="fst-italic">
                    Tip1: If a member has already completed contribution for a
                    particular payment item, then you no longer add contribution
                    for that member <br />
                    Tip2: For payment Items that are specific to some members,
                    only their names would appear in the drop down field.
                  </p>
                  <ul>
                    <li>
                      <span>Select the Member's Name</span>
                    </li>
                    <li>
                      <span>
                        Click the <b>Save</b> button to complete the process.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="">
                      <img
                        src="/img/contribution/add_contribution_form_two_saving_option.png"
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
                  <h3>Step 5: Filter and Print Contributions</h3>
                  <ul>
                    <li>
                      <span>
                        Click the <b>Filter</b> button to open the filter page
                      </span>
                    </li>
                    <li>
                      <span>
                        Select a year and the payment item whose contribution
                        you want to view
                      </span>
                    </li>
                    <li>
                      <span>
                        Click the <b>Filter</b> button to filter our
                        contributions
                      </span>
                    </li>
                    <li>
                      <span>
                        Click the <b>Details</b> button to view all
                        contributions of a member for a particular payment item
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="">
                      <img
                        src="/img/contribution/filter_view.png"
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
                  <h3>Step 6: Validate Contribution</h3>
                  <p className="fst-italic">
                    In QuickRecords, validation is a multi-step process that
                    ensures your financial data is accurate and ready for
                    reporting.<br/> Tip1: Once a contribution has been approve by
                    either the <b>Treasurer</b>, <b>President</b> or{" "}
                    <b>Admin</b> it can not be edited again.
                  </p>
                  <ul>
                    <li>
                      <span>
                        Click either <b>Approve</b> button or <b>Decline</b>{" "}
                        button to validate a contribution
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="">
                      <img
                        src="/img/contribution/view_filtered_results.png"
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
                  <h3>Step 6.1: Approve Contribution</h3>

                  <ul>
                    <li>
                      <span>
                        Click the <b>Approve</b> button approve the contribution
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="">
                      <img
                        src="/img/contribution/approve.png"
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
                  <h3>Step 7.2: Decline Contribution</h3>

                  <ul>
                    <li>
                      <span>
                        Click the <b>Decline</b> button decline athe
                        contribution
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="">
                      <img
                        src="/img/contribution/decline.png"
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
                  <h3>Update Contribution(optional)</h3>
                  <p className="fst-italic">
                    Tip1: Once a recorded contribution has been approve by
                    either the <b>Treasurer</b>, <b>President</b> or{" "}
                    <b>Admin</b> it can not be edited again.
                  </p>
                  <ul>
                    <li>
                      <span>
                        Click on the menu icon to <b>View</b>, or <b>Edit</b> a
                        recorded contribution.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="">
                      <img
                        src="/img/contribution/view_contribution.png"
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
