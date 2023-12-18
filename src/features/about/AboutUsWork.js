import React from "react";
import Ptag from "../common/Ptag";
import H2tag from "../common/H2tag";
import ImgTag from "../common/ImgTag";

function AboutUsWork() {

  const heading = "We values our work as much as our clients";
  const pText_1 =
    "We Understand How Sensitive Packages Are. We Know How Tiring Moving Can Be.";
    const pText_2= "So We Are Here To Help You Always"
  const imgUrl =
    "	https://azoozexpress.com/wp-content/uploads/2023/07/ss-1-1-1.png";
  const altText = "";

  const headerCName =
    "text-danger  text-uppercase fs-2 fw-bold ff-m text-lg-start text-center text-md-start animation-fade-up";
  const pCName =
    "text-dark fs-6 ff-p text-lg-start text-center text-md-start animation-fade-from-right";

  

  return (
    <div className="bg-warning">
      <div className="container ">
        <div className="row">
          <div className="col-lg-8 col-md-7 col-sm-12 my-5">
            <div className="row flex-column p-2 mx-5">
              <div className="col-12 mb-1 p-0 ">
                <H2tag header_text={heading} className={headerCName} />
              </div>
              <div className="col-12 mt-1 p-0 ">
                <Ptag pCName={pCName} ptext={pText_1} />
                <Ptag pCName={pCName} ptext={pText_2} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-12 p-2 d-flex justify-content-center aling-item-center d-none d-sm-none d-md-block d-lg-block">
            <div className="d-flex justify-content-center aling-item-center">
              <ImgTag img_url={imgUrl} alt_text={altText} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsWork;
