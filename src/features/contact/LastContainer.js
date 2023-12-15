import React from "react";
import H2tag from "../common/H2tag";
import InputTagWButton from "../common/InputTagWButton";

function LastContainer() {
  //*********header-part *************//
  const headerText_1 = "got queries?";
  const hTCName_1 = "text-black fs-1 fw-bold text-capitalize";
  const headerText_2 =
    "leave your email address below and we shall reach out to you shortly";
  const hTCName_2 = "fs-3 ff-m text-danger fw-bold text-capitalize";
  //***********end *************//

  const containerDCName =
    "d-flex flex-column flex-lg-row flex-md-row bg-black rounded-5 p-2 px-3 w-75";
  const inpCName = "text-white bg-black form-control pe-lg-2 me-lg-2 border-0";
  const btnDivCName =
    "d-flex justify-content-center aling-item-center mt-2 mt-lg-0 mt-md-0";
  const pcHolderText = "Enter your email";
  const inpType = "email";
  const btCName = "btn btn-danger px-5 mx-3 my-lg-0 my-md-0 my-sm-2";
  const btText = "Submit";
  const btType = "submit";
  const btStyle = {
    borderRadius: "0 0 0 1rem !important",
  };

  

  const inpStyle = {};

  return (
    <div>
      <div className="container p-2 my-5">
        <div className="row m-0 sapce-around">
          <div className="col-12 m-0 p-0">
            <H2tag header_text={headerText_1} className={hTCName_1} />
          </div>
          <div className="col-12 m-0 p-0">
            <H2tag header_text={headerText_2} className={hTCName_2} />
          </div>
        </div>
      </div>
      <from>
        <div className="container d-flex justify-content-center my-5 contact">
          <InputTagWButton
            containerDCName={containerDCName}
            inpCName={inpCName}
            inpType={inpType}
            inpStyle={inpStyle}
            pcHolderText={pcHolderText}
            btnDivCName={btnDivCName}
            btCName={btCName}
            btText={btText}
            btType={btType}
            btCStyle={btStyle}
          />
        </div>
      </from>
    </div>
  );
}

export default LastContainer;
