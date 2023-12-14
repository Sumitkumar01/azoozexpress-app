import React from "react";
import H2tag from "../common/H2tag";
import Img_tag from "../common/Img_tag";
import Ptag from "../common/Ptag";
import { IoMdCheckmarkCircle } from "react-icons/io";

function FFTopSection() {
  const headertext = "Instant freight forearding solutions with ";
  const hTextclass =
    "text-uppercase  fs-1 text-black fw-bolder ff-m text-center";
  const spanClassName = "text-danger";
  const spanText = "azooz express";

  const headertextcol1 = "same-day courier service";
  const headertext2col1 = "security you can rely on";
  const headertext3col1 = "no weight limits, no worries";
  const headertext4col1 = "global reach, local expertise";
  const headertext5col1 = "cod(cash-on-delivery)";

  const pText_1 =
    "Need it there today? Quick and reliable, we deliver anywhere in Muscat, Oman, on the same day.";
  const pText_2 =
    "Confidentiality and care are our expertise. We guarantee the integrity of your shipments every step of the way.";
  const pText_3 =
    "No weight limits to slow us down! From light to heavy shipments, we deliver everything through our courier services in Oman.";
  const pText_4 =
    "Connecting more than 300 ports globally while serving a large permanent customer base in Oman.";
  const pText_5 =
    "Pay at your doorstep once the package is successfully received.";

  const col1HCn = "text-uppercase text-black fs-5 ff-m fw-semibold lh-base m-0";
  const pCName = "text-black fs-6 ff-m fw-normal m-0";
  const iconDiv = "d-flex mx-2 my-1";
  const icon = <IoMdCheckmarkCircle className="text-danger fs-5" />;

  const cStyle = {
    borderRadius: ".5rem .5rem .5rem 2rem",
  };

  const otRow = "row ps-lg-5 p-sm-1 position-relative";
  const col1 = `col-lg-6 col-sm-12 bg-warning p-4 px-lg-4  ms-lg-3 px-sm-3 h-25`;
  const col2 = "col-5 d-none d-lg-block d-md-none";
  const inRow = "row";
  const inCol1 = "col-12 m-0 p-0 d-flex h-25";

  const imgDivCN = "d-flex position-absolute";
  const imgUrl =
    "	https://azoozexpress.com/wp-content/uploads/2023/11/Group-759.png";

  return (
    <>
      <div className="container my-5 p-2">
        <H2tag
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
              
            </div>
          </div>
          <div className={col2}>
            <div className={imgDivCN} style={{ top: "1%", right: "24.5%" }}>
              <Img_tag
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
