import React from "react";
import H2tag from "../common/H2tag";
import ImgTag from "../common/ImgTag";
import Ptag from "../common/Ptag";
import { IoMdCheckmarkCircle } from "react-icons/io";
import FAPasset2 from "../../assets/FAPasset2.png"

function FFPSecondSection() {
  const headertext = "Azooz express fulfillment and packaging";
  const hTextclass =
    "text-uppercase  fs-1 text-danger fw-bolder ff-m text-center";
  const pTextTop =
    "At Azzoz Express, our customs clearance services keep things simple and stress-free. Here’s what we cover for you :";
  const pTCName = "text-black text-center  m-0 fs-6 ff-m fw-normal";
  const headertextcol1 = "Keep it safe";
  const headertext2col1 = "show off your brand";
  const headertext3col1 = "pack it fast";
  const headertext4col1 = "make it extra special";
  const headertext5col1 = "fit right in"

 
  const col1HCn = "text-uppercase text-black fs-5 ff-m fw-semibold lh-base m-0";
  const iconDiv = "d-flex my-1 mx-2";
  const icon = <IoMdCheckmarkCircle className="text-danger fs-5" />;

  const cStyle = {
    borderRadius: ".5rem .5rem .5rem 2rem",
  };

  const otRow = "row ps-lg-5 p-sm-1";
  const col1 =
    "col-lg-4 col-md-5  pt-md-3 pt-lg-0 d-none d-sm-none d-lg-block d-md-block flexAling";
  const col2 = `col-lg-7 col-md-7 col-sm-12 bg-warning p-4 px-lg-4  ms-lg-3 px-sm-3 h-25`;
  const inRow = "row";
  const inCol1 = "col-12 m-0 p-0 d-flex h-25";

  const imgUrl =FAPasset2;

  return (
    <>
      <div className="container my-5 p-2">
        <H2tag header_text={headertext} className={hTextclass} />
        <Ptag ptext={pTextTop} pCName={pTCName} />
      </div>
      <div className="container mb-5">
        <div className={otRow}>
          <div className={col1}>
            <div className="mt-lg-4  mt-md-5">
              <ImgTag img_url={imgUrl} alt_text={"Avatar img"} />
            </div>
          </div>
          <div className={col2} style={cStyle}>
            <div className={inRow} style={{ minHeight: "22rem" }}>
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
        </div>
      </div>
    </>
  );
}

export default FFPSecondSection;
