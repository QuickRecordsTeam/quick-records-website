import { Fragment } from "react";

export const PaymentCategories = () => {
  return (
    <Fragment>
      <section
        id="features"
        className="services section light-background tutorials"
      >
        <div className="container section-title" data-aos="fade-up">
          <h2>Payment Categories</h2>
          <p>
            Manage your organization's payment categories to keep track of different types of transactions and ensure accurate financial reporting.<br/>
            In QuickRecords, a Payment Category groups related financial activities—such as "Fundraising," "Projects," or "Condolences"—to help you organize incoming funds from donations, supports, or contributions.
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
                  <h3>Step 2: Payment Categories</h3>
                  <ul>
                    <li>
                      <span>
                        Click on the <b>Payment Categories</b> tab on the left
                        sidebar to navigate to the payment categories page.
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
                  <h3>Step 3: Add Category</h3>
                   
                  <ul>
                    <li>
                      <span>
                        Click the <b>Add +</b> button to open the form for adding a new payment category.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="">
                      <img
                        src="/img/payment/add_button.png"
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
                  <h3>Step 4: Add Category Information</h3>
                   
                  <ul>
                    <li>
                      <span>
                       Fill in the required fields in the form
                      </span>
                    </li>
                    <li>
                      <span>
                       Click the <b>Save</b> button to complete the process of adding a new payment category.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="">
                      <img
                        src="/img/payment/add_category_form.png"
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
