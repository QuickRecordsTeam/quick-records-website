import { Fragment } from "react";

export const InviteCollaborators = () => {
  return (
    <Fragment>
      <section
        id="features"
        className="services section light-background tutorials"
      >
        <div className="container section-title" data-aos="fade-up">
          <h2>Invite Collaborators</h2>
          <p>
            To manage your organization finances effectively, you can invite collaborators via their email addresses. Once they accept the email invitation, they can help you oversee memberships and records.
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
                  <h3>Step 2: Member Management</h3>
                  <ul>
                    <li>
                      <span>
                        Click on the <b>Member Management</b> tab on the left
                        sidebar to navigate to the member management page.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="portfolio-image">
                      <img
                        src="/img/member/member_mgt_tab.png"
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
                  <h3>Step 2: Invite</h3>
                  <p className="fst-italic">
                    Note: The member to be invite <b>Must</b> have an email
                    address that is associated with their QuickRecords account.{" "}
                    <br />
                  </p>
                  <ul>
                    <li>
                      <span>
                        Click on the menu icon to open the dropdown menu for a
                        member.
                      </span>
                    </li>
                    <li>
                      <span>
                        Click on the <b>Invite Member</b> option to view the
                        invite form.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="">
                      <img
                        src="/img/member/edit_member.png"
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
                  <h3>Step 3: Select Role</h3>
                  <p className="fst-italic">
                    Tip: After the invitation has been sent, the invited member
                    will receive an email with a link to accept the invitation
                    and join your organisation on QuickRecords. <br />
                    Once the invited member accepts the invitation and completes
                    the setup, they will be added to your organisation on
                    QuickRecords and you can start managing your members
                    together with your collaborators.
                  </p>
                  <ul>
                    <li>
                      <span>
                        Click on the dropdown menu to select the role of the
                        member you want to invite.
                      </span>
                    </li>
                    <li>
                      <span>
                        Click the <b>Send Invitation</b> button to complete the
                        process of inviting a member.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-graphics">
                  <div className="portfolio-card">
                    <div className="">
                      <img
                        src="/img/member/invite_member.png"
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
