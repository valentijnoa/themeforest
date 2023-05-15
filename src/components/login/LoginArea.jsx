import React from "react";

function LoginArea() {
  return (
    <section className="contact-area black-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="contact-wrap">
              <div className="contact-title">
                <h2 className="title">
                  <span>Welcome back</span>LogIn Account
                </h2>
              </div>
              <form action="#" className="contact-form">
                <div className="form-grp">
                  <label htmlFor="name">
                    Username <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="form-grp">
                  <label htmlFor="email">
                    Password <span>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your password"
                  />
                </div>
                <button type="submit" className="btn">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginArea;
