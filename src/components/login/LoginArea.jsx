import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Routes, Route, useNavigate } from "react-router";
import Auth from "../../Auth";

const LoginArea = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginArea = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/auth");
  };

  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate("/signup");
  };

  return (
    <section className="contact-area black-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="contact-wrap">
              <div className="contact-title">
                <h2 className="title">
                  <span>Welcome back</span>Login to your account
                </h2>
                <form onSubmit={loginArea} classname="contact-form">
                  <div className="form-grp">
                    <label htmlFor="name">
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
                    <label htmlFor="email">
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
                    Login
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button onClick={navigateToSignup} className="btn">
                    Signup
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </section>
  );
};

export default LoginArea;
