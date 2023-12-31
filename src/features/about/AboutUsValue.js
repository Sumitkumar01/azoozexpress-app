import React from "react";
import H2tag from "../common/H2tag";
import ImgTag from "../common/ImgTag";
import Aboutasset3 from "../../assets/Aboutasset3.png"


function AboutUsValue() {
  const heading = "Our Values";
  const description =
    "At Azooz Express We Guarantee Safe And Timely Delivery While Prioritizing Your Needs Through Innovative Solutions Backed By Transparent Communication And Excellence";
  const imgUrl =Aboutasset3;
  const altText = "";

  //   ------- class name -------///
  const headerCName =
    "fw-bold fs-1 text-red p-0 text-center text-lg-start text-md-start";
  const descriptionCname =
    "ff-p fs-6 fw-midum text-dark text-center text-lg-start lh-base text-wrap text-md-start";
  ///----------end------------///

  const cStyle = {
    width: "20.063rem",
    heigh: "18.375rem",
  };

  return (
    <div className="bg-warning">
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-8 col-md-7 col-sm-12 my-5">
            <div className="row flex-column py-2 mx-5">
              <div className="col-12 mb-1 p-0 ">
                <H2tag header_text={heading} className={headerCName} />
              </div>
              <div className="col-12 mt-1 p-0 ">
                <H2tag header_text={description} className={descriptionCname} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-12 p-2 d-flex justify-content-center">
            <div style={cStyle}>
              <ImgTag img_url={imgUrl} alt_text={altText} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsValue;
