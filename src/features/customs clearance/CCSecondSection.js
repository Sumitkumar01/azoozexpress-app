import React from "react";
import H2tag from "../common/H2tag";
import ImgTag from "../common/ImgTag";
import Ptag from "../common/Ptag";
import { IoMdCheckmarkCircle } from "react-icons/io";
import CCasset2 from "../../assets/CCasset2.png";

function CCSecondSection() {
  const headertext = "Our customs clearance services cover";
  const hTextclass = "text-uppercase  fs-1 text-red fw-bolder ff-m text-center";
  const pTextTop =
    "At Azzoz Express, our customs clearance services keep things simple and stress-free. Here’s what we cover for you :";
  const pTCName = "text-black text-center  mt-2 fs-6 ff-m fw-normal";

  const data = [
    {
      headertextcol: "Preparing and submitting documents",
      pText:
        "No need to stress about forms and submissions. Just provide us with the necessary documents, and we handle the rest.",
    },
    {
      headertextcol: "arranging custom inspection if required",
      pText: "If a customs inspection is needed, don’t worry. We’ll manage the arrangements, making the process smooth and hassle-free.",
    },

    {
      headertextcol: "assessment",
      pText:
        "Our team assesses your shipments according to customs regulations. We ensure everything is for a seamless clearance.",
    },

    {
      headertextcol: "payment of duty",
      pText:
        "No hidden duty charges – just clear and transparent transactions. Azooz Express handles processing and paying the required duties on your behalf.",
    },
  ];

  const col1HCn = "text-uppercase text-black fs-5 ff-m fw-semibold lh-base m-0";
  const pCName = "text-black fs-6 ff-m fw-normal mb-3 lh-base";
  const iconDiv = "d-flex m-2";
  const icon = <IoMdCheckmarkCircle className="text-red fs-5" />;

  const cStyle = {
    borderRadius: ".5rem .5rem .5rem 2rem",
  };

  const otRow = "row ps-lg-5 p-sm-1";
  const col1 =
    "col-lg-4 col-md-4  pt-md-5 pt-lg-0 d-none d-sm-none d-lg-block d-md-block flexAling";
  const col2 = `col-lg-7 col-md-7 col-sm-12 bg-warning p-4 px-lg-4  ms-lg-3 px-sm-3 h-25`;
  const inRow = "row";
  const inCol1 = "col-12 m-0 p-0 d-flex h-25";

  const imgUrl = CCasset2;

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
            <div className={inRow}>
              {data.map((item, i) => (
                <div className={inCol1} key={i}>
                  <div className={iconDiv}>{icon}</div>
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
        </div>
      </div>
    </>
  );
}

export default CCSecondSection;
