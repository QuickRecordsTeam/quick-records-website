import { Fragment } from "react";

export const ExpenditureItems = () => {
  return (
    <Fragment>
      <section
        id="features"
        className="services section light-background tutorials"
      >
        <div className="container section-title" data-aos="fade-up">
          <h2>Expenditure Items</h2>
          <p>
            QuickRecords allows you to manage and track specific costs
            associated with activities like hall construction, end-of-year
            events, or family condolences. This ensures precise financial
            reporting by linking every expense to a specific payment item
            (activity). Expenditure Items are grouped under Expenditure
            Categories to keep different transaction types organized. It
            provides a clear overview of how funds are being utilized across
            various organizational projects.
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
                  <h3>Step 2: Expenditure Categories</h3>
                  <ul>
                    <li>
                      <span>
                        Click on the <b>Expenditure Categories</b> tab on the
                        left sidebar to navigate to the expenditure categories
                        page.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="portfolio-image">
                      <img
                        src="/img/payment/payment_category_tab.png"
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
                  <h3>Step 3: View Expenditure Item</h3>
                  <ul>
                    <li>
                      <span>
                        Click the <b>View Expenditure Items</b> button to view
                        all the expenditure items under a specific expenditure
                        category.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="">
                      <img
                        src="/img/expenditure/view_expenditure_items.png"
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
                  <h3>Step 4: Add Expenditure Item</h3>
                  <ul>
                    <li>
                      <span>
                        Click the <b>Add +</b> button an expenditure items under
                        a specific expenditure category.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="">
                      <img
                        src="/img/expenditure/add_expenditure_btn.png"
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
                  <h3>Step 5: Fill Expenditure Item Information</h3>
                  <ul>
                    <li>
                      <span>Fill in the required fields in the form</span>
                    </li>
                    <li>
                      <span>
                        Click the <b>Save</b> button to complete the process of
                        adding a new expenditure item.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="">
                      <img
                        src="/img/expenditure/add_expenditure_item_form.png"
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
                  <h3>Step 6: Validate Expenditure Item</h3>
                  <p className="fst-italic">
                    In QuickRecords, validation follows a strict hierarchy to
                    ensure financial integrity. An Expenditure Item cannot be
                    finalized until every one of its underlying Expenditure Item
                    Details has been verified.
                    <br /> Tip1: Only the Admin, President, or Treasurer has the
                    authority to validate these records.
                    <br />
                    <b>The Workflow: </b><br/>1. Validate all individual Expenditure Item
                    Details (the specific costs).
                    <br />
                    2. Once all details are cleared, the parent Expenditure Item
                    becomes eligible for validation. <br />
                    Tip3: Completion of this process ensures the data is
                    accurate, confirmed by leadership, and ready for official
                    reporting.
                  </p>
                  <ul>
                    <li>
                      <span>
                        Click either <b>Approve</b> button or <b>Decline</b>{" "}
                        button to validate an expenditure item.
                      </span>
                    </li>
                  
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="">
                      <img
                        src="/img/expenditure/confirm_expenditure.png"
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
                  <h3>Step 5.1: Approve Expenditure Item</h3>
                  <ul>
                    <li>
                      <span>
                        Click the <b>Approve</b> button approve an expenditure
                        item
                      </span>
                    </li>
                     <li>
                      <span>
                       Once approve select a filter criteria and click <b>Filter</b> to see the validated results
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="">
                      <img
                        src="/img/expenditure/approve_item.png"
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
                  <h3>Step 5.2: Decline Income Active</h3>

                  <ul>
                    <li>
                      <span>
                        Click the <b>Decline</b> button decline an expenditure
                        item
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="">
                      <img
                        src="/img/expenditure/decline_item.png"
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
                  <h3>Update Expenditure Item (optional)</h3>
                  <ul>
                    <li>
                      <span>
                        Click on the menu icon to <b>View</b>, <b>Edit</b> or{" "}
                        <b>Delete</b> a expenditure item.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="">
                      <img
                        src="/img/expenditure/view_expenditure_item.png"
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
