import React from "react";
import H2tag from "../common/H2tag";
import ImgTag from "../common/ImgTag";
import Ptag from "../common/Ptag";
import { IoMdCheckmarkCircle } from "react-icons/io";

function STCTopSection() {
  const headertext = "optimized temperature controlled storage with ";
  const hTextclass =
    "text-uppercase  fs-1 text-black fw-bolder ff-m text-center";
  const spanClassName = "text-danger";
  const spanText = "azooz express";

  const headertextcol1 = "Packaging designingand and validation";
  const headertext2col1 = "speed";
  const headertext3col1 = "reliable Clinical trial logistics partner";
  const headertext4col1 = "value-added services";
  const headertext5col1 = "Temperature-controlled packaging";
  const headertext6col1 = "1-day definite deliver";

  const pText_1 =
    "With in-house experts to evaluate your needs, we recommend and provide appropriate packaging and refrigerants to ensure the integrity of your temperature-controlled shipments.";
  const pText_2 =
    "Pickup and delivery of shipments from/to 53 origin-destination pairs within committed transit time.";
  const pText_3 =
    "Experience and knowledge of the temperature-controlled market.";
  const pText_4 =
    "Validated packaging solutions, Dry-ice solutions, Temperature loggers, and Dedicated customer service for your courier service in Oman.";
  const pText_5 =
    "Complete range of temperature-controlled packaging solutions for finished goods and clinical trial supplies.";
  const pText_6 =
    "Azooz Express offers complete end-to-end temperature-controlled logistics solutions to the largest number of origin destinations in the country.";
  const col1HCn = "text-uppercase text-black fs-5 ff-m fw-semibold lh-base m-0";
  const pCName = "text-black fs-6 ff-m fw-normal m-0";
  const iconDiv = "d-flex mx-2 my-1";
  const icon = <IoMdCheckmarkCircle className="text-danger fs-5" />;

  const cStyle = {
    borderRadius: ".5rem .5rem .5rem 2rem",
  };

  const otRow = "row ps-lg-5 p-sm-1 position-relative";
  const col1 = `col-lg-8 col-md-7 col-sm-12 bg-warning  px-sm-3 h-25`;
  const col2 = "col-lg-4 col-md-4 d-none d-lg-block d-md-block";
  const inRow = "row m-0 p-2";
  const inCol1 = "col-12 m-0 p-0 d-flex h-25";

  const imgDivCN = "d-flex";
  const imgUrl =
    "	https://azoozexpress.com/wp-content/uploads/2023/11/Group-759.png";

  return (
    <>
      <div className="container mt-4">
        <H2tag
          header_text={headertext}
          className={hTextclass}
          span_text_2={spanText}
          spanClassName={spanClassName}
        />
        <div className="container">
          <p className={pCName }>
            <span className="text-danger">Our Temperature Controlled </span>
            Logistics Solutions present a secure and validated supply chain for
            your needs, integrating Oman’s leading logistics network with an
            innovative range of services.
          </p>
        </div>
        <div className="container my-2">
          <h2 className={hTextclass}>
            covering
            <span className="text-danger">every need</span>
          </h2>
        </div>
      </div>
      <div className="container my-5 p-0">
        <div className={otRow}>
          <div className={col1} style={cStyle}>
            <div className={inRow}>
              <div className={inCol1}>
                <div className={iconDiv}>{icon}</div>
                <div>
                  <H2tag header_text={headertextcol1} className={col1HCn} />
                  <Ptag ptext={pText_1} pCName={pCName} />
                </div>
              </div>
              <div className={inCol1}>
                <div className={iconDiv}>{icon}</div>
                <div>
                  <H2tag header_text={headertext2col1} className={col1HCn} />
                  <Ptag ptext={pText_2} pCName={pCName} />
                </div>
              </div>
              <div className={inCol1}>
                <div className={iconDiv}>{icon}</div>
                <div>
                  <H2tag header_text={headertext3col1} className={col1HCn} />
                  <Ptag ptext={pText_3} pCName={pCName} />
                </div>
              </div>
              <div className={inCol1}>
                <div className={iconDiv}>{icon}</div>
                <div>
                  <H2tag header_text={headertext4col1} className={col1HCn} />
                  <Ptag ptext={pText_4} pCName={pCName} />
                </div>
              </div>
              <div className={inCol1}>
                <div className={iconDiv}>{icon}</div>
                <div>
                  <H2tag header_text={headertext5col1} className={col1HCn} />
                  <Ptag ptext={pText_5} pCName={pCName} />
                </div>
              </div>
              <div className={inCol1}>
                <div className={iconDiv}>{icon}</div>
                <div>
                  <H2tag header_text={headertext6col1} className={col1HCn} />
                  <Ptag ptext={pText_6} pCName={pCName} />
                </div>
              </div>
            </div>
          </div>
          <div className={col2}>
            <div className={imgDivCN} >
              <ImgTag
                img_url={imgUrl}
                alt_text={"Avatar img"}
                
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default STCTopSection;
