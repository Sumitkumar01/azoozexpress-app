import React from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMailOpenOutline } from "react-icons/io5";
import logo from "../../assets/logo.png";

function Footer() {
  // const [open, setOpen] = useState(false);
  // const handleClick = () => {
  //   setOpen(!open);
  // };

  return (
    <div className="footer-section">
      <Container>
        <Row>
          <Container className=" pt-5 pb-4">
            <div className="container">
              <div>
                <div className="col">
                  <Container>
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 ">
                        <Row className="flex-column">
                          <div className="col d-flex justify-content-center mb-4 animation-fade-up">
                            <div>
                              <img
                                width="150"
                                height="69"
                                src={logo}
                                className="img-fluid"
                                alt=""
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div>
                              <Row className="p-2 justify-content-center ">
                                <div className="col-3 text-center">
                                  <Link to="#" className="">
                                    <span className="visually-hidden">
                                      Facebook
                                    </span>
                                    <FaFacebook className="social-icon-text" />
                                  </Link>
                                </div>
                                <div className="col-3 text-center">
                                  <Link>
                                    <span className="visually-hidden">
                                      Twitter
                                    </span>
                                    <FaTwitter className="social-icon-text" />
                                  </Link>
                                </div>
                                <div className="col-3 text-center">
                                  <Link>
                                    <span className="visually-hidden">
                                      Instagram
                                    </span>
                                    <FaInstagram className="social-icon-text" />
                                  </Link>
                                </div>
                                <div className="col-3 text-center">
                                  <Link>
                                    <span className="visually-hidden">
                                      Linkedin
                                    </span>
                                    <FaLinkedin className="social-icon-text" />
                                  </Link>
                                </div>
                              </Row>
                            </div>
                          </div>
                        </Row>
                      </div>
                      <div className="col-lg-2 col-md-3 d-sm-none d-md-block d-lg-block d-none">
                        <div>
                          <div className="ft-title-block-1">
                            <h6 className="animation-fade-from-right text-white text-md-start text-xs-center text-lg-start fw-semibold fs-4 ff-m">
                              Company
                            </h6>
                          </div>

                          <div>
                            <nav>
                              <ul className="navbar-nav footer-nav">
                                <li className="nav-item text-white text-md-start text-xs-center text-lg-start fw-normal">
                                  <Link
                                    to="/"
                                    aria-current="page"
                                    className="nav-link nav-pad nav-text"
                                  >
                                    Home
                                  </Link>
                                </li>
                                <li className="nav-item text-white text-md-start text-xs-center text-lg-start fw-normal">
                                  <Link
                                    to="/azooz-about-page"
                                    className="nav-link nav-text nav-pad"
                                  >
                                    About
                                  </Link>
                                </li>
                                <li className="nav-item text-white text-md-start text-xs-center text-lg-start fw-normal">
                                  <Link
                                    to="/azooz-contact-page"
                                    className="nav-link nav-text nav-pad"
                                  >
                                    Contact
                                  </Link>
                                </li>
                                {/* <li className="nav-item text-white dropdown text-md-start text-xs-center text-lg-start fw-normal">
                                  <Link
                                    to="#"
                                    className="nav-link nav-pad dropdown-toggle"
                                    onClick={handleClick}
                                  >
                                    Services
                                  </Link>
                                  {open && (
                                      <ul className="footer-nav-dropdown">
                                        <li className="footer-nav-dropdown-item">
                                          <Link
                                            to="/freight-forwading"
                                            className="elementor-sub-item"
                                          >
                                            Freight Forwading
                                          </Link>
                                        </li>
                                        <li className="footer-nav-dropdown-item">
                                          <Link
                                            to="/customs-clearance"
                                            className="elementor-sub-item"
                                          >
                                            Customs Clearance
                                          </Link>
                                        </li>
                                        <li className="footer-nav-dropdown-item">
                                          <Link
                                            to="/fulfilment-and-packaging"
                                            className="elementor-sub-item"
                                          >
                                            Fulfilment and Packaging
                                          </Link>
                                        </li>
                                        <li className="footer-nav-dropdown-item">
                                          <Link
                                            to="/storage-temperature-controlled"
                                            className="elementor-sub-item"
                                          >
                                            Storage (Temperature Controlled)
                                          </Link>
                                        </li>
                                      </ul>
                                  )}
                                </li> */}
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-3 col-sm-12 py-xs-5">
                        <div className="">
                          <div className="mb-3 pb-0">
                            <h6 className="elementor-heading-title animation-fade-from-right text-white text-center  text-md-start  text-lg-start fw-semibold mb-2 fs-4 ff-m">
                              Reach Out to us
                            </h6>
                          </div>
                          <div className="animation-fade-up">
                            <ul className="list-group bg-black border-0 rounded-0 text-md-start text-center text-lg-start fs-normal">
                              <li className="list-group-item bg-black text-white border-0 elementor-icon-list-text p-0">
                                <span className="list-icon">
                                  <svg
                                    aria-hidden="true"
                                    className="e-font-icon-svg e-fas-map-pin"
                                    viewBox="0 0 288 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z"></path>
                                  </svg>
                                </span>
                                <span className="elementor-icon-list-text ps-2 pb-0 ">
                                  PO BOX 84, Postal code 101, Sultanate of Oman.
                                </span>
                              </li>
                              <li className="list-group-item bg-black elementor-icon-list-text text-white border-0">
                                <span className="list-icon ">
                                  <IoMailOpenOutline />
                                </span>
                                <span className="elementor-icon-list-text ps-2">
                                  info@azoozexpress.com
                                </span>
                              </li>
                              <li className="list-group-item elementor-icon-list-text bg-black text-white border-0">
                                <span>
                                  <BiPhoneCall />
                                </span>
                                <span className="ps-2 elementor-icon-list-text">
                                  +968 22700 070
                                </span>
                              </li>
                              <li className="list-group-item elementor-icon-list-tex bg-black text-white border-0 p-0">
                                <Link
                                  to="https://wa.me/+96896586404"
                                  style={{
                                    textDecoration: "none",
                                    color: "#ffffff",
                                  }}
                                >
                                  <span>
                                    <IoLogoWhatsapp />
                                  </span>
                                  <span className="ps-2 elementor-icon-list-text">
                                    +968 9658 6404
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="container pt-2">
                          <div className="d-flex justify-content-center">
                            <Link
                              className="btn btn-danger"
                              to="/azooz-contact-page"
                            >
                              Get A Quote
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Container>
                </div>
              </div>
            </div>
          </Container>
          <Container>
            <div>
              <div className="pt-3">
                <Container className="bottom-container-ft">
                  <section>
                    <div className="row text-white justify-content-center ">
                      <div className="col-lg-5 col-md-6 col-sm-12 aling-item-center">
                        <p className="text-center">
                          Copyright © 2022 All Rights Reserved.
                        </p>
                      </div>

                      <div className="col-lg-5 col-md-6 col-sm-12 aling-item-center">
                        <p className="text-center">
                          <Link
                            to="/privacy-policy"
                            className="link-light link-offset-2 p-1"
                          >
                            Privacy Policy
                          </Link>
                          |
                          <Link
                            to="/terms-of-Service"
                            className="link-light link-offset-2 p-1"
                          >
                            Terms of Service
                          </Link>
                        </p>
                      </div>
                    </div>
                  </section>
                  <div>
                    <div>
                      <p className="text-center text-light p-2">
                        Website Designed &amp; Developed By
                        <Link
                          to="https://www.fielmente.com/"
                          className="link-light link-offset-2 p-1"
                        >
                          Fielmente.com
                        </Link>
                      </p>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </Container>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
