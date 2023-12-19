import React from "react";
import H2tag from "../common/H2tag";
import ImgTag from "../common/ImgTag";

function TopContainer() {
  const container1Content1 = "Phone";
  const container1Content2 = "+968 22700 070";
  const container2Content1 = "email";
  const container2Content2 = "info@azoozexpress.com";
  const container3Content1 = "location";
  const container3Content2 = "po box 84, postal code 101, sultanate of oman.​";

  const container1Url1 =
    "https://azoozexpress.com/wp-content/uploads/2023/07/Group-84.png";
  const container2Url =
    "https://azoozexpress.com/wp-content/uploads/2023/07/Vector-6.png";
  const container3Url =
    "https://azoozexpress.com/wp-content/uploads/2023/07/Vector-7.png";

  const class1 = "text-uppercase fs-4 fw-bold ff-m text-center m-0";
  const class2 = "text-center ff-p fs-6 m-0";
  const inRclass = "row p-2";
  const inColClass = "col-12 mb-3 p-0";
  const imgDivClass = "text-center imgDivH";

  return (
    <div>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <div className={inRclass}>
              <div className={inColClass}>
                <div className={imgDivClass}>
                  <ImgTag img_url={container1Url1} alt_text={"phone"} />
                </div>
              </div>
              <div className={inColClass}>
                <H2tag header_text={container1Content1} className={class1} />
              </div>
              <div className={inColClass}>
                <H2tag header_text={container1Content2} className={class2} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className={inRclass}>
              <div className={inColClass}>
                <div className={imgDivClass}>
                  <ImgTag img_url={container2Url} alt_text={"phone"} />
                </div>
              </div>
              <div className={inColClass}>
                <H2tag header_text={container2Content1} className={class1} />
              </div>
              <div className={inColClass}>
                <H2tag header_text={container2Content2} className={class2} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className={inRclass}>
              <div className={inColClass}>
                <div className={imgDivClass}>
                  <ImgTag img_url={container3Url} alt_text={"phone"} />
                </div>
              </div>
              <div className={inColClass}>
                <H2tag header_text={container3Content1} className={class1} />
              </div>
              <div className={inColClass}>
                <H2tag header_text={container3Content2} className={class2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopContainer;
