import React from "react";
import Navbar from "../navbar/Navbar";
import H2tag from "../common/H2tag";
import contactPageassBanner from '../../assets/contactPageassBanner.png'


function ContactHeader() {
  const cSyleHeader = {
    backgroundImage: `url(${contactPageassBanner})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "38rem",
  };
  const headerCName = "";
  const headerText = "contact us";
  const textCName = "text-uppercase text-light fs-1 ff-m fw-bolder text-center";

  return (
    <>
      <div style={cSyleHeader} className={headerCName}>
        <Navbar />
        <div className="container p-2" style={{ marginTop: "25%" }}>
          <H2tag header_text={headerText} className={textCName} />
        </div>
      </div>
    </>
  );
}

export default ContactHeader;
