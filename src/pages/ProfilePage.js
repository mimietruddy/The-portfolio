import React, { Component } from 'react';

class ProfilePage extends Component {
  render() {
    return (
      <div>
        <section className="ftco-section about-section">
          <div className="container">
            <div className="row d-flex" data-scrollax-parent="true">
              <div className="col-md-2"></div>
              <div className="col-md-6 wrap ftco-animate">
                <div className="about-desc">
                  <div className="p-5">
                    <h2 className="mb-5">Welcome</h2>
                    <div
                        className="img"
                        style={{ backgroundImage: <img src="https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0" alt="seeds" />}}
                    >seeds</div>
            
                    <p> Hi iam a blogger, welcome to my portfolio. Dont forget to contribute to my page with a blog!
                                        </p>
                    <p><a href="/addblog">Blog+ </a></p>
                    <h5>Reach out now!</h5>
                    <p>Email: <a href="/">mimietruddy@gmail.com</a></p>
                    <p>Phone: <a href="/">0775535152</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ProfilePage;