import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function HeaderTopSection() {
  return (
    <>
      <Container className=" mt-5 p-0">
        <div className="p-2 mb-0 text-center text-lg-start">
          <h2 className="ff-m fw-bold fs-2 ms-lg-5 m-0">
            WE CREATE AN <span className="text-danger">HONEST</span>,
            <span className="text-danger"> HASSLE-FREE</span> AND
            <span className="text-danger"> QUALITY DELIVERY EXPERIENCE</span>
          </h2>
        </div>
      </Container>
      <section className="container ps-lg-5">
        <div className="row position-relative">
          <div className="col-lg-6 col-md-7 col-sm-12 ps-lg-4 p-0 me-5 pe-0">
            <div className="container bg-warning py-4 px-3 custom-border-radius-start">
              <h2 className="fs-2 fw-bolder ff-m text-black">About Us</h2>

              <div className="pe-n5">
                <h2 className="fs-3 fw-bolder ff-m text-danger ">
                  OMAN'S BEST LAST-MILE <br />
                  DELIVERY COMPANY
                </h2>
              </div>

              <div className="py-3">
                <div
                  className="fw-light text-black ff-p custom-font-size-15 animation-fade-from-right"
                  
                >
                  Our delivery management business is built on speed, security,
                  reliability and accountability, the four great pillars of our
                  success journey. We are serving a large permanent customer
                  base in Oman.
                </div>
              </div>
              <section>
                <div className="row p-0 m-0">
                  <div className="col-2 p-0 animation-fade-from-left justify-content-center d-flex align-items-center">
                    <Link href="https://wa.me/+96896586404">
                      <img
                        decoding="async"
                        width="45"
                        height="50"
                        src="https://azoozexpress.com/wp-content/uploads/2023/07/Vector-2.png"
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>

                  <div className="col-9">
                    <h5 className="fs-4 fw-bold ff-m  mt-3">
                      <Link
                        href="https://wa.me/+96896586404"
                        className="text-black td"
                      >
                        WHATSAPP SUPPORT
                      </Link>
                    </h5>
                    <p className="fw-light text-black ff-p custom-font-size-15">We are just a text away!</p>
                  </div>
                </div>
              </section>
              <section>
                <div className="row m-0 p-0">
                  <div className="col-2 p-0 m-0 justify-content-center d-flex align-items-center animation-fade-from-left">
                    <img
                      decoding="async"
                      width="87"
                      height="87"
                      src="https://azoozexpress.com/wp-content/uploads/2023/07/Group-215-1-1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-9 d-flex align-items-center">
                    <h5 className="fs-3 fw-bolder ff-m">No weight limit</h5>
                  </div>
                </div>
              </section>
              <div>
                <div className="container fluid p-3">
                  <div className="text-center">
                    <Link
                      className="elementor-button elementor-button-link elementor-size-sm"
                      href="http://65.1.2.151/azooz-contact-page/"
                    >
                      <span className="btn btn-danger">Contact Us Today</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-5 mb-md-5 mb-lg-0 position-absolute my-auto d-none d-sm-none d-md-block d-lg-block"
            style={{ bottom: "-1%", right: "5%" }}
          >
            <img
              fetchpriority="high"
              decoding="async"
              width="921"
              height="916"
              src="https://azoozexpress.com/wp-content/uploads/2023/07/Group-224-1-1.png"
              className="img-fluid "
              alt=""
              srcset="
                      https://azoozexpress.com/wp-content/uploads/2023/07/Group-224-1-1.png         921w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/Group-224-1-1-300x298.png 300w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/Group-224-1-1-150x150.png 150w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/Group-224-1-1-768x764.png 768w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/Group-224-1-1-600x597.png 600w
                    "
              sizes="(max-width: 921px) 100vw, 921px"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeaderTopSection;
