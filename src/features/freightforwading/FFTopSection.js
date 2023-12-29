import React from "react";
import H1tag from "../common/H1tag";
import H2tag from "../common/H2tag";
import ImgTag from "../common/ImgTag";
import Ptag from "../common/Ptag";
import { IoMdCheckmarkCircle } from "react-icons/io";
import ServPag1 from "../../assets/ServPag1.png";

function FFTopSection() {
  const headertext = "Instant freight forearding solutions with ";
  const hTextclass =
    "text-uppercase  fs-1 text-black fw-bolder ff-m text-center";
  const spanClassName = "text-red";
  const spanText = "azooz express";

  const data = [
    {
      icon: <IoMdCheckmarkCircle className="text-red fs-5" />,
      headertextcol: "same-day courier service",
      pText:
        "Need it there today? Quick and reliable, we deliver anywhere in Muscat, Oman, on the same day.",
    },
    {
      icon: <IoMdCheckmarkCircle className="text-red fs-5" />,
      headertextcol: "security you can rely on",
      pText:
        "Confidentiality and care are our expertise. We guarantee the integrity of your shipments every step of the way.",
    },
    {
      icon: <IoMdCheckmarkCircle className="text-red fs-5" />,
      headertextcol: "no weight limits, no worries",
      pText:
        "No weight limits to slow us down! From light to heavy shipments, we deliver everything through our courier services in Oman.",
    },
    {
      icon: <IoMdCheckmarkCircle className="text-red fs-5" />,
      headertextcol: "global reach, local expertise",
      pText:
        "Connecting more than 300 ports globally while serving a large permanent customer base in Oman.",
    },
    {
      icon: <IoMdCheckmarkCircle className="text-red fs-5" />,
      headertextcol: "cod(cash-on-delivery)",
      pText: "Pay at your doorstep once the package is successfully received.",
    },
  ];

  const col1HCn = "text-uppercase text-black fs-5 ff-m fw-semibold lh-base m-0";
  const pCName = "text-black fs-6 ff-m fw-normal mb-2 textjustify";
  const iconDiv = "d-flex mx-2 my-1";

  const cStyle = {
    borderRadius: ".5rem .5rem .5rem 2rem",
  };

  const otRow = "row ps-lg-5 p-sm-1 position-relative";
  const col1 = `col-lg-6 col-sm-12 bg-warning p-4 px-lg-5  ms-lg-3 px-sm-3 `;
  const col2 = "col-5 d-none d-lg-block d-md-none";
  const inRow = "row";
  const inCol1 = "col-12 m-0 p-0 d-flex ";

  const imgDivCN = "d-flex position-absolute";
  const imgUrl = ServPag1;

  return (
    <>
      <div className="container my-5 p-2">
        <H1tag
          header_text={headertext}
          className={hTextclass}
          span_text_2={spanText}
          spanClassName={spanClassName}
        />
      </div>
      <div className="container mb-5">
        <div className={otRow}>
          <div className={col1} style={cStyle}>
            <div className={inRow}>
              {data.map((item, i) => (
                <div className={inCol1} key={i}>
                  <div className={iconDiv}>{item.icon}</div>
                  <div>
                    <H2tag
                      header_text={item.headertextcol}
                      className={col1HCn}
                    />
                    <Ptag ptext={item.pText} pCName={pCName} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={col2}>
            <div className={imgDivCN} style={{ top: "5%", right: "25.5%" }}>
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

export default FFTopSection;
