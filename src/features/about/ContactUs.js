import React from "react";
import H2tag from "../common/H2tag";
import ImgTag from "../common/ImgTag";
import InputTagWButton from "../common/InputTagWButton";

function ContactUs() {
  const heading = "Leave Your Email address and we will reach out to you";
  const imgUrl =
    "https://azoozexpress.com/wp-content/uploads/2023/07/3550585-1-1.png";
  const altText = "";

  const headerCName =
    "text-danger  text-uppercase fs-2 fw-bold ff-m text-lg-start text-center text-md-start animation-fade-up";
  // ***********content-left-container-**************** //
  const pcHolderText = "Enter your email";
  const inpStyle = {};
  const inpType = "email";

  const btType = "submit";
  const btText = "Send";

  // *************className-left-container-**************** //
  const containerDCName = "d-flex flex-column flex-lg-row flex-md-row bg-black rounded-4 p-2";
  const inpCName = "text-white bg-black form-control pe-lg-2 me-lg-2 border-0";
  const btnDivCName = "d-flex justify-content-center aling-item-center mt-2 mt-lg-0 mt-md-0";
  const btCName = "btn btn-danger px-5 mx-3 my-lg-0 my-md-0 my-sm-3";

  // ************************************************** //
  return (
    <div>
      <div className="container mt-3">
        <div className="row mt-5">
          <div className="col-lg-8 col-md-7 col-sm-12 my-lg-5 d-flex ">
            <div className="row flex-column p-1 mx-lg-5 mx-md-0 d-flex justify-content-center aling-item-center">
              <div className="col-12 mb-1 p-0 ">
                <H2tag header_text={heading} className={headerCName} />
              </div>
              <from>
                <div className="col-12 mt-1 p-0 mt-sm-3 mt-lg-0 contact">
                  <InputTagWButton
                    containerDCName={containerDCName}
                    inpCName={inpCName}
                    inpType={inpType}
                    pcHolderText={pcHolderText}
                    inpStyle={inpStyle}
                    btnDivCName={btnDivCName}
                    btCName={btCName}
                    btText={btText}
                    btType={btType}
                  />
                </div>
              </from>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-12 p-2 d-flex justify-content-center aling-item-center">
            <div className="d-flex justify-content-center aling-item-center">
              <ImgTag img_url={imgUrl} alt_text={altText} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
