import React from "react";
import { Link } from "react-router-dom";
import { FaQuoteRight } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import {
  Autoplay,
  Navigation,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import HomeTestAssetim from "../../../assets/HomeTestAssetim.jpeg"
import HomeTestAssetmd from "../../../assets/HomeTestAssetmd.png"
import HomeTestAssetzk from "../../../assets/HomeTestAssetzk.png"
import HomeTestAssetmb from "../../../assets/HomeTestAssetmb.jpeg"
import HomeAssetss from "../../../assets/HomeAssetss.jpeg"



// Import Swiper styles
import "swiper/css";

function Testimonials() {
  
  return (
    <div>
      <section
        className="container pt-sm-5 pt-4 bg-black mt-4"
        style={{ borderRadius: "0 2rem 0 2rem" }}
      >
        <div className="row p-3">
          <div className="col-12 px-4">
            <h2 className="fs-1 ff-m fw-bold text-warning">TESTIMONIALS</h2>
          </div>

          <div className="col-12 px-4">
            <h2 className="fs-2 ff-m fw-bold text-danger">
              OUR HAPPY CUSTOMERS
            </h2>
          </div>

          {/* card container screen sliderr Start */}
          <div className="col-12 p-2 p-lg-1 p-md-2">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={false}
              modules={[Autoplay, Navigation]}
              spaceBetween={10}
              slidesPerView={4}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1440: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
            >
              <SwiperSlide>
                {" "}
                <div className="card custom-card-size">
                  <div className="card-body">
                    <ul className="f-st ps-0">
                      <li className="list-group-item">
                        <Link to="#">
                          <IoStar className="fs-5 text-warning" />
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="#">
                          <IoStar className="fs-5 text-warning" />
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="#">
                          <IoStar className="fs-5 text-warning" />
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="#">
                          <IoStar className="fs-5 text-warning" />
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="#">
                          <IoStar className="fs-5 text-warning" />
                        </Link>
                      </li>
                    </ul>
                    <p className="card-text fs-6 ff-p ">
                      Azooz Express has transformed our retail operations. Their
                      professionalism, reliability, and exceptional customer
                      service have elevated our delivery experience and
                      strengthened our relationship with our customers.
                    </p>
                    <div
                      className="card flex-row border-0"
                      style={{ height: "5rem" }}
                    >
                      <div
                        className="card rounded-circle aling-items-center justify-content-center border-none overflow-hidden me-2 border-0"
                        style={{ width: "4rem", height: "4rem" }}
                      >
                        <img
                          src={HomeTestAssetmd}
                          alt=""
                          sizes="(max-width: 571px) 100vw, 571px"
                          className="d-block w-100 h-100"
                        />
                      </div>
                      <div className="card ms-2 p-2 border-0">
                        <h5 className="card-title text-start ff-p fs-5">
                          Md Sofia
                        </h5>
                        <span className="card-title text-start ff-p fs-6">
                          Retail Store Owner
                        </span>
                      </div>
                      <div className="ms-auto mt-auto">
                        <FaQuoteRight className="fs-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card custom-card-size">
                  <div className="card-body">
                    <ul className="f-st ps-0">
                      <li className="list-group-item">
                        <Link to="#">
                          <IoStar className="fs-5 text-warning" />
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="#">
                          <IoStar className="fs-5 text-warning" />
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="#">
                          <IoStar className="fs-5 text-warning" />
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="#">
                          <IoStar className="fs-5 text-warning" />
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="#">
                          <IoStar className="fs-5 text-warning" />
                        </Link>
                      </li>
                    </ul>
                    <p className="card-text fs-6 ff-p ">
                      Working with Azooz Express has been a game-changer for
                      logistics operations. Their comprehensive services and
                      expertise in international shipments have allowed us to
                      expand our business globally with confidence.
                    </p>
                    <div
                      className="card flex-row border-0"
                      style={{ height: "5rem" }}
                    >
                      <div
                        className="card rounded-circle aling-items-center justify-content-center border-none overflow-hidden me-2 border-0"
                        style={{ width: "4rem", height: "4rem" }}
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          width="571"
                          height="520"
                          src={HomeTestAssetzk}
                          className="d-block w-100 h-100"
                          alt=""
                          sizes="(max-width: 571px) 100vw, 571px"
                        />
                      </div>
                      <div className="card ms-2 p-2 border-0">
                        <h5 className="card-title text-start ff-p fs-5">
                          Zafirah Khan
                        </h5>
                        <span className="card-title text-start ff-p fs-6">
                          Logistics Manager
                        </span>
                      </div>
                      <div className="ms-auto mt-auto">
                        <FaQuoteRight className="fs-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card custom-card-size">
                  <div className="card-body">
                    <ul className="f-st ps-0">
                      <li className="list-group-item">
                        <Link to="#">
                          <IoStar className="fs-5 text-warning" />
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="#">
                          <IoStar className="fs-5 text-warning" />
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="#">
                          <IoStar className="fs-5 text-warning" />
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="#">
                          <IoStar className="fs-5 text-warning" />
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="#">
                          <IoStar className="fs-5 text-warning" />
                        </Link>
                      </li>
                    </ul>
                    <p className="card-text fs-6 ff-p ">
                      They been our trusted delivery partner in Muscat for
                      years. Their meticulous handling of packages and
                      commitment to on-time delivery have played a crucial role
                      in the success of our e-commerce business.
                    </p>
                    <div
                      className="card flex-row border-0"
                      style={{ height: "5rem" }}
                    >
                      <div
                        className="card rounded-circle aling-items-center justify-content-center border-none overflow-hidden me-2 border-0"
                        style={{ width: "4rem", height: "4rem" }}
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          width="732"
                          height="668"
                          src={HomeAssetss}
                          className="d-block w-100 h-100"
                          alt=""
                          sizes="(max-width: 732px) 100vw, 732px"
                        />
                      </div>
                      <div className="card ms-2 p-2 border-0">
                        <h5 className="card-title text-start ff-p fs-5">
                          Syeda Samaera
                        </h5>
                        <span className="card-title text-start ff-p fs-6">
                          E-Commerce Store Owner
                        </span>
                      </div>
                      <div className="ms-auto mt-auto">
                        <FaQuoteRight className="fs-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card custom-card-size">
                  <div className="card-body">
                    <ul className="f-st ps-0">
                      <li className="list-group-item">
                        <Link to="#">
                          <IoStar className="fs-5 text-warning" />
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="#">
                          <IoStar className="fs-5 text-warning" />
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="#">
                          <IoStar className="fs-5 text-warning" />
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="#">
                          <IoStar className="fs-5 text-warning" />
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="#">
                          <IoStar className="fs-5 text-warning" />
                        </Link>
                      </li>
                    </ul>
                    <p className="card-text fs-6 ff-p ">
                      Choosingle Azooz Express as my courier service in Oman was
                      a great decision. Their international shipments always
                      arrive on time and in perfect condition, making them a
                      reliable partner for my business.
                    </p>
                    <div
                      className="card flex-row border-0"
                      style={{ height: "5rem" }}
                    >
                      <div
                        className="card rounded-circle aling-items-center justify-content-center border-none overflow-hidden me-2 border-0"
                        style={{ width: "4rem", height: "4rem" }}
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          width="626"
                          height="562"
                          src={HomeTestAssetmb}
                          className="d-block w-100 h-100"
                          alt=""
                          sizes="(max-width: 626px) 100vw, 626px"
                        />
                      </div>
                      <div className="card ms-2 p-2 border-0">
                        <h5 className="card-title text-start ff-p fs-5">
                          Mehjabin
                        </h5>
                        <span className="card-title text-start ff-p fs-6">
                          Individual Customer
                        </span>
                      </div>
                      <div className="ms-auto mt-auto">
                        <FaQuoteRight className="fs-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card custom-card-size">
                  <div className="card-body">
                    <ul className="f-st ps-0">
                      <li className="list-group-item">
                        <Link to="#">
                          <IoStar className="fs-5 text-warning" />
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="#">
                          <IoStar className="fs-5 text-warning" />
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="#">
                          <IoStar className="fs-5 text-warning" />
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="#">
                          <IoStar className="fs-5 text-warning" />
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="#">
                          <IoStar className="fs-5 text-warning" />
                        </Link>
                      </li>
                    </ul>
                    <p className="card-text fs-6 ff-p ">
                      I highly recommend Azooz Express for their exceptional
                      delivery services in Muscat. Their team ensures timely and
                      secure shipments, allowing me to confidently meet my
                      customers' expectations.
                    </p>
                    <div
                      className="card flex-row border-0"
                      style={{ height: "5rem" }}
                    >
                      <div
                        className="card rounded-circle aling-items-center justify-content-center border-none overflow-hidden me-2 border-0"
                        style={{ width: "4rem", height: "4rem" }}
                      >
                        <img
                          loading="lazy"
                          decoding="async"
                          width="370"
                          height="396"
                          src={HomeTestAssetim}
                          className="d-block w-100 h-100"
                          alt=""
                          sizes="(max-width: 370px) 100vw, 370px"
                        />
                      </div>
                      <div className="card ms-2 p-2 border-0">
                        <h5 className="card-title text-start ff-p fs-5">
                          Imran Mahmud
                        </h5>
                        <span className="card-title text-start ff-p fs-6">
                          Business Owner
                        </span>
                      </div>
                      <div className="ms-auto mt-auto">
                        <FaQuoteRight className="fs-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* screen slider end*/}
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
