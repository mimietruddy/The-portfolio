import React,{Component} from "react";

class AddBlog extends Component {
  render() {
    return (
      <div>
        <section class="ftco-section addblog-section">
          <div class="container mt-5">
            <div class="row d-flex mb-5 addblog-info">
              <div class="col-md-12 mb-4">
                <h2 class="h4">Contribute to my Portfolio</h2>
              </div>
              <div class="w-100"></div>
              <div class="col-md-3">
                <p>
                  <span>Address:</span> Kampala Uganda
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
                      placeholder="Type your Name"

                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Title"
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="7"
                      class="form-control"
                      placeholder="Write Blog"
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
export default AddBlog;