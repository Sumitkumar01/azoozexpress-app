import React from "react";
import H2tag from "../common/H2tag";
import ImgTag from "../common/ImgTag";
import CCasset3 from '../../assets/CCasset3.png'

function CCLoctions() {
  const textAria = "Locatons we serve in oman";
  const textCname =
    "text-uppercase  fs-1 text-danger fw-bolder ff-m text-center";
  const text1 = "muscat airport";
  const text2 = "sohar port and free zone";
  const text3 = "wajajah border";
  const text4 = "wadi jizzi border";
  const text5 = "duqm port";
  const text6 = "salalh port and free zone";

  const tCName = "ff-p fs-6 p-0 m-0 text-black text-capitalize ";

  const colCName =
    "col-lg-4 p-1  col-md-4 col-sm-12 rounded-2";
  const url =CCasset3;




  return (
    <div>
      <div className="container my-5 locition-section">
        <div className="container my-3">
          <H2tag header_text={textAria} className={textCname} />
        </div>
        <div>
          <div className="row my-2">
            <div className={colCName}>
              <div
                className="row m-0 bg-warning p-3"
                style={{ borderRadius: ".5rem .5rem .5rem 2rem" }}
              >
                <div className="col-3  d-flex justify-content-center">
                  <ImgTag img_url={url} alt_text={"location_img"} />
                </div>
                <div className="col-9 p-0">
                  <H2tag header_text={text1} className={tCName} />
                </div>
              </div>
            </div>
            <div className={colCName}>
              <div
                className="row m-0 bg-warning p-3"
                style={{ borderRadius: ".5rem .5rem .5rem 2rem" }}
              >
                <div className="col-3  d-flex justify-content-center">
                  <ImgTag img_url={url} alt_text={"location_img"} />
                </div>
                <div className="col-9 p-0">
                  <H2tag header_text={text2} className={tCName} />
                </div>
              </div>
            </div>
            <div className={colCName}>
              <div
                className="row m-0 bg-warning p-3"
                style={{ borderRadius: ".5rem .5rem .5rem 2rem" }}
              >
                <div className="col-3  d-flex justify-content-center">
                  <ImgTag img_url={url} alt_text={"location_img"} />
                </div>
                <div className="col-9 p-0">
                  <H2tag header_text={text3} className={tCName} />
                </div>
              </div>
            </div>
          </div>
          <div className="row my-2">
            <div className={colCName}>
              <div
                className="row m-0 bg-warning p-3 "
                style={{ borderRadius: ".5rem .5rem .5rem 2rem" }}
              >
                <div className="col-3  d-flex justify-content-center">
                  <ImgTag img_url={url} alt_text={"location_img"} />
                </div>
                <div className="col-9 p-0">
                  <H2tag header_text={text4} className={tCName} />
                </div>
              </div>
            </div>
            <div className={colCName}>
              <div
                className="row m-0 bg-warning p-3"
                style={{ borderRadius: ".5rem .5rem .5rem 2rem" }}
              >
                <div className="col-3  d-flex justify-content-center">
                  <ImgTag img_url={url} alt_text={"location_img"} />
                </div>
                <div className="col-9 p-0">
                  <H2tag header_text={text5} className={tCName} />
                </div>
              </div>
            </div>
            <div className={colCName}>
              <div
                className="row m-0 bg-warning p-3"
                style={{ borderRadius: ".5rem .5rem .5rem 2rem" }}
              >
                <div className="col-3  d-flex justify-content-center">
                  <ImgTag img_url={url} alt_text={"location_img"} />
                </div>
                <div className="col-9 p-0">
                  <H2tag header_text={text6} className={tCName} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CCLoctions;
