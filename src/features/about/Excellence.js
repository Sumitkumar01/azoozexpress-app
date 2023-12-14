import React from "react";
import H2tag from "../common/H2tag";
import H3tag from "../common/H3tag";
import ImgTag from "../common/ImgTag";

function Excellence() {
  //************************top container content*****************////
  const headerText = "We share ";
  const spnText = "excllence in";
  const imgUrlLContainer =
    "https://azoozexpress.com/wp-content/uploads/2023/07/Picture-2-290x300.png";
  const altText = "";
  const hCName = "fs-1 fw-bolder text-black ff-m text-center text-uppercase";
  const spnCName = "text-danger";

  //************************ End *****************////

  // ************************bottom container **************///
  const content_1 =
    "Assist your consignments with proper custom clearance and necessary documentation";
  const content_2 =
    "Storing in the required temperature and security until it's dispatched";
  const content_3 =
    "Assuring next-day delivery within Muscat and 2-3 working days outstation";
  const content_4 =
    "Managing, warehousing, and inventory shipments until the last stop";

  const imgUrl_1 =
    "https://azoozexpress.com/wp-content/uploads/2023/07/Group-1-1.png";
  const imgUrl_2 =
    "https://azoozexpress.com/wp-content/uploads/2023/07/Group-200-1.png";
  const imgUrl_3 =
    "https://azoozexpress.com/wp-content/uploads/2023/07/Group-3.png";
  const imgUrl_4 =
    "https://azoozexpress.com/wp-content/uploads/2023/07/Vector-9.png";

  const contentCName = "fs-6 fw-light ff-p text-dark lh-lg m-sm-0";
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
          <div className="col-lg-6 col-md-8 col-sm-12  p-1 ">
            <div className="row m-0 p-0">
              <div className="col-12 p-0 m-0">
                <div className="row m-0 p-0">
                  <div className="col-4 p-2 m-0  d-flex justify-content-center align-items-center ">
                    <div className={ImgDivCName}>
                      <ImgTag img_url={imgUrl_1} alt_text={altText} />
                    </div>
                  </div>
                  <div className="col-8 p-1">
                    <H3tag h3_text={content_1} className={contentCName} />
                  </div>
                </div>
              </div>

              <div className="col-12 p-0 m-0">
                <div className="row m-0 p-0">
                  <div className="col-4 p-2 m-0  d-flex justify-content-center align-items-center ">
                    <div className={ImgDivCName}>
                      <ImgTag img_url={imgUrl_2} alt_text={altText} />
                    </div>
                  </div>
                  <div className="col-8 p-1">
                    <H3tag h3_text={content_2} className={contentCName} />
                  </div>
                </div>
              </div>

              <div className="col-12 p-0 m-0">
                <div className="row m-0 p-0">
                  <div className="col-4 p-2 m-0  d-flex justify-content-center align-items-center ">
                    <div className={ImgDivCName}>
                      <ImgTag img_url={imgUrl_3} alt_text={altText} />
                    </div>
                  </div>
                  <div className="col-8 p-1">
                    <H3tag h3_text={content_3} className={contentCName} />
                  </div>
                </div>
              </div>

              <div className="col-12 p-0  m-0">
                <div className="row  m-0 p-0">
                  <div className="col-4 p-2 m-0  d-flex justify-content-center align-items-center ">
                    <div className={ImgDivCName}>
                      <ImgTag img_url={imgUrl_4} alt_text={altText} />
                    </div>
                  </div>
                  <div className="col-8 p-1">
                    <H3tag h3_text={content_4} className={contentCName} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Excellence;
