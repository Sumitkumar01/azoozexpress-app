import React from "react";
import H2tag from "../common/H2tag";
import ImgTag from "../common/ImgTag";
import { IoMdCheckmarkCircle } from "react-icons/io";

function FFPTopSection() {
  const headertext = "Smooth customs clearance with ";
  const hTextclass =
    "text-uppercase  fs-1 text-black fw-bolder ff-m text-center";
  const spanClassName = "text-danger";
  const spanText = "azooz express";

  const headertextcol1 = "Everywhere you need";
  const headertext2col1 = "Trusted and rule-abiding";
  const headertext3col1 = "fast and no-fuss clearances";
  const headertext4col1 = "We handle tricky stuff too";
  const headertext5col1 = "Save money with cuty know-how";

 
  const col1HCn = "text-uppercase text-black fs-5 ff-m fw-semibold lh-base m-0";
  const pCName = "text-black fs-6 ff-m fw-normal m-0";
  const iconDiv = "d-flex my-1 mx-2";
  const icon = <IoMdCheckmarkCircle className="text-danger fs-5" />;

  const cStyle = {
    borderRadius: ".5rem .5rem .5rem 2rem",
  };

  const otRow = "row ps-lg-5 p-sm-1";
  const col1 = `col-lg-6 col-md-6 col-sm-12 bg-warning p-4 px-lg-4  ms-lg-3 px-sm-3 h-25`;
  const col2 = "col-lg-5 col-md-6 d-none d-lg-block d-md-block";
  const inRow = "row";
  const inCol1 = "col-12 m-0 p-0 d-flex h-25";

  const imgDivCN = "d-flex";
  const imgUrl =
    "	https://azoozexpress.com/wp-content/uploads/2023/11/pp10-2.png";

  return (
    <>
      <div className="container my-5 ">
        <H2tag
          header_text={headertext}
          className={hTextclass}
          span_text_2={spanText}
          spanClassName={spanClassName}
        />
        <p className={pCName}>
          <span className="text-danger">Make business operations </span>smoother
          with Azooz Express – your reliable partner in top-quality fulfillment
          and customized packaging services.
        </p>
        
      </div>
      <div className="container mb-5">
        <div className={otRow}>
          <div className={col1} style={cStyle}>
            <div className={inRow} style={{minHeight:"22rem"}}>
              <div className={inCol1}>
                <div className={iconDiv}>{icon}</div>
                <div>
                  <H2tag header_text={headertextcol1} className={col1HCn} />
                </div>
              </div>
              <div className={inCol1}>
                <div className={iconDiv}>{icon}</div>
                <div>
                  <H2tag header_text={headertext2col1} className={col1HCn} />
                </div>
              </div>
              <div className={inCol1}>
                <div className={iconDiv}>{icon}</div>
                <div>
                  <H2tag header_text={headertext3col1} className={col1HCn} />
                </div>
              </div>
              <div className={inCol1}>
                <div className={iconDiv}>{icon}</div>
                <div>
                  <H2tag header_text={headertext4col1} className={col1HCn} />
                </div>
              </div>
              <div className={inCol1}>
                <div className={iconDiv}>{icon}</div>
                <div>
                  <H2tag header_text={headertext5col1} className={col1HCn} />
                </div>
              </div>
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
