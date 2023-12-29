import React from "react";
import ProcessTitle from "../../../assets/ProcessTitle.png";
import Process1 from "../../../assets/Process1.png";
import Process2 from "../../../assets/Process2.png";
import Process3 from "../../../assets/Process3.png";

function OurProcessSection() {
  const data = [
    { imgUrl: Process1, text: "we pack" },
    { imgUrl: Process2, text: "we move" },
    { imgUrl: Process3, text: "we deliver" },
  ];
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
              <h2 className="fs-1 lh-base text-red fw-bolder ff-m animation-fade-up">
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
            alt="process"
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </div>
      </section>
      <section>
        <div className="container my-5">
          <>
            <div className="row">
              {data.map((item, i) => (
                <div className="col-lg-4 p-2 " key={i}>
                  <div
                    className="p-2 d-flex align-items-end justify-content-center box-shadow our-p-s"
                    style={{
                      backgroundImage: `url(${item.imgUrl})`,
                    }}
                  >
                    <div className="text-center">
                      <h2 className=" text-warning fs-2 pt-5 text-uppercase">
                        {item.text}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        </div>
      </section>
    </div>
  );
}

export default OurProcessSection;
