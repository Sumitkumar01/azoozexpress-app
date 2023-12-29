import React from "react";
import H2tag from "../common/H2tag";
import H3tag from "../common/H3tag";
import ImgTag from "../common/ImgTag";
import Aboutasset4 from "../../assets/Aboutasset4.png";
import Aboutasset5 from "../../assets/Aboutasset5.png";
import Aboutasset6 from "../../assets/Aboutasset6.png";
import Aboutasset7 from "../../assets/Aboutasset7.png";
import Aboutasset8 from "../../assets/Aboutasset8.png";

function Excellence() {
  //************************top container content*****************////
  const headerText = "We share ";
  const spnText = "excllence in";
  const imgUrlLContainer = Aboutasset4;
  const altText = "";
  const hCName = "fs-1 fw-bolder text-black ff-m text-center text-uppercase";
  const spnCName = "text-red";

  //************************ End *****************////

  // ************************bottom container **************///

  const data = [
    {
      imgUrl: Aboutasset5,
      content:
        "Assist your consignments with proper custom clearance and necessary documentation",
    },
    {
      imgUrl: Aboutasset6,
      content:
        "Storing in the required temperature and security until it's dispatched",
    },
    {
      imgUrl: Aboutasset7,
      content:
        "Assuring next-day delivery within Muscat and 2-3 working days outstation",
    },
    {
      imgUrl: Aboutasset8,
      content:
        "Managing, warehousing, and inventory shipments until the last stop",
    },
  ];

  const style ={
    // textAlign:"justify"
  }
  const contentCName = "fs-6 fw-light ff-p text-dark lh-base m-0";
  const ImgDivCName_l = "d-flex justify-content-center align-items-center  p-2";
  const ImgDivCName = " d-flex justify-content-center align-items-center ";
  return (
    <>
      {/* top container */}
      <div className="container p-0">
        <div className="container m-0 p-2">
          <H2tag
            header_text={headerText}
            span_text_2={spnText}
            className={hCName}
            spanClassName={spnCName}
          />
        </div>
      </div>
      {/* bottom container */}
      <div className="container my-0">
        <div className="row">
          <div className=" col-lg-6 col-md-4 p-2 d-none d-sm-none d-md-block d-lg-block mt-md-5 mt-lg-0">
            <div className={ImgDivCName_l}>
              <ImgTag img_url={imgUrlLContainer} alt_text={altText} />
            </div>
          </div>
          <div className="col-lg-6 col-md-8 col-sm-12  px-1 py-3">
            <div className="row m-0 p-0">
              {data.map((item, i) => (
                <div className="col-12 p-0 m-0" key={i}>
                  <div className="row m-0 p-0">
                    <div className="col-4 p-2 m-0  d-flex justify-content-center align-items-center ">
                      <div className={ImgDivCName}>
                        <ImgTag img_url={item.imgUrl} alt_text={altText} />
                      </div>
                    </div>
                    <div className="col-8 py-1 px-1 d-flex align-items-center">
                      <H3tag h3_text={item.content} className={contentCName} customStyle={style}/>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Excellence;
