import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

function WhatsApp() {

  return (
    <>
      

        <Link
          to="https://wa.me/+96896586404"
          target="_blank"
          className="whatsapp-button"
          
        >
          <FaWhatsapp className="fs-1"/>
        </Link>
    </>
  );
}

export default WhatsApp;
