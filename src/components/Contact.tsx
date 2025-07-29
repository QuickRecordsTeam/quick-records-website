import React, { Fragment, useRef } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { ContactService } from "../services/contact-service";

const schema = z.object({
  name: z
    .string({ invalid_type_error: "The name field is required" })
    .min(3, { message: "The name field must have at least three characters" })
    .max(255, { message: "The name field must have at most 255 character" }),
  email: z.string({ invalid_type_error: "The email field is required" }),
  phone: z
    .string({
      invalid_type_error: "The phone number field is required",
    })
    .regex(/^\+?[1-9]\d{1,14}$/, {
      message: "Please provide a valid phone number (+237xxxxxxxxx)",
    }),
  message: z
    .string({ invalid_type_error: "Please provide a message" })
    .max(1000, {
      message: "The message field must not be more than 1000 characters",
    }),
});

type ContactFormData = z.infer<typeof schema>;
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(schema) });
  const contactService = new ContactService();
  const loadingRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const handleOnSubmit = (data: FieldValues) => {
    loadingRef.current?.classList.add("d-block");
    contactService
      .sendMessage({
        name: data.name,
        email: data.email,
        message: data.message,
        phone: data.phone,
      })
      .then((res) => {
        successRef.current?.classList.add("d-block");
      })
      .catch((error) => {
        errorRef.current?.classList.add("d-block");
      })
      .finally(() => {
        reset();
        loadingRef.current?.classList.remove("d-block");
      });
  };
  return (
    <Fragment>
      <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>
            Schedule a session now and let's create a tailor-fit solution for
            your organisation or group
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 mb-5">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="info-card">
                <div className="icon-box">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <h3>Our Address</h3>
                <p>P.O. Box 280 Buea, Southwest Region, Cameroon</p>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="info-card">
                <div className="icon-box">
                  <i className="bi bi-telephone"></i>
                </div>
                <h3>Contact Number</h3>
                <p>
                  Mobile: +237 673-660-071
                  <br />
                  Email: quickrec93@gmail.com
                </p>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="info-card">
                <div className="icon-box">
                  <i className="bi bi-clock"></i>
                </div>
                <h3>Opening Hour</h3>
                <p>
                  Monday - Saturday: 9:00 - 18:00
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div
                className="form-wrapper"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <form
                  onSubmit={handleSubmit(handleOnSubmit)}
                  role="form"
                  className="php-email-form"
                >
                  <div className="row">
                    <div className="col-md-4 form-group mt-1">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-person"></i>
                        </span>
                        <input
                          {...register("name")}
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Your name*"
                          required
                        ></input>
                      </div>
                      <div id="nameHelp" className="form-text">
                        {errors.name && (
                          <p className="text-danger">{errors.name.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-4 form-group mt-1">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-envelope"></i>
                        </span>
                        <input
                          {...register("email")}
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email address*"
                          required
                        ></input>
                      </div>
                      <div id="nameHelp" className="form-text">
                        {errors.email && (
                          <p className="text-danger">{errors.email.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-4 form-group mt-1">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-phone"></i>
                        </span>
                        <input
                          {...register("phone")}
                          type="text"
                          className="form-control"
                          name="phone"
                          placeholder="Phone number*"
                          required
                        ></input>
                      </div>
                      <div id="nameHelp" className="form-text">
                        {errors.phone && (
                          <p className="text-danger">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group mt-3">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-chat-dots"></i>
                        </span>
                        <textarea
                          {...register("message")}
                          className="form-control"
                          name="message"
                          rows={6}
                          placeholder="Write a message*"
                          required
                        ></textarea>
                      </div>
                      <div id="nameHelp" className="form-text">
                        {errors.message && (
                          <p className="text-danger">
                            {errors.message.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="my-3">
                      <div className="loading" ref={loadingRef}>
                        Loading
                      </div>
                      <div className="error-message" ref={errorRef}>
                        Ooops! An error occured we could submit your message.
                        Please try again
                      </div>
                      <div className="sent-message" ref={successRef}>
                        Your message has been sent. Thank you!
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit">Submit Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
