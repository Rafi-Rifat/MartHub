import React from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-2 py-1">
        {" "}
        {/* Reduced vertical padding */}
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-3">
                {" "}
                {/* Reduced padding to p-3 */}
                <h2 className="text-center mb-2">Get in Touch</h2>{" "}
                {/* Reduced margin bottom */}
                <form>
                  <div className="mb-2">
                    <label htmlFor="Name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="Name"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="Email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      id="Email"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="Message" className="form-label">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="form-control form-control-sm"
                      id="Message"
                      placeholder="Your message"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-primary btn-sm px-3"
                      type="submit"
                      disabled
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-2">
          {" "}
          {/* Reduced margin top */}
          <p>
            Can't wait to hear from you! Contact us at{" "}
            <a href="mailto:rafialsaadrifat@gmail.com">
              rafialsaadrifat@gmail.com
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
