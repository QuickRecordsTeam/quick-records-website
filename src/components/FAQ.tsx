import React, { Fragment, useState } from "react";

interface FrequentlyAskedQuestions {
  id: number;
  status: boolean;
  title: string;
  description: string;
}
const FAQ = () => {
  const [isActive, setActive] = useState(false);
  const [faqs, setFaqs] = useState<FrequentlyAskedQuestions[]>([
    {
      id: 1,
      status: true,
      title: "Vivamus suscipit tortor eget felis porttitor volutpat?",
      description:
        "Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt.",
    },
    {
      id: 2,
      status: false,
      title: "Curabitur aliquet quam id dui posuere blandit?",
      description:
        "Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt.",
    },
    {
      id: 3,
      status: false,
      title: "Sed porttitor lectus nibh ullamcorper sit amet?",
      description:
        "Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt.",
    },
    {
      id: 4,
      status: false,
      title: "Nulla quis lorem ut libero malesuada feugiat?",
      description:
        "Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt.",
    },
  ]);

  const toggleStatus = (faq: FrequentlyAskedQuestions) => {
    const originalFaq = [...faqs];
    originalFaq.map((e) => (e.status ? (e.status = false) : e));

    originalFaq.map((e) => (e.id == faq.id ? (e.status = true) : e));

    setFaqs(originalFaq);
  };

  const handleSendEmail = () => {
    const recipient = "info@quickrecords.com";
    const subject = "Inquiry about the QuickRecords Platform";
    const body = "Please provide the body of your mail";

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  const handlerSendWhatsAppMsg = () => {
    const phoneNumber = "+237673660071";
    const message = "I want to learn more about the QuickRecords platform";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  const handleMakeCall = () => {
    const phoneNumber = "+237673660071";
    const telURL = `tel:${phoneNumber}`;
    window.location.href = telURL;
  };
  return (
    <Fragment>
      <section id="faq" className="faq section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-5">
            <div className="col-lg-6" data-aos="zoom-out" data-aos-delay="200">
              <div className="faq-contact-card">
                <div className="card-icon">
                  <i className="bi bi-question-circle"></i>
                </div>
                <div className="card-content">
                  <h3>Still Have Questions?</h3>
                  <p>
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Donec velit neque, auctor
                    sit amet aliquam vel, ullamcorper sit amet ligula.
                    Vestibulum ac diam sit amet quam vehicula elementum.
                  </p>
                  <div className="contact-options">
                    <a
                      className="contact-option"
                      onClick={() => handleSendEmail()}
                    >
                      <i className="bi bi-envelope"></i>
                      <span>Email Support</span>
                    </a>
                    <a
                      className="contact-option"
                      onClick={() => handlerSendWhatsAppMsg()}
                    >
                      <i className="bi bi-whatsapp"></i>
                      <span>WhatsApp</span>
                    </a>
                    <a
                      className="contact-option"
                      onClick={() => handleMakeCall()}
                    >
                      <i className="bi bi-telephone"></i>
                      <span>Call Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div className="faq-accordion">
                {faqs.map((e) => (
                  <div
                    className={e.status ? "faq-item faq-active" : "faq-item"}
                    key={e.id}
                  >
                    <div className="faq-header" onClick={() => toggleStatus(e)}>
                      <h3>{e.title}</h3>
                      <i className="bi bi-chevron-down faq-toggle"></i>
                    </div>
                    <div className="faq-content">
                      <p>{e.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default FAQ;
