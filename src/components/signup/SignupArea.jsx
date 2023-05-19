import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupArea = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupArea = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="contact-area black-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="contact-wrap">
              <div className="contact-title">
                <h2 className="title">Create account</h2>
                <form onSubmit={signupArea} classname="contact-form">
                  <div className="form-grp">
                    <label>
                      Email <span>*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-grp">
                    <label>
                      Password <span>*</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn">
                    Signup
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignupArea;
