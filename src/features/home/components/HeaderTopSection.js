import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Contact1 from '../../../assets/Contact1.png'
import Contact2 from '../../../assets/Contact2.png'
import Group224 from '../../../assets/Group224.png'

function HeaderTopSection() {
  return (
    <>
      <Container className=" my-2 p-0">
        <div className="p-2 mb-0 text-center text-lg-start">
          <h1 className="ff-m fw-bold fs-2 ms-lg-5 m-0">
            WE CREATE AN <span className="text-red">HONEST</span>,
            <span className="text-red"> HASSLE-FREE</span> AND
            <span className="text-red"> QUALITY DELIVERY EXPERIENCE</span>
          </h1>
        </div>
      </Container>
      <section className="container ps-lg-5">
        <div className="row position-relative">
          <div className="col-lg-6 col-md-7 col-sm-12 ps-lg-4 p-0 me-5 pe-0">
            <div className="container bg-warning py-4 px-3 custom-border-radius-start">
              <h2 className="fs-2 fw-bolder ff-m text-black">About Us</h2>

              <div className="pe-n5">
                <h2 className="fs-3 fw-bolder ff-m text-red ">
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
                  <div className="col-2 p-3 animation-fade-from-left justify-content-center d-flex ">
                    <Link href="https://wa.me/+96896586404">
                      <img
                        decoding="async"
                        width="45"
                        height="50"
                        src={Contact1}
                        className="img-fluid"
                        alt="user"
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
                      src={Contact2}
                      className="img-fluid"
                      alt="weight"
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
                      
                      to="/azooz-contact-page"
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
              src={Group224}
              className="img-fluid "
              alt="avtar"
              sizes="(max-width: 921px) 100vw, 921px"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeaderTopSection;
