import React from "react";

function Delivered() {
  return (
    <div className="">
      <div className="bg-warning ">
        <section className="container delivered-section pb-lg-2  pb-4">
          <div className="row">
            <div className="col-lg-7 col-md-6 pe-0 ps-lg-5 d-flex align-items-center">
              <div className="row m-0">
                <div className="col-12 ps-1">
                  <div className="mt-lg-2 mt-sm-0 pt-sm-3 pt-5">
                    <h2 className="ff-m fs-3 animation-fade-up text-danger fw-bolder text-uppercase text-center  text-md-start  text-lg-star">
                      WE value your packages AS MUCH AS you do
                    </h2>
                  </div>
                </div>
                <div className="col-12 ps-1">
                  <div className="m-lg-0 px-4 p-lg-0">
                    <p className="text-md-start ff-p fs-6 animation-fade-from-right  text-lg-star">
                      Packages are sensitive and moving them is tiring, so we
                      take care of them for you.
                    </p>
                  </div>
                </div>
                <div className="col-12 p-0">
                  <div className="">
                    <div className="text-center  text-md-start  text-lg-star">
                      <a
                        className=""
                        href="http://65.1.2.151/azooz-about-page/"
                      >
                        <span className="">
                          <span className="btn btn-danger">
                            Get Delivered Today
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 d-sm-none d-md-block ps-0 d-lg-block d-none">
              <div className="w-75 p-0 ">
                <img
                  loading="lazy"
                  decoding="async"
                  width="778"
                  height="629"
                  src="https://azoozexpress.com/wp-content/uploads/2023/07/ss-1-1-1.png"
                  className="img-fluid"
                  alt=""
                  srcset="
                      https://azoozexpress.com/wp-content/uploads/2023/07/ss-1-1-1.png         778w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/ss-1-1-1-300x243.png 300w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/ss-1-1-1-768x621.png 768w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/ss-1-1-1-600x485.png 600w
                    "
                  sizes="(max-width: 778px) 100vw, 778px"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Delivered;
