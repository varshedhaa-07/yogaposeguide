import React from "react";

const Contact = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Get in Touch</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div
              className="p-4 rounded shadow text-dark"
              style={{
                background: "linear-gradient(145deg, #f5c24aff, #e0ca3aff)",
              }}
            >
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-dark w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
