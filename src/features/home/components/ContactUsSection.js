import React from "react";
import { Container } from "react-bootstrap";
import HomeAsset35 from '../../../assets/HomeAsset35.png'

function ContactUsSection() {
  return (
    <div className="mb-5">
      <Container>
        <div className="row">
          <div className=" col-md-5 col-sm-12 my-auto">
            <div className="container fluid  pe-3 ms-0 me-auto">
              <div className="row flex-column my-auto">
                <div className="col my-4 ps-0 pe-lg-5">
                  <h2 className="ff-m fs-2 fw-semibold text-uppercase text-center animation-fade-up  text-md-start  text-lg-star">
                    ready to get moving? get your free quote
                  </h2>
                </div>
                <div className="col ps-0">
                  <div className="">
                    <div className="text-center  text-md-start  text-lg-star">
                      <a
                        className=""
                        href="http://65.1.2.151/azooz-contact-page/"
                      >
                        <span className="btn btn-danger">Contact Us</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-sm-12 p-0 d-sm-none d-md-block d-lg-block d-none">
            <div>
              <img
                loading="lazy"
                decoding="async"
                width="800"
                height="387"
                src={HomeAsset35}
                className="img-fluid"
                alt=""
                sizes="(max-width: 800px) 100vw, 800px"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ContactUsSection;
