import React, { useCallback } from "react";
import withRouter from "../../withRouter";
import app from "../../firebase";

const SignupArea = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <section className="contact-area black-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="contact-wrap">
              <div className="contact-title">
                <h2 className="title">
                  <span>Sign Up</span>
                </h2>
              </div>
              <form onSubmit={handleSignUp} classname="contact-form">
                <div className="form-grp">
                  <label>
                    Email<span>*</span>
                    <input
                      name="email"
                      id="name"
                      type="email"
                      placeholder="Email"
                    />
                  </label>
                </div>
                <div className="form-grp">
                  <label>
                    Password<span>*</span>
                    <input
                      name="password"
                      id="email"
                      type="password"
                      placeholder="Password"
                    />
                  </label>
                </div>
                <button className="btn" type="submit">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default withRouter(SignupArea);
