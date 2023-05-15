import React from "react";
import contactUsImage from "../../../components/assets/contact-us-page.png"

function ContactUs() {
  return (
    <div className="container">
      <div className="d-flex justify-content-start">
        <div className="row terms-condition">
          <div className="col-12">
            <h1 className="">Get in touch with us</h1>
            <div className="col-12">
              <hr className="divider" />
            </div>
          </div>
          <div className="col-12 mt-3">
            <div className="card-text">
              <p>
                <strong>Address:</strong> No. 123, Street 456, Sangkat Phnom
                Penh, Khan Phnom Penh, Phnom Penh, Cambodia.
              </p>
              <p>
                <strong>Phone Number:</strong> +855 12 345 678
              </p>
              <p>
                <strong className="me-2">Email: </strong>
                <a href="">rithboth0@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="col-12">
            <hr className="divider" />
          </div>
          <div className="col-12 mt-3">
            <div className="row">
              <div className="col-6 col-md-6 d-none d-lg-block d-xl-block">
                <img src={contactUsImage} alt="" className="img-fluid contact-us-img" />
              </div>
              <div className="col-12 col-lg-6 col-md-12">
                <div className="card-form-contact-us">
                  <form>
                    <div className="mb-3 mx-3 mt-3">
                      <label htmlFor="email" className="form-label mt-3">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="mb-3 mx-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                      />
                    </div>
                    <div className="mb-3 mx-3">
                      <label htmlFor="subject" className="form-label">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                      />
                    </div>
                    <div className="mb-3 mx-3">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="mt-3 mx-3 mb-3">
                      <label className="form-label invisible">label</label>
                      <button type="submit" className="btn btn-submit w-100 mb-3">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
