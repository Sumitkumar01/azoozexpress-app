import React from "react";
import H2tag from "../common/H2tag";
import ImgTag from "../common/ImgTag";

function STCTestimonials() {
  const textAria = "Testimonials";
  const textCN = "ff-m fs-2 fw-bold text-center text-danger text-uppercase";
  const textAria2 = "Hear it from our customes!";
  const textCN2 = "ff-m fs-2 fw-bold text-center text-warning text-uppercase";
  const imgUrl1 =
    "https://azoozexpress.com/wp-content/uploads/2023/11/Frame-720.png";
  const imgUrl2 =
    "https://azoozexpress.com/wp-content/uploads/2023/11/Frame-721.png";




  return (
    <div className="container p-lg-5 p-md-4" style={{ padding: "0" }}>
      <div
        className="container my-lg-5 testimonials my-md-4 my-sm-0 bg-black p-lg-2 pt-4"
        style={{ borderRadius: "1rem 1rem 1rem 3rem" }}
      >
        <div className="container my-lg-5 ">
          <H2tag header_text={textAria} className={textCN} />
        </div>
        <div className="container  ">
          <H2tag header_text={textAria2} className={textCN2} />
        </div>
        <div className="container">
          {/* desktop slider */}
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
                      <div className="col-6">
                        <div className="single-box">
                          <ImgTag img_url={imgUrl1} alt_text={""} />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="single-box">
                          <ImgTag img_url={imgUrl2} alt_text={""} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="row justify-content-evenly">
                      <div className="col-6">
                        <div className="single-box">
                          <ImgTag img_url={imgUrl1} alt_text={""} />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="single-box">
                          <ImgTag img_url={imgUrl2} alt_text={""} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mobile slider */}
          <div className="container  p-2 d-sm-block d-lg-none d-md-none mobile-slider">
            <div
              id="lgScrSlider"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <ImgTag img_url={imgUrl1} alt_text={""} />
                </div>
                <div className="carousel-item ">
                  <ImgTag img_url={imgUrl2} alt_text={""} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default STCTestimonials;
