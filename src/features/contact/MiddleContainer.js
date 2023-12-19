import React from "react";
import H2tag from "../common/H2tag";
import ImgTag from "../common/ImgTag";
import Column2Layout from "../common/Column2Layout";
import myimg from './img/1-1.png'

function MiddleContainer() {
  const otCol1Class = "col-lg-6 col-md-6 col-sm-12 p-4";
  const otCol2Class = "col-lg-6 col-md-6 col-sm-12 p-0";
  const otRowClass = "d-flex";

  const header_text = "Get a free quote";
  const className = "text-Uppercase fs-1 p-o fw-bold ff-m";

  const imgUrl = myimg;
  const altText = "Avatar image";
  const col1Content = (
    <>
      <div className="row flex-column">
        <div className="col p-1">
          <H2tag header_text={header_text} className={className} />
        </div>
        <div className="col p-0">
          <div className="container p-0">
            <div
              className="card bg-white p-3 rounded-4"
              style={{ minHeight: "20rem" }}
            >
              <div className="card-items">
                <form>
                  <div className="row flex-column g-4">
                    <div className="col">
                      <input
                        className="form-control"
                        placeholder=" Your Full Name"
                        aria-label=" Your Full Name"
                        type="text"
                        style={{ backgroundColor: "#EBEBEB" }}
                      />
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 ">
                          <input
                            className="form-control"
                            placeholder="Email"
                            aria-label="Email"
                            type="email"
                            style={{ backgroundColor: "#EBEBEB" }}
                          />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 my-3 m-lg-0 m-md-0">
                          <input
                            className="form-control"
                            placeholder="+968"
                            aria-label="+968"
                            type="tel"
                            style={{ backgroundColor: "#EBEBEB" }}
                          />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 ">
                          <input
                            className="form-control"
                            placeholder="Phone number"
                            aria-label="Phone number"
                            style={{ backgroundColor: "#EBEBEB" }}
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
                        style={{ height: "7.5rem", backgroundColor: "#EBEBEB" }}
                      />
                    </div>
                    <div className="col text-center text-lg-end text-md-end ">
                      <button className="btn btn-danger px-5 custom-button-border-radius">
                        Get A Quote
                      </button>
                    </div>
                  </div>
                </form>
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
