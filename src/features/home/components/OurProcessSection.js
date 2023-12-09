import React from "react";

function OurProcessSection() {
  return (
    <div className="our-process-section">
      <section className="pt-5">
        <div>
          <div className="text-center">
            <h5 className="fw-bolder fs-3 ff-m" style={{ color: "#273679" }}>
              OUR PROCESS
            </h5>
          </div>
          <div>
            <div className="container text-center">
              <h2 className="fs-1 lh-base text-danger fw-bolder ff-m">
                WHAT DO WE DO?
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container text-center my-2 d-sm-none d-md-block d-lg-block d-none">
          <img
            loading="lazy"
            decoding="async"
            width="800"
            height="70"
            // src="https://azoozexpress.com/wp-content/uploads/2023/07/wdwd-1-1024x89.png"
            className="img-fluid"
            alt=""
            srcset="
                      https://azoozexpress.com/wp-content/uploads/2023/07/wdwd-1-1024x89.png 1024w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/wdwd-1-300x26.png   300w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/wdwd-1-768x67.png   768w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/wdwd-1-600x52.png   600w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/wdwd-1.png         1256w
                    "
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </div>
      </section>
      <section>
        <div className="container">
          <>
            <div className="row">
              <div className="col-lg-4 p-2">
                <div
                  className="p-2 d-flex align-items-end justify-content-center"
                  style={{
                    backgroundImage:
                      "url(https://azoozexpress.com/wp-content/uploads/2023/07/Group-131.png)",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "150px",
                  }}
                >
                  <div className="text-center">
                    <h2 className=" text-warning fs-2 pt-5">WE PACK</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 p-2">
                <div
                  className="p-2 d-flex align-items-end justify-content-center bg-dark"
                  style={{
                    backgroundImage:
                      "url(https://azoozexpress.com/wp-content/uploads/2023/07/Group-132.png)",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "150px",
                  }}
                >
                  <div className="text-center">
                    <h2 className=" text-warning fs-2 pt-5">WE MOVE</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 p-2">
                <div
                  className="p-2 d-flex align-items-end justify-content-center"
                  style={{
                    backgroundImage:
                      "url(https://azoozexpress.com/wp-content/uploads/2023/07/Group-133.png)",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "150px",
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
