import React from "react";
import Breadcrumb from "../components/signup/Breadcrumb";
import SignupArea from "../components/signup/SignupArea";
// import ContactMap from '../components/contact/ContactMap.'
import Footer from "../components/Footer";
import HeaderOne from "../components/header/HeaderOne";

function SignUp() {
  return (
    <>
      <HeaderOne />
      <main>
        {/* <Breadcrumb /> */}
        <SignupArea />
      </main>
      <Footer />
    </>
  );
}

export default SignUp;
