import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function HeaderTopSection() {
  return (
    <>
      <Container className=" mt-4 p-0">
        <div className="p-2 mb-0 text-sm-center text-md-center text-lg-start">
          <h2 className="ff-m fw-bold fs-2">
            WE CREATE AN <span className="text-danger">HONEST</span>,
            <span className="text-danger">HASSLE-FREE</span> AND
            <span className="text-danger">QUALITY DELIVERY EXPERIENCE</span>
          </h2>
        </div>
      </Container>
      <section className="container ps-lg-5">
        <div className="row position-relative">
          <div className="col-lg-6 ps-4 me-5 pe-0">
            <div className="container bg-warning py-4 px-3 br-s">
              <h2 className="fs-2 fw-bolder ff-m text-black">About Us</h2>

              <div>
                <div className="pe-n5">
                  <h2 className="fs-3 fw-bolder ff-m text-danger">
                    OMAN'S BEST LAST-MILE <br />
                    DELIVERY COMPANY
                  </h2>
                </div>
              </div>
              <div className="py-3">
                <div className="fw-bold  an-fade-in-left" style={{textAlign:"justify"}}>
                  Our delivery management business is built on speed, security,
                  reliability and accountability, the four great pillars of our
                  success journey. We are serving a large permanent customer
                  base in Oman.
                </div>
              </div>
              <section>
                <div className="row">
                  <div className="col-5 an-fade-right justify-content-center d-flex align-items-center">
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

                  <div className="col-7">
                    <h5 className="fs-4 fw-bold ff-m  mt-3">
                      <Link
                        href="https://wa.me/+96896586404"
                        className="text-black td"
                      >
                        WHATSAPP SUPPORT
                      </Link>
                    </h5>
                    <p>We are just a text away!</p>
                  </div>
                </div>
              </section>
              <section>
                <div className="row">
                  <div className="col-5 justify-content-center d-flex align-items-center an-fade-right">
                    <img
                      decoding="async"
                      width="87"
                      height="87"
                      src="https://azoozexpress.com/wp-content/uploads/2023/07/Group-215-1-1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-7 d-flex align-items-center">
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
            className="col-lg-6  position-absolute my-auto d-none d-sm-none d-md-none d-lg-block"
            style={{ bottom: "1.2rem", right: "3.7rem" }}
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
