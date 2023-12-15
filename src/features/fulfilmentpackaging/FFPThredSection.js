import React from "react";
import Column2Layout from "../common/Column2Layout";
import ImgTag from "../common/ImgTag";
import H2tag from "../common/H2tag";

function FFPThredSection() {
  const otRCName = "";
  const col1Class = "col-lg-8 col-md-6  d-flex align-items-center ";
  const col2Class = "col-lg-3 col-md-6 d-flex align-items-center justify-content-center";

  const inRowCN ="row  p-2 ms-lg-3";
  const inColCName ="col-12 m-0 p-0 text-center text-lg-start text-md-start";
  const headerTextCName ="text-danger fs-1 fw-bolder ff-m text-uppercase p-0 ";

  const headerText = "get started with azooz express!";
  

  const imgUrl =
    "https://azoozexpress.com/wp-content/uploads/2023/11/pp2-2-1.png";

  const col1Content = (
    <>
      <div className={inRowCN}>
        <div className={inColCName}>
          <H2tag header_text={headerText} className={headerTextCName}/>
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
    <div className="bg-warning py-3">
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

export default FFPThredSection;
