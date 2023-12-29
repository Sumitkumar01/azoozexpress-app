import React from "react";
import H2tag from "../common/H2tag";
import ImgTag from "../common/ImgTag";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CCasset5 from "../../assets/CCasset5.png"
import CCasset6 from "../../assets/CCasset6.png"


function CCTestimonials() {
  const textAria = "Case studies";
  const textCN = "ff-m fs-2 fw-bold text-center text-red text-uppercase";
  const textAria2 = "Our successful projects";
  const textCN2 = "ff-m fs-2 fw-bold text-center text-warning text-uppercase";
  const imgUrl1 =CCasset5;
  const imgUrl2 =CCasset6;

  return (
    <div className="container p-lg-5 p-md-4" style={{ padding: "0" }}>
      <div
        className="container my-lg-5 testimonials my-md-4 my-sm-0 bg-black p-lg-2 pt-4"
        style={{ borderRadius: "1rem 1rem 1rem 3rem" }}
      >
        <div className="container my-lg-3 ">
          <H2tag header_text={textAria} className={textCN} />
        </div>
        <div className="container  ">
          <H2tag header_text={textAria2} className={textCN2} />
        </div>
        <div className="container">
          {/* desktop slider */}
          <div className="container my-4">
            <Swiper
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={false}
              modules={[Autoplay,  Navigation]}
              spaceBetween={10}
              slidesPerView={4}
              
              
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
                <ImgTag img_url={imgUrl1} alt_text={""} />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <ImgTag img_url={imgUrl2} alt_text={""} />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <ImgTag img_url={imgUrl1} alt_text={""} />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <ImgTag img_url={imgUrl2} alt_text={""} />
              </SwiperSlide>
            </Swiper>
          </div>
          {/* slider end*/}
        </div>
      </div>
    </div>
  );
}

export default CCTestimonials;
