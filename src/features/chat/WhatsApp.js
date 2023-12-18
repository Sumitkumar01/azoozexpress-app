import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

function WhatsApp() {

  return (
    <>
      

        <Link
          to="https://wa.me/9756143731"
          target="_blank"
          className="whatsapp-button"
          
        >
          <FaWhatsapp className="fs-3"/>
        </Link>
    </>
  );
}

export default WhatsApp;
