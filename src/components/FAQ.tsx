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
      title:
        "What Problem does this solution solve in an organisation or group?",
      description:
        "QuickRecords addresses a variety of challenges, including the difficulty of managing financial transactions manually, especially when key personnel are unavailable. It also streamlines the manual generation of reports, reduces delays in presentation, and provides detailed financial statistics.",
    },
    {
      id: 2,
      status: false,
      title:
        "How does it benefit or contribute to the growth of my organisation or group?",
      description:
        "QuickRecords will save time, reduce errors, and enhance accuracy, accountability, and transparency while creating a comprehensive audit trail. The organization will gain a clear, data-driven understanding of member financial engagement, allowing it to identify trends, gain insights, and make informed financial planning decisions. Additionally, it will ensure continuity, prevent bottlenecks caused by the absenteeism of financial officers, and promote collaboration.",
    },
    {
      id: 3,
      status: false,
      title: "How does the Product work?",
      description:
        "As a role-based software, QuickRecords is utilized by four key staff members: an Admin, a President, a Financial Secretary, and a Treasurer. To ensure complete security and controlled access, the Admin begins by configuring roles for collaborators and inviting them onboard. The current session (year) is set up to enable the Financial Secretary to record transactions, or the President can step in if the Financial Secretary is absent. When the Treasurer receives the collections, they can either approve or decline recorded transactions based on the transfer received and the reviewed records and reports. For more inquiries, please contact us or leave us a message.",
    },
    {
      id: 4,
      status: false,
      title: "How is the pricing of the product?",
      description:
        "QuickRecords is software offered as a service to organizations or groups, providing a 30-day free trial. After the trial period, organizations or groups can subscribe for a monthly fee based on the organisation and its size after evaluation. This fee covers the setup of their package, including all features, data migration, updates, and 24/7 support and maintenance.",
    },
    {
      id: 5,
      status: false,
      title:
        "Does the software save money in the organization's or group's bank account?",
      description:
        "No, the current version of this software does not interact with the organization's or group's bank accounts. It only records transaction details.",
    },
    {
      id: 6,
      status: false,
      title:
        "Does the software support online money transactions within the organization?",
      description:
        "No, the current version of this software does not support online money transactions yet. However, users can issue money transactions directly to the organization's accounts. Once the Treasurer confirms the account credit, they can immediately or on-demand print a receipt for the transaction from the software.",
    },
  ]);

  const toggleStatus = (faq: FrequentlyAskedQuestions) => {
    console.log(faq);
    // console.log(...faqs);

    const originalFaq = [...faqs];
    originalFaq.map((e) => (e.status ? (e.status = !e.status) : e));

    originalFaq.map((e) => (e.id === faq.id ? (e.status = !e.status) : e));

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
                    Explore our FAQ section to find quick solutions to common
                    inquiries, or feel free to reach out if you need further
                    assistance
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
