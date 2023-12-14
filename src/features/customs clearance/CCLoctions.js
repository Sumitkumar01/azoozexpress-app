import React from 'react'
import H2tag from '../common/H2tag'
import ImgTag from '../common/ImgTag'

function CCLoctions() {

    const textAria ="Locatons we serve in oman"
    const textCname =
      "text-uppercase  fs-1 text-danger fw-bolder ff-m text-center";
    const text1="muscat airport"
    const text2="sohar port and free zone"
    const text3 = "wajajah border";
    const text4 = "wadi jizzi border";
    const text5 = "duqm port";
    const text6 = "salalh port and free zone";

    const tCName="ff-p fs-5 text-black text-capitalize "

const colCName = "bg-warning p-2 m-0 col-lg-4 col-md-4 col-sm-12 rounded-3 m-2"
    const url =
      "https://azoozexpress.com/wp-content/uploads/2023/11/carbon_location.png";
  return (
    <div>
      <div className="container my-3">
        <div className="container">
          <H2tag header_text={textAria} className={textCname} />
        </div>
        <div className="row">
          <div className={colCName}>
            <div className="row">
              <div className="col-3">
                <ImgTag img_url={url} alt_text={"location_img"} />
              </div>
              <div className="col-9">
                <H2tag header_text={text1} className={tCName} />
              </div>
            </div>
          </div>
          <div className={colCName}>
            <div className="row">
              <div className="col-3">
                <ImgTag img_url={url} alt_text={"location_img"} />
              </div>
              <div className="col-9">
                <H2tag header_text={text2} className={tCName} />
              </div>
            </div>
          </div>
          <div className={colCName}>
            <div className="row">
              <div className="col-3">
                <ImgTag img_url={url} alt_text={"location_img"} />
              </div>
              <div className="col-9">
                <H2tag header_text={text3} className={tCName} />
              </div>
            </div>
          </div>
          <div className={colCName}>
            <div className="row">
              <div className="col-3">
                <ImgTag img_url={url} alt_text={"location_img"} />
              </div>
              <div className="col-9">
                <H2tag header_text={text4} className={tCName} />
              </div>
            </div>
          </div>
          <div className={colCName}>
            <div className="row">
              <div className="col-3">
                <ImgTag img_url={url} alt_text={"location_img"} />
              </div>
              <div className="col-9">
                <H2tag header_text={text5} className={tCName} />
              </div>
            </div>
          </div>
          <div className={colCName}>
            <div className="row">
              <div className="col-3">
                <ImgTag img_url={url} alt_text={"location_img"} />
              </div>
              <div className="col-9">
                <H2tag header_text={text6} className={tCName} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CCLoctions