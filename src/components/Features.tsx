import { Fragment } from "react";

const Features = () => {
  return (
    <Fragment>
      <section id="features" className="services section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Features</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
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
                  <i className="bi bi-code-slash"></i>
                </div>
                <div className="service-content">
                  <h3>User Maanagement</h3>
                  <p>
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                    sem. Nulla quis lorem ut libero malesuada feugiat. Curabitur
                    non nulla sit amet nisl tempus convallis. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-left" data-aos-delay="100">
              <div className="service-item">
                <div className="service-icon">
                  <i className="bi bi-phone-fill"></i>
                </div>
                <div className="service-content">
                  <h3>Income Management</h3>
                  <p>
                    Praesent sapien massa, convallis a pellentesque nec, egestas
                    non nisi. Vivamus magna justo, lacinia eget consectetur sed.
                    Quisque velit nisi, pretium ut lacinia in, elementum id
                    enim. Donec rutrum congue leo eget malesuada.
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
                  <i className="bi bi-palette2"></i>
                </div>
                <div className="service-content">
                  <h3>Expenditure Management</h3>
                  <p>
                    Pellentesque in ipsum id orci porta dapibus. Proin eget
                    tortor risus. Vivamus suscipit tortor eget felis porttitor
                    volutpat. Vestibulum ac diam sit amet quam vehicula
                    elementum sed sit amet dui.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-left" data-aos-delay="200">
              <div className="service-item">
                <div className="service-icon">
                  <i className="bi bi-bar-chart-line"></i>
                </div>
                <div className="service-content">
                  <h3>User Contributions</h3>
                  <p>
                    Donec rutrum congue leo eget malesuada. Mauris blandit
                    aliquet elit, eget tincidunt nibh pulvinar a. Nulla
                    porttitor accumsan tincidunt. Curabitur aliquet quam id dui
                    posuere blandit.
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
                  <i className="bi bi-cloud-check"></i>
                </div>
                <div className="service-content">
                  <h3>Reports and Statistics</h3>
                  <p>
                    Curabitur aliquet quam id dui posuere blandit. Sed porttitor
                    lectus nibh. Vivamus magna justo, lacinia eget consectetur
                    sed, convallis at tellus. Nulla quis lorem ut libero
                    malesuada feugiat.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-left" data-aos-delay="300">
              <div className="service-item">
                <div className="service-icon">
                  <i className="bi bi-shield-lock"></i>
                </div>
                <div className="service-content">
                  <h3>Balance Sheets</h3>
                  <p>
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit
                    amet dui. Donec sollicitudin molestie malesuada. Curabitur
                    arcu erat, accumsan id imperdiet et. Proin eget tortor
                    risus.
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
