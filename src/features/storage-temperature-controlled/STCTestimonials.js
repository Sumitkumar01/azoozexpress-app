import React from "react";
import H2tag from "../common/H2tag";
import ImgTag from "../common/ImgTag";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import SerVTestIm from "../../assets/SerVTestIm.png"
import SerVTestmh from "../../assets/SerVTestmh.png"

function STCTestimonials() {
  const textAria = "Testimonials";
  const textCN =
    "ff-m fs-2 fw-bold text-center text-warning text-uppercase";
  const textAria2 = "Hear it from our customes!";
  const textCN2 = "ff-m fs-2 fw-bold text-center text-danger text-uppercase";
  const imgUrl1 =SerVTestIm;
  const imgUrl2 =SerVTestmh;




  return (
    <div className="container p-lg-5 p-md-4" style={{ padding: "0" }}>
      <div
        className="container my-lg-5 testimonials my-md-4 my-sm-0 bg-black p-lg-2 pt-4"
        style={{ borderRadius: "1rem 1rem 1rem 3rem" }}
      >
        <div className="container my-lg-4 ">
          <H2tag header_text={textAria} className={textCN} />
        </div>
        <div className="container  ">
          <H2tag header_text={textAria2} className={textCN2} />
        </div>
        <div className="container">
          {/*  slider */}
          <div className="container my-4 ">
            <Swiper
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
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
        </div>
      </div>
    </div>
  );
}

export default STCTestimonials;
