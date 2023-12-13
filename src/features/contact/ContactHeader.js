import React from "react";
import Navbar from "../navbar/Navbar";
import H2tag from "../common/H2tag";

function ContactHeader() {
  const cSyleHeader = {
    backgroundImage: `url(
        'https://azoozexpress.com/wp-content/uploads/2023/07/Rectangle-30-1536x614-1.png'
      )`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
   height:"38rem",
  };
  const headerCName = "";
  const headerText = "contact us";
  const textCName = "text-uppercase text-light fs-1 ff-m fw-bolder text-center";

  return (
    <>
      <div style={cSyleHeader} className={headerCName}>
        <Navbar />
        <div className="container p-2" style={{marginTop:"25%"}}>
          <H2tag header_text={headerText} className={textCName} />
        </div>
      </div>
    </>
  );
}

export default ContactHeader;
