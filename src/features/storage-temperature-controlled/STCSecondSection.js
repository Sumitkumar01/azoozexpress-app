import React from "react";
import H2tag from "../common/H2tag";
import ImgTag from "../common/ImgTag";
import Ptag from "../common/Ptag";
import { IoMdCheckmarkCircle } from "react-icons/io";
import STCasset2 from "../../assets/STCasset2.png"

function STCSecondSection() {

  const sptext = "Innovations"
  const headertext = " that deliver competitive advantage to you";

  const hTextclass =
    "text-uppercase  fs-1 text-black fw-bolder ff-m text-center";
  const headertextcol1 = "all-in-one value package";
  const headertext2col1 = "Temperature range";
  const headertext3col1 = "door to door pickup and deliver";
  const headertext4col1 = "enhanced network connectivity";

  const pText_1 =
    "Cost, security, validation, and efficient transport solutions. We deliver 2. the complete package of value.";
  const pText_2 =
    "Maintaining customized temperature distributions for your package.";
  const pText_3 =
    "Improved physical flows and integrated temperature-controlled management with Azooz Express.";
  const pText_4 =
    "Service to the largest number of locations across Muscat reduces the possibility of replenishing cooling materials during transit.";

  const col1HCn = "text-uppercase text-black fs-5 ff-m fw-semibold lh-base m-0";
  const pCName = "text-black fs-6 ff-m fw-normal mb-3 px-lg-3 lh-base";
  const iconDiv = "d-flex my-1 mx-2";
  const icon = <IoMdCheckmarkCircle className="text-danger fs-5" />;

  const cStyle = {
    borderRadius: ".5rem .5rem .5rem 2rem",
  };

  const otRow = "row ps-lg-5 p-sm-1";
  const col1 =
    "col-lg-4 col-md-5  pt-md-5 pt-lg-0 d-none d-sm-none d-lg-block d-md-block flexAling";
  const col2 = `col-lg-7 col-md-7 col-sm-12 bg-warning p-4 px-lg-4 py-lg-3 ms-lg-3 px-sm-3 h-25`;
  const inRow = "row";
  const inCol1 = "col-12 m-0 p-0 d-flex h-25";

  const imgUrl =STCasset2;

  return (
    <>
      <div className="container my-5 p-2">
        <H2tag
          header_text={headertext}
          className={hTextclass}
          span_text_1={sptext}
          spanClassName={"text-danger"}
        />
      </div>
      <div className="container mb-5">
        <div className={otRow}>
          <div className={col1}>
            <div className="">
              <ImgTag img_url={imgUrl} alt_text={"Avatar img"} style={{height:"25.5rem"}}/>
            </div>
          </div>
          <div className={col2} style={cStyle}>
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
                  <ul>
                    <li>Frozen: – 20°C</li>
                    <li>Chilled: 2 – 8°C</li>
                    <li>Ambient: 15 – 25°C</li>
                  </ul>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default STCSecondSection;
