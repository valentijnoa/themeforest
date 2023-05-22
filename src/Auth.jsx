import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import FetchData from "./FetchData";
import { Routes, Route, useNavigate } from "react-router";
import Footer from "./components/Footer";
import HeaderOne from "./components/header/HeaderOne";

const Auth = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  const navigate = useNavigate();

  const navigateToFetchedData = () => {
    navigate("/fetchdata");
  };

  return (
    <>
      <HeaderOne />
      <section className="contact-area black-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="contact-wrap">
                <div className="contact-title">
                  <div>
                    {authUser ? (
                      <>
                        <h2 className="title">{`Signed In as ${authUser.email}`}</h2>
                        <button className="btn" onClick={userSignOut}>
                          Sign Out
                        </button>{" "}
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <button className="btn" onClick={navigateToFetchedData}>
                          Show games
                        </button>
                      </>
                    ) : (
                      <h2 className="title">Signed Out</h2>
                    )}

                    <Routes>
                      <Route path="/fetchdata" element={<FetchData />} />
                    </Routes>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Auth;
