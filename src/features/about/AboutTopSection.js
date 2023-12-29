import React from "react";
import H1tag from "../common/H1tag";
import H2tag from "../common/H2tag";


function AboutTopSection() {
  const header_text = "who";
  const span_text_2 = " we are";
  const spanClassName = "text-red";
  const className = "ff-m fw-bolder fs-1 text-dark text-uppercase";
  const customStyle_heading = {
    textAlign:"justify",
  };
  const Description_text =
    "Oman’s Finest And Fastest Growing Last Mile Delivery Company Based In Muscat, Our Delivery Management Business Is Built On Speed, Security, Reliability And Accountability, The Four Pillars Of Our Success Journey. Consistentlt Serving A Large Customer Community In Oman";
  const Description_span_text = "Azooz Express, ";
  const DescriptionSpanClassName = "text-red";
  const DescriptionClassName = "ff-p fs-5 fw-medium lh-base text-dark";

  return (
    <>
      <div className="container p-2 mt-4">
        <div className="container text-center p-2">
          <H1tag
            header_text={header_text}
            span_text_2={span_text_2}
            className={className}
            spanClassName={spanClassName}
            
          />
        </div>
        <div className="container pt-4 pb-5 px-0 mt-3 mb-2">
          <H2tag
            header_text={Description_text}
            span_text_1={Description_span_text}
            className={DescriptionClassName}
            spanClassName={DescriptionSpanClassName}
            customStyle={customStyle_heading}
          />
        </div>
      </div>
    </>
  );
}

export default AboutTopSection;
