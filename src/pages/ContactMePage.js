import React, { Component } from 'react';


class ContactMePage extends Component {
  render() {
    return (
      <div>
       
        <section className="ftco-section contact-section">
          <div className="container mt-5">
            <div className="row d-flex mb-5 contact-info">
              <div className="col-md-12 mb-4">
                <h2 className="h4">Contact details</h2>
              </div>
              <div class="w-100"></div>
              <div class="col-md-3">
                <p>
                  <span>Address:</span> Kampala, Uganda
                </p>
              </div>
              <div class="col-md-3">
                <p>
                  <span>Phone:</span>
                  <a href="tel://1234567890">0775535152</a>
                </p>
              </div>
              <div class="col-md-4">
                <p>
                  <span>Email:</span>
                  <a href="mailto:mimietruddy@gmail.com"> mimietruddy@gmail.com</a>
                </p>
              </div>

            </div>
            <div class="row block-9">
              <div class="col-md-6 pr-md-5">
                <form action="#">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Name"

                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="7"
                      class="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <input
                      type="submit"
                      value="Send"
                      class="btn btn-primary py-3 px-5"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ContactMePage;