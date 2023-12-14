import React from "react";
import H2tag from "../common/H2tag";
import ImgTag from "../common/ImgTag";
import Column2Layout from "../common/Column2Layout";

function MiddleContainer() {
  const otCol1Class = "col-lg-6 col-md-6 col-sm-12 p-4";
  const otCol2Class = "col-lg-6 col-md-6 col-sm-12 p-0";
  const otRowClass = "d-flex";

  const header_text = "Get a free quote";
  const className = "text-Uppercase fs-1 p-o fw-bold ff-m";

  const imgUrl = "http://65.1.2.151/wp-content/uploads/2023/07/1-1.png";
  const altText = "Avatar image";
  const col1Content = (
    <>
      <div className="row flex-column">
        <div className="col p-1">
          <H2tag header_text={header_text} className={className} />
        </div>
        <div className="col p-0">
          <div className="container p-0">
            <div className="card bg-white p-3 rounded-4" style={{ minHeight: "20rem" }}>
              <div className="card-items">
                <div className="row flex-column g-4">
                  <div className="col">
                    <input
                      className="form-control"
                      placeholder=" Your Full Name"
                      aria-label=" Your Full Name"
                      type="text"
                    />
                  </div>
                  <div className="col">
                    <div className="row">
                      <div className="col-4">
                        <input
                          className="form-control"
                          placeholder="Email"
                          aria-label="Email"
                          type="email"
                        />
                      </div>
                      <div className="col-4">
                        <input
                          className="form-control"
                          placeholder="+968"
                          aria-label="+968"
                          type="tel"
                        />
                      </div>
                      <div className="col-4">
                        <input
                          className="form-control"
                          placeholder="Phone number"
                          aria-label="Phone number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        aria-label="Message"
                        type="text"
                      />
                    
                  </div>
                  <div className="col text-end">
                    <button className="btn btn-danger px-5">Get A Quote</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  const col2Content = (
    <>
      
        <ImgTag img_url={imgUrl} alt_text={altText} />
      
    </>
  );
  return (
    <>
      <div className="container bg-warning rounded-5">
        <Column2Layout
          col1Content={col1Content}
          col2Content={col2Content}
          rClass={otRowClass}
          col1Class={otCol1Class}
          col2Class={otCol2Class}
        />
      </div>
    </>
  );
}

export default MiddleContainer;
