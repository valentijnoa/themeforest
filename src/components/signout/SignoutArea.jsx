import React from "react";
import app from "../../firebase";

function SignoutArea() {
  return (
    <section className="contact-area black-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="contact-wrap">
              <div className="contact-title">
                <h2 className="title">
                  <span>Welcome back</span>
                </h2>
              </div>
              <button className="btn" onClick={() => app.auth().signOut()}>
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignoutArea;
