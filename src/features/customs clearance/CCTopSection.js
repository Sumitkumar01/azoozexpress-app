import React from "react";
import H2tag from "../common/H2tag";
import ImgTag from "../common/ImgTag";
import Ptag from "../common/Ptag";
import { IoMdCheckmarkCircle } from "react-icons/io";

function CCTopSection() {
  const headertext = "Smooth customs clearance with ";
  const hTextclass =
    "text-uppercase  fs-1 text-black fw-bolder ff-m text-center mt-2";
  const spanClassName = "text-danger";
  const spanText = "azooz express";

  const headertextcol1 = "Everywhere you need";
  const headertext2col1 = "Trusted and rule-abiding";
  const headertext3col1 = "fast and no-fuss clearances";
  const headertext4col1 = "We handle tricky stuff too";
  const headertext5col1 = "Save money with cuty know-how";

  const pText_1 =
    "Azzoz Express covers customs clearance all over professional courier Oman – by air, sea, or road. No matter where you are, we’ve got you sorted.";
  const pText_2 =
    "We’re one of Oman’s top customs clearance teams. Our experienced folks ensure your shipments follow the rules and get through customs smoothly.";
  const pText_3 =
    "Our Oman Shipping offices work 24/7 at borders, seaports, and airports. That means your shipments clear shop and ship Oman customs fast without unnecessary delays or extra fees.";
  const pText_4 =
    "Got a tricky shipment? Azzoz Express knows how to deal with challenging delivery customs. We’ll speed up the customs clearance even for the toughest shipments in courier service.";
  const pText_5 =
    "We know the ins and outs of duty exemptions and temporary clearance in freight courier services. Azooz Express helps you save money by navigating customs rules like a pro in delivery services in Oman.";

  const col1HCn = "text-uppercase text-black fs-5 ff-m fw-semibold lh-base px-lg-4 p-0";
  const pCName = "text-black fs-5 ff-m fw-mediumm mb-3 px-lg-4 p-0";
  const pcCName = "text-black fs-6 ff-m fw-mediumm mb-2 px-lg-4 p-0";


  const iconDiv = "d-flex m-2";
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
        <p className={pCName}>
          <span className="text-danger">Are yoy tired </span>of dealing with
          customs headaches for your shipments? Welcome to Azooz Express, your
          trusted partner for professional cargo services in Oman and beyond. We
          specialize in air, ocean, and road freight courier services, making
          cross-border delivery with ease.
        </p>
        <h2 className={hTextclass}>
          Why <spnn className="text-danger">choose Azooz</spnn> Express for
          customs clearance in courier{" "}
          <span className="text-danger">service?</span>
        </h2>
      </div>
      <div className="container mb-5">
        <div className={otRow}>
          <div className={col1} style={cStyle}>
            <div className={inRow}>
              <div className={inCol1}>
                <div className={iconDiv}>{icon}</div>
                <div>
                  <H2tag header_text={headertextcol1} className={col1HCn} />
                  <Ptag ptext={pText_1} pCName={pcCName} />
                </div>
              </div>
              <div className={inCol1}>
                <div className={iconDiv}>{icon}</div>
                <div>
                  <H2tag header_text={headertext2col1} className={col1HCn} />
                  <Ptag ptext={pText_2} pCName={pcCName} />
                </div>
              </div>
              <div className={inCol1}>
                <div className={iconDiv}>{icon}</div>
                <div>
                  <H2tag header_text={headertext3col1} className={col1HCn} />
                  <Ptag ptext={pText_3} pCName={pcCName} />
                </div>
              </div>
              <div className={inCol1}>
                <div className={iconDiv}>{icon}</div>
                <div>
                  <H2tag header_text={headertext4col1} className={col1HCn} />
                  <Ptag ptext={pText_4} pCName={pcCName} />
                </div>
              </div>
              <div className={inCol1}>
                <div className={iconDiv}>{icon}</div>
                <div>
                  <H2tag header_text={headertext5col1} className={col1HCn} />
                  <Ptag ptext={pText_5} pCName={pcCName} />
                </div>
              </div>
            </div>
          </div>
          <div className={col2}>
            <div className={imgDivCN} style={{ top: "20%", right: "24.5%" }}>
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

export default CCTopSection;
