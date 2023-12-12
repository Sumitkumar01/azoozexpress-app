import React from "react";
import ContactHeader from "../features/contact/ContactHeader";
import TopContainer from "../features/contact/TopContainer"
import MiddleContainer from "../features/contact/MiddleContainer";
import LastContainer from "../features/contact/LastContainer";
import Footer from "../features/footer/Footer"

function ContactPage() {
  return (
    <>
      <ContactHeader />
      <TopContainer />
      <MiddleContainer />
      <LastContainer />
      <Footer />
    </>
  );
}

export default ContactPage;
