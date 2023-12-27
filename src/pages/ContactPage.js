import React, { useEffect } from "react";
import ContactHeader from "../features/contact/ContactHeader";
import TopContainer from "../features/contact/TopContainer"
import MiddleContainer from "../features/contact/MiddleContainer";
import LastContainer from "../features/contact/LastContainer";
import Footer from "../features/footer/Footer"
import WhatsApp from "../features/chat/WhatsApp";
import { useLocation } from "react-router-dom";

function ContactPage() {

  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/azooz-contact-page") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  
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
