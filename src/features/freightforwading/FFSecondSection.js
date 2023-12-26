import React from "react";
import H2tag from "../common/H2tag";
import ImgTag from "../common/ImgTag";
import FFas1 from "../../assets/FFas1.png"
import FFas2 from "../../assets/FFas2.png"
import FFas3 from "../../assets/FFas3.png"


function FFSecondSection() {
  const headerText = "What do we deliver?";
  const headerTextCN = "text-danger text-uppercase text-center fw-bold ff-m fs-2";

  const imgUrl1 =FFas1;
  const imgUrl2 =FFas2;
  const imgUrl3 =FFas3;
  const imgUrl4 =FFas1;
  const imgUrl5 =FFas2;
  const imgUrl6 =FFas3;

  return (
    <>
      <div className="container p-2 my-4">
        <div className="container ">
          <H2tag header_text={headerText} className={headerTextCN} />
        </div>
        {/* desktop & tab slider */}
        <div className="container my-4 d-none d-sm-none d-lg-block d-md-block">
          <div className="row">
            <div
              id="lgScrSlider"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div key="item1" className="carousel-item active">
                  <div className="row justify-content-evenly">
                    <div className="col-3">
                      <div className="single-box">
                        <ImgTag img_url={imgUrl1} alt_text={""} />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="single-box">
                        <ImgTag img_url={imgUrl2} alt_text={""} />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="single-box">
                        <ImgTag img_url={imgUrl3} alt_text={""} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row justify-content-evenly">
                    <div className="col-3">
                      <div className="single-box">
                        <ImgTag img_url={imgUrl4} alt_text={""} />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="single-box">
                        <ImgTag img_url={imgUrl5} alt_text={""} />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="single-box">
                        <ImgTag img_url={imgUrl6} alt_text={""} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mobile slider */}
        <div className="container my-4 pe-2 d-sm-block d-lg-none d-md-none">
          <div
            id="lgScrSlider"
            className="carousel slide ms-4"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <ImgTag img_url={imgUrl1} alt_text={""} />
              </div>
              <div className="carousel-item ">
                <ImgTag img_url={imgUrl2} alt_text={""} />
              </div>
              <div className="carousel-item ">
                <ImgTag img_url={imgUrl3} alt_text={""} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FFSecondSection;
