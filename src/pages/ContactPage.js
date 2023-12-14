import React from "react";
import ContactHeader from "../features/contact/ContactHeader";
import TopContainer from "../features/contact/TopContainer"
import MiddleContainer from "../features/contact/MiddleContainer";
import LastContainer from "../features/contact/LastContainer";
import Footer from "../features/footer/Footer"
import WhatsApp from "../features/chat/WhatsApp";

function ContactPage() {
  return (
    <>
      <ContactHeader />
      <TopContainer />
      <MiddleContainer />
      <LastContainer />
      <Footer />
      <WhatsApp/>
    </>
  );
}

export default ContactPage;
