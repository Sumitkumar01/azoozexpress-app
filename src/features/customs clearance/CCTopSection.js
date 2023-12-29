import React from "react";
import H1tag from "../common/H1tag";
import H2tag from "../common/H2tag";
import ImgTag from "../common/ImgTag";
import Ptag from "../common/Ptag";
import { IoMdCheckmarkCircle } from "react-icons/io";
import ServPag1 from "../../assets/ServPag1.png";

function CCTopSection() {
  const headertext = "Smooth customs clearance with ";
  const hTextclass =
    "text-uppercase  fs-1 text-black fw-bolder ff-m text-center mt-2";
  const spanClassName = "text-red";
  const spanText = "azooz express";

  const col1HCn =
    "text-uppercase text-black fs-5 ff-m fw-semibold lh-base px-lg-4 p-0";
  const pCName =
    "text-black fs-5 ff-m fw-mediumm mb-3 px-lg-4 p-0 text-center text-lg-start text-md-start";
  const pcCName = "text-black fs-6 ff-m fw-mediumm mb-2 px-lg-4 p-0";

  const iconDiv = "d-flex m-2";
  const data = [
    {
      icon: <IoMdCheckmarkCircle className="text-red fs-5" />,
      headertextcol: "Everywhere you need",
      pText:
        "Azzoz Express covers customs clearance all over professional courier Oman – by air, sea, or road. No matter where you are, we’ve got you sorted.",
    },
    {
      icon: <IoMdCheckmarkCircle className="text-red fs-5" />,
      headertextcol: "Trusted and rule-abiding",
      pText:
        "We’re one of Oman’s top customs clearance teams. Our experienced folks ensure your shipments follow the rules and get through customs smoothly.",
    },
    {
      icon: <IoMdCheckmarkCircle className="text-red fs-5" />,
      headertextcol: "fast and no-fuss clearances",
      pText:
        "Our Oman Shipping offices work 24/7 at borders, seaports, and airports. That means your shipments clear shop and ship Oman customs fast without unnecessary delays or extra fees.",
    },
    {
      icon: <IoMdCheckmarkCircle className="text-red fs-5" />,
      headertextcol: "We handle tricky stuff too",
      pText:
        "Got a tricky shipment? Azzoz Express knows how to deal with challenging delivery customs. We’ll speed up the customs clearance even for the toughest shipments in courier service.",
    },
    {
      icon: <IoMdCheckmarkCircle className="text-red fs-5" />,
      headertextcol: "Save money with cuty know-how",
      pText:
        "We know the ins and outs of duty exemptions and temporary clearance in freight courier services. Azooz Express helps you save money by navigating customs rules like a pro in delivery services in Oman.",
    },
  ];

  const cStyle = {
    borderRadius: ".5rem .5rem .5rem 2rem",
  };

  const otRow = "row ps-lg-5 p-sm-1 position-relative";
  const col1 = `col-lg-8 col-sm-12 bg-warning p-4 px-lg-4  ms-lg-3 px-sm-3 h-25`;
  const col2 = "col-4 d-none d-lg-block d-md-none";
  const inRow = "row";
  const inCol1 = "col-12 m-0 p-0 d-flex h-25";

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
        <p className={pCName}>
          <span className="text-red">Are yoy tired </span>of dealing with
          customs headaches for your shipments? Welcome to Azooz Express, your
          trusted partner for professional cargo services in Oman and beyond. We
          specialize in air, ocean, and road freight courier services, making
          cross-border delivery with ease.
        </p>
        <h2 className={hTextclass}>
          Why <spnn className="text-red">choose Azooz</spnn> Express for customs
          clearance in courier <span className="text-red">service?</span>
        </h2>
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
                    <Ptag ptext={item.pText} pCName={pcCName} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={col2}>
            <div className={imgDivCN} style={{ top: "7%", right: "11.5%" }}>
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
