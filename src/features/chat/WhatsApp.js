import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

function WhatsApp() {

  return (
    <>
      <div
        className="fixed-bottom  right-0 p-3"
        style={{ zIndex: "6", left: "initial" }}
      >
       

        <Link
          to="https://wa.me/9756143731"
          target="_blank"
          className="whatsapp-button"
          
        >
          <FaWhatsapp className="fs-3"/>
        </Link>
      </div>
    </>
  );
}

export default WhatsApp;
