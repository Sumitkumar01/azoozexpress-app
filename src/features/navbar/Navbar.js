import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand to="#" className="pe-5 py-0">
          <img
            width="148"
            height="65"
            src="https://azoozexpress.com/wp-content/uploads/2023/07/Englishlogopngblackpng-1-1.png"
            class="img-fluid"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="bg-warning"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-3 ps-3">
            {navigation.map((item) => (
              <Nav.Link
                as={Link}
                to={item.link}
                className="fs-5 text-light ff-m text-md-center  text-lg-start bg-sm-warning bg-md-warning"
              >
                {item.name}
              </Nav.Link>
            ))}
            <NavDropdown
              title="Service"
              id="basic-nav-dropdown"
              className="fs-5 text-light ff-m rounded-0 text-md-center  text-lg-start"
            >
              {servicesNavigation.map((item) => (
                <NavDropdown.Item
                  as={Link}
                  to={item.link}
                  className="text-danger bg-warning text-md-center  text-lg-start ff-p"
                >
                  {item.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        {/* social-link */}
        <div className="row me-lg-3">
          <div className="col-6 p-1 d-none  d-sm-none d-md-none d-lg-block d-xl-blok">
            <div className="p-2 div row">
              <div className="col-3">
                <Link to="#">
                  <span className="visually-hidden">Facebook</span>
                  <FaFacebook className="social-icon-text" />
                </Link>
              </div>
              <div className="col-3">
                <Link>
                  <span className="visually-hidden">Twitter</span>
                  <FaTwitter className="social-icon-text" />
                </Link>
              </div>
              <div className="col-3">
                <Link>
                  <span className="visually-hidden">Instagram</span>
                  <FaInstagram className="social-icon-text" />
                </Link>
              </div>
              <div className="col-3">
                <Link>
                  <span className="visually-hidden">Linkedin</span>
                  <FaLinkedin className="social-icon-text" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-6 p-1 d-none d-sm-none d-md-none d-lg-block d-xl-blok">
            <div className="text-center">
              <Link
                className="btn btn-danger"
                to="http:65.1.2.151/azooz-contact-page/"
              >
                Get Your Quote
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
