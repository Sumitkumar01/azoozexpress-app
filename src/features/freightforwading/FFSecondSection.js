import React from "react";
import H2tag from "../common/H2tag";
import FFas1 from "../../assets/FFas1.png";
import FFas2 from "../../assets/FFas2.png";
import FFas3 from "../../assets/FFas3.png";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function FFSecondSection() {
  const headerText = "What do we deliver?";
  const headerTextCN =
    "text-red text-uppercase text-center fw-bold ff-m fs-2";

  const imgurl = [
    { url: FFas1 },
    { url: FFas2 },
    { url: FFas3 },
    { url: FFas1 },
    { url: FFas2 },
    { url: FFas3 },
  ];

  return (
    <>
      <div className="container p-2 my-4">
        <div className="container ">
          <H2tag header_text={headerText} className={headerTextCN} />
        </div>
        <div className="container my-4 text-center">
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
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {imgurl.map((item, i) => (
              <SwiperSlide key={i}>
                <img
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="300"
                  src={item.url}
                  className="img-fluid 84"
                  alt="avtar"
                  sizes="(max-width: 300px) 100vw, 300px"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default FFSecondSection;
