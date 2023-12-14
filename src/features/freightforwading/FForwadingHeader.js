import React from "react";
import NavBar from "../navbar/Navbar";
import Column2Layout from "../common/Column2Layout";
import H2tag from "../common/H2tag";
import H2ITag from "../common/H2ITag";

function FForwadingHeader() {
  // ********headerclass********* //
  const headerBdCName = "bg-black";
  const hdContentCName = "container mt-5";
  // ********header Coustom Style************//
  const hcStyle = {
    backgroundImage: `url(
        'https://azoozexpress.com/wp-content/uploads/2023/11/movers-putting-boxes-boving-cart-1.png'
      )`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "38rem",
    opacity: "0.7",
  };
  const hdContentcStyle = {};

  // *******content class********************//
  const rClass = "";
  const col1Class = "col-lg-6 col-md-6 col-12 d-flex align-items-center";
  const col2Class = "col-lg-6 col-md-6 col-12";

  //   **********content child-1************//
  const headertext1 = "forwarding";
  const spanText1 = "Freight ";

  //   *****class*****///

  const headerTCName1 = "text-uppercase ff-m fs-2 fw-bold text-light";
  const spanClassName = "text-warning";

  //   **********content child-2************//
  const headerText2 = "Ready to get started?";
  const headerText2ClassName = "text-capitalize text-center m-0 p-0";

  // *********** col1Content ******************//
  const col1Content = (
    <H2ITag
      header_text={headertext1}
      className={headerTCName1}
      span_text={spanText1}
      spanClassName={spanClassName}
    />
  );

  // *********** col1Content ******************//
  const col2Content = (
    <div
      className="card bg-warning p-3 ms-lg-5 ms-md-3 ms-0"
      style={{
        maxWidth: "25.5rem",
        minHeight: "20rem",
        borderRadius: "1rem 1rem 1rem 3rem",
      }}
    >
      <div className="card-items">
        <div className="row flex-column g-4">
          <div className="col">
            <H2tag header_text={headerText2} className={headerText2ClassName} />
          </div>
          <div className="col">
            <input
              className="form-control"
              placeholder="Full Name"
              aria-label="Full Name"
              type="text"
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              placeholder="Phone Number"
              aria-label="Phone Number"
              type="number"
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              type="email"
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              placeholder="City"
              aria-label="City"
              type="text"
            />
          </div>
          <div className="col text-start ">
            <button className="btn btn-danger px-5 fs-5 ff-p" id="form-btn">
              Get A Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={headerBdCName} style={hcStyle}>
      <NavBar />
      <div className={hdContentCName} style={hdContentcStyle}>
        <Column2Layout
          rClass={rClass}
          col1Class={col1Class}
          col2Class={col2Class}
          col1Content={col1Content}
          col2Content={col2Content}
        />
      </div>
    </div>
  );
}

export default FForwadingHeader;
