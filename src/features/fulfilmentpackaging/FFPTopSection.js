import React from "react";
import H2tag from "../common/H2tag";
import H1tag from "../common/H1tag";
import ImgTag from "../common/ImgTag";
import { IoMdCheckmarkCircle } from "react-icons/io";
import FAPasset1 from "../../assets/FAPasset1.png";

function FFPTopSection() {
  const headertext = "Smooth customs clearance with ";
  const hTextclass =
    "text-uppercase  fs-1 text-black fw-bolder ff-m text-center";
  const spanClassName = "text-red";
  const spanText = "azooz express";

  const data = [
    { headertextcol: "Everywhere you need" },
    { headertextcol: "Trusted and rule-abiding" },
    { headertextcol: "fast and no-fuss clearances" },
    { headertextcol: "We handle tricky stuff too" },
    { headertextcol: "Save money with cuty know-how" },
  ];

  const col1HCn =
    "text-uppercase text-black fs-5 ff-m fw-semibold lh-base px-lg-4 p-0";
  const pCName = "text-black fs-5 px-lg-4 p-0 ff-m fw-normal m-0";
  const iconDiv = "d-flex my-1 mx-2";
  const icon = <IoMdCheckmarkCircle className="text-red fs-5" />;

  const cStyle = {
    borderRadius: ".5rem .5rem .5rem 2rem",
  };

  const otRow = "row ps-lg-5 p-sm-1";
  const col1 = `col-lg-6 col-md-6 col-sm-12 bg-warning p-4 px-lg-4  ms-lg-3 px-sm-3 h-25`;
  const col2 = "col-lg-5 col-md-6 d-none d-lg-block d-md-block";
  const inRow = "row";
  const inCol1 = "col-12 m-0 p-0 d-flex h-25";

  const imgDivCN = "d-flex";
  const imgUrl = FAPasset1;

  return (
    <>
      <div className="container my-5 ">
        <H1tag
          header_text={headertext}
          className={hTextclass}
          span_text_2={spanText}
          spanClassName={spanClassName}
        />
        <p className={pCName}>
          <span className="text-red">Make business operations </span>smoother
          with Azooz Express – your reliable partner in top-quality fulfillment
          and customized packaging services.
        </p>
      </div>
      <div className="container mb-5">
        <div className={otRow}>
          <div className={col1} style={cStyle}>
            <div className={inRow} style={{ minHeight: "22rem" }}>
              {data.map((item, i) => (
                <div className={inCol1} key={i}>
                  <div className={iconDiv}>{icon}</div>
                  <div>
                    <H2tag header_text={item.headertextcol} className={col1HCn} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={col2}>
            <div className={imgDivCN}>
              <ImgTag
                img_url={imgUrl}
                alt_text={"Avatar img"}
                style={{ height: "25.5rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FFPTopSection;
