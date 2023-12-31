import React from "react";
import Navbar from "../navbar/Navbar";
import H1tag from '../common/H1tag'
import contactPageassBanner from '../../assets/contactPageassBanner.png'


function ContactHeader() {
  const cSyleHeader = {
    backgroundImage: `url(${contactPageassBanner})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize:"cover",
    height: "38rem",
    width:"100%",
  };
  const headerCName = "W-100";
  const headerText = "contact us";
  const textCName = "text-uppercase text-light fs-1 ff-m fw-bolder text-center";

  return (
    <>
      <div style={cSyleHeader} className={headerCName}>
        <Navbar />
        <div className="container p-2" style={{ marginTop: "25%" }}>
          <H1tag header_text={headerText} className={textCName} />
        </div>
      </div>
    </>
  );
}

export default ContactHeader;
