import React from "react";
import ProcessTitle from '../../../assets/ProcessTitle.png'
import Process1 from '../../../assets/Process1.png'
import Process2 from '../../../assets/Process2.png'
import Process3 from '../../../assets/Process3.png'


function OurProcessSection() {
  return (
    <div className="our-process-section">
      <section className="pt-5">
        <div>
          <div className="text-center">
            <h5
              className="fw-bolder fs-3 ff-m animation-fade-out"
              style={{ color: "#273679" }}
            >
              OUR PROCESS
            </h5>
          </div>
          <div>
            <div className="container text-center">
              <h2 className="fs-1 lh-base text-danger fw-bolder ff-m animation-fade-up">
                WHAT DO WE DO?
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container text-center  my-3 d-sm-none d-md-block d-lg-block d-none">
          <img
            loading="lazy"
            decoding="async"
            width="800"
            height="70"
            src={ProcessTitle}
            className="img-fluid"
            alt=""
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </div>
      </section>
      <section>
        <div className="container my-5">
          <>
            <div className="row">
              <div className="col-lg-4 p-2 ">
                <div
                  className="p-2 d-flex align-items-end justify-content-center box-shadow"
                  style={{
                    backgroundImage:
                      `url(${Process1})`,
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "12.5rem",
                  }}
                >
                  <div className="text-center">
                    <h2 className=" text-warning fs-2 pt-5">WE PACK</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 p-2">
                <div
                  className="p-2 d-flex align-items-end justify-content-center bg-dark box-shadow"
                  style={{
                    backgroundImage:
                      `url(${Process2})`,
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "12.5rem",
                  }}
                >
                  <div className="text-center">
                    <h2 className=" text-warning fs-2 pt-5">WE MOVE</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 p-2">
                <div
                  className="p-2 d-flex align-items-end justify-content-center box-shadow"
                  style={{
                    backgroundImage:
                      `url(${Process3})`,
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "12.5rem",
                  }}
                >
                  <div className="text-center">
                    <h2 className="text-warning fs-2 pt-5">WE DELIVER</h2>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </section>
    </div>
  );
}

export default OurProcessSection;
