import React from "react";
import Breadcrumb from "../components/login/Breadcrumb";
import LoginArea from "../components/login/LoginArea";
// import ContactMap from '../components/contact/ContactMap.'
import Footer from "../components/Footer";
import HeaderOne from "../components/header/HeaderOne";

function LogIn() {
  return (
    <>
      <HeaderOne />
      <main>
        {/* <Breadcrumb /> */}
        <LoginArea />
      </main>
      <Footer />
    </>
  );
}

export default LogIn;
