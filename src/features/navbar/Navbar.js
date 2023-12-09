import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Col, Row } from "react-bootstrap";

const navigation = [
  { name: "Home", link: "/" },
  { name: "About", link: "/azooz-about-page/" },
  { name: "Contact", link: "/azooz-contact-page/" },
];

const servicesNavigation = [
  { name: "Freight Forwading", link: "/freight-forwading/" },
  { name: "Custom Clearance", link: "/customs-clearance/" },
  { name: "Fulfilment and Packaging", link: "/fulfilment-and-packaging/" },
  {
    name: "Storage (Temperature Controlled)",
    link: "/storage-temperature-controlled/",
  },
];

function NavBar() {
  return (
    <Navbar expand="lg" className="p-0">
      <Container>
        <div className="p-2">
          <div className="pr-3">
            <Navbar.Brand to="/" className="p-0 m-0">
              <img
                src="https://azoozexpress.com/wp-content/uploads/2023/07/Englishlogopngblackpng-1-1.png"
                className="img-fluid"
                alt=""
              />
            </Navbar.Brand>
          </div>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navigation.map((item) => (
                <Nav.Link
                  key={item.name}
                  as={Link}
                  to={item.link}
                  className="text-white"
                >
                  {item.name}
                </Nav.Link>
              ))}

              <NavDropdown
                title="Services"
                id="basic-nav-dropdown"
                className="text-white "
              >
                {servicesNavigation.map((item) => (
                  <NavDropdown.Item
                    key={item.name}
                    as={Link}
                    to={item.link}
                    className="bg-warning text-white"
                  >
                    {item.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div className="p-1  d-sm-none d-md-none d-lg-block d-xl-blok">
          <Row className="p-2 ">
            <Col>
              <Link to="#">
                <span className="visually-hidden">Facebook</span>
                <FaFacebook className="social-icon-text" />
              </Link>
            </Col>
            <Col>
              <Link>
                <span className="visually-hidden">Twitter</span>
                <FaTwitter className="social-icon-text" />
              </Link>
            </Col>
            <Col>
              <Link>
                <span className="visually-hidden">Instagram</span>
                <FaInstagram className="social-icon-text" />
              </Link>
            </Col>
            <Col>
              <Link>
                <span className="visually-hidden">Linkedin</span>
                <FaLinkedin className="social-icon-text" />
              </Link>
            </Col>
          </Row>
        </div>
        <Row className="p-1 ">
          <div className="p-r-0">
            <Link
              className="btn btn-danger btn-lg py-4 px-5"
              href="http://65.1.2.151/azooz-contact-page/"
            >
              Get Your Quote
            </Link>
          </div>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavBar;
