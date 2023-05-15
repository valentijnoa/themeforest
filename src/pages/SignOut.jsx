import React from "react";
import Breadcrumb from "../components/signout/Breadcrumb";
import SignoutArea from "../components/signout/SignoutArea";
// import ContactMap from '../components/contact/ContactMap.'
import Footer from "../components/Footer";
import HeaderOne from "../components/header/HeaderOne";

function SignOut() {
  return (
    <>
      <HeaderOne />
      <main>
        {/* <Breadcrumb /> */}
        <SignoutArea />
      </main>
      <Footer />
    </>
  );
}

export default SignOut;
