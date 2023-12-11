import React, { useState } from "react";
import { Link } from "react-router-dom";
import whatsappsvg from "./assets/what'sapp_svg.svg";

function WhatsApp() {
  const [ show,setShow] =useState(false);

  return (
    <>
      <div
        className="fixed-bottom  right-0 p-3"
        style={{ zIndex: "6", left: "initial" }}
      >
        {show && (<p className="whats_app_text ">WhatsApp us</p>)}

        <Link to="#" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
          <img src={whatsappsvg} alt="#"></img>
        </Link>
      </div>
    </>
  );
}

export default WhatsApp;
