import React from "react";
import Column2Layout from "../common/Column2Layout";
import ImgTag from "../common/ImgTag";
import H2tag from "../common/H2tag";
import Ptag from "../common/Ptag"

function STCThredSection() {
  const otRCName = "p-2";
  const col1Class = "col-lg-8 col-md-6  d-flex align-items-center ";
  const col2Class = "col-lg-3 col-md-6 d-flex align-items-center justify-content-center";

  const inRowCN ="row  p-2 ms-lg-3";
  const inColCName ="col-12 m-0 p-0 text-center text-lg-start text-md-start";
  const headerTextCName ="text-danger fs-2 fw-bolder ff-m text-uppercase p-0 ";
  const pCName = "fs-6 text-black ff-p";

  const headerText = "get Efficient temperature-controlled solutions with Azooz Express";
  const ptext =
    "Seek the best solution to meet your needs in terms of temperature-controlled logistics. Shipment solutions covering all standard temperature ranges.";
  const imgUrl =
    "https://azoozexpress.com/wp-content/uploads/2023/11/pp2-2-1.png";

  const col1Content = (
    <>
      <div className={inRowCN}>
        <div className={inColCName}>
          <H2tag header_text={headerText} className={headerTextCName}/>
        </div>
        <div className={inColCName}>
          <Ptag ptext={ptext} pCName={pCName}/>
        </div>
        <div className={inColCName}>
          <button className="btn btn-danger px-5">Contact Us</button>
        </div>
      </div>
    </>
  );
  const col2Content = (
    <>
      <div className="" style={{width:"300px"}}>
        <ImgTag img_url={imgUrl} alt_text={""} />
      </div>
    </>
  );
  return (
    <div className="bg-warning">
      <div className="container ">
        <Column2Layout
          rClass={otRCName}
          col1Class={col1Class}
          col2Class={col2Class}
          col1Content={col1Content}
          col2Content={col2Content}
        />
      </div>
    </div>
  );
}

export default STCThredSection;
