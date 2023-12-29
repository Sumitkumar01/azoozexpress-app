import React from "react";
import H2tag from "../common/H2tag";
import H1tag from "../common/H1tag";
import ImgTag from "../common/ImgTag";
import Ptag from "../common/Ptag";
import { IoMdCheckmarkCircle } from "react-icons/io";
import ServPag1 from "../../assets/ServPag1.png";

function STCTopSection() {
  const headertext = "optimized temperature controlled storage with ";
  const hTextclass = "text-uppercase  fs-1 text-black fw-bold ff-m text-center";
  const spanClassName = "text-red";
  const spanText = "azooz express";

  const data = [
    {
      headertextcol: "Packaging designingand and validation",
      pText:
        "With in-house experts to evaluate your needs, we recommend and provide appropriate packaging and refrigerants to ensure the integrity of your temperature-controlled shipments.",
    },
    {
      headertextcol: "speed",
      pText:
        "Pickup and delivery of shipments from/to 53 origin-destination pairs within committed transit time.",
    },
    {
      headertextcol: "reliable Clinical trial logistics partner",
      pText: "Experience and knowledge of the temperature-controlled market.",
    },
    {
      headertextcol: "value-added services",
      pText:
        "Validated packaging solutions, Dry-ice solutions, Temperature loggers, and Dedicated customer service for your courier service in Oman.",
    },
    {
      headertextcol: "Temperature-controlled packaging",
      pText:
        "Complete range of temperature-controlled packaging solutions for finished goods and clinical trial supplies.",
    },
    {
      headertextcol: "1-day definite deliver",
      pText:
        "Azooz Express offers complete end-to-end temperature-controlled logistics solutions to the largest number of origin destinations in the country.",
    },
  ];
  const col1HCn = "text-uppercase text-black fs-5 ff-m fw-semibold lh-base m-0";
  const pCName =
    "text-black fs-5 ff-m fw-normal mb-3 px-lg-3 text-center text-lg-start text-md-start";
  const pcCName = "text-black fs-6 ff-m fw-normal mb-2 lh-base ";

  const iconDiv = "d-flex mx-2 my-1";
  const icon = <IoMdCheckmarkCircle className="text-red fs-5" />;

  const cStyle = {
    borderRadius: ".5rem .5rem .5rem 2rem",
  };

  const otRow = "row p-1";
  const col1 = `col-lg-8 col-md-8 col-sm-12 bg-warning py-2  px-3`;
  const col2 = "col-lg-4 col-md-4 d-none d-lg-block d-md-block";
  const inRow = "row m-0 p-2";
  const inCol1 = "col-12 m-0 p-0 d-flex";

  const imgDivCN = "mt-md-5 mt-lg-0";
  const imgUrl = ServPag1;

  return (
    <>
      <div className="container mt-4">
        <H1tag
          header_text={headertext}
          className={hTextclass}
          span_text_2={spanText}
          spanClassName={spanClassName}
        />
        <div className="container px-lg-5 px-0">
          <p className={pCName}>
            <span className="text-red">Our Temperature Controlled </span>
            Logistics Solutions present a secure and validated supply chain for
            your needs, integrating Oman’s leading logistics network with an
            innovative range of services.
          </p>
        </div>
        <div className="container my-2">
          <h2 className={hTextclass}>
            covering
            <span className="text-red"> every need</span>
          </h2>
        </div>
      </div>
      <div className="container my-5 p-0">
        <div className="container">
          <div className={otRow}>
            <div className={col1} style={cStyle}>
              <div className={inRow}>
                {data.map((items, i) => (
                  <div className={inCol1}>
                    <div className={iconDiv}>{icon}</div>
                    <div>
                      <H2tag header_text={items.headertextcol} className={col1HCn} />
                      <Ptag ptext={items.pText} pCName={pcCName} />
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
                  style={{ marginInline: "-11%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default STCTopSection;
