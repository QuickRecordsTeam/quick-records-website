import { Fragment } from "react";

const HowItWorks = () => {
  return (
    <Fragment>
      <section id="how-we-work" className="how-we-work section">
        <div className="container section-title" data-aos="fade-up">
          <h2>How It Works</h2>
          <p>A Streamlined workflow designed with you in mind.</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="steps-5">
            <div className="process-container">
              <div
                className="process-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="content">
                  <span className="step-number">01</span>
                  <div className="card-body">
                    <div className="step-icon">
                      <i className="bi bi-pencil-square"></i>
                    </div>
                    <div className="step-content">
                      <h3>Organisation Setup</h3>
                      <p>
                        Ready to save time and maximize efficency with a plan
                        built for your needs? Click on the{" "}
                        <b>Get Started button</b>, and pick configure your
                        package and let's get to work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="process-item"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="content">
                  <span className="step-number">02</span>
                  <div className="card-body">
                    <div className="step-icon">
                      <i className="bi bi-gear"></i>
                    </div>
                    <div className="step-content">
                      <h3>Add Collaborators</h3>
                      <p>
                        Invite team members by sending an invite link, and
                        define their roles to ensure has the right level of
                        access.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="process-item"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="content">
                  <span className="step-number">03</span>
                  <div className="card-body">
                    <div className="step-icon">
                      <i className="bi bi-search"></i>
                    </div>
                    <div className="step-content">
                      <h3>Membership Fee Configuration</h3>
                      <p>
                       Define the standard registration cost for new members. This value will be automatically applied to all enrollment records.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="process-item"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="content">
                  <span className="step-number">04</span>
                  <div className="card-body">
                    <div className="step-icon">
                      <i className="bi bi-rocket-takeoff"></i>
                    </div>
                    <div className="step-content">
                      <h3>Log Transactions</h3>
                      <p>
                        Quickly capture your daily financial activity. Keep your
                        records up to date with just a few clicks. All entries
                        will be recorded under your active session.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="process-item"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="content">
                  <span className="step-number">05</span>
                  <div className="card-body">
                    <div className="step-icon">
                      <i className="bi bi-rocket-takeoff"></i>
                    </div>
                    <div className="step-content">
                      <h3>Finalize Records</h3>
                      <p>
                        Give the green light to recorded transactions and keep
                        your books perfectly balanced. Review your pending list
                        and approve entries individually or bulk.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="process-item"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="content">
                  <span className="step-number">06</span>
                  <div className="card-body">
                    <div className="step-icon">
                      <i className="bi bi-rocket-takeoff"></i>
                    </div>
                    <div className="step-content">
                      <h3>Instant Document Generation</h3>
                      <p>
                        Skip the manual calculations. Transform your data into
                        professional receipts, detailed reports, and audit-ready
                        balance sheets in real-time with a single click. Export
                        your reports in PDF for easy sharing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HowItWorks;
