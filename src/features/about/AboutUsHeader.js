import React from "react";
import NavBar from "../navbar/Navbar";
import H2_i_Tag from "../common/H2_i_Tag";

function AboutUsHeader() {
  const header_title = " was naver this easy before";
  const span_text = "moving things";
  const spanClassName = "text-warning";
  const className =
    "ff-g fs-4 fw-bold text-white text-uppercase ps-lg-5 pt-lg-5 ms-lg-5 mt-lg-5 text-decoration-underline";
 

  return (
    <div className="bg-dark">
      <NavBar />
      <div className="container p-5 pt-5 d-flex justify-content-lg-start  justify-content-md-end align-items-md-end justify-content-sm-end align-items-sm-end ">
        <br></br>
        <br></br>
        <H2_i_Tag
          header_text={header_title}
          span_text={span_text}
          className={className}
          spanClassName={spanClassName}
        />
      </div>
    </div>
  );
}

export default AboutUsHeader;
