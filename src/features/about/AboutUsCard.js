import React from "react";
import Card from "../common/Card.js";
import {
  Autoplay,
  Navigation,
  Pagination,
  // Scrollbar,
  // A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Aboutasset1 from "../../assets/Aboutasset1.png";
import Aboutasset2 from "../../assets/Aboutasset2.png";

// Import Swiper styles
import "swiper/css";

function AboutUsCard() {
  const data = [
    {
      cardTitleText: "Vison",
      cardText:
        "We aim to simplify Logistics by providing top-notch delivery solutions and an unparalleled delivery services in GCC",
      imgUrl: Aboutasset1,
      altText: "eye_img",
    },
    {
      cardTitleText: "Mission",
      cardText:
        "We want to be the top choice for helping SME’S with their shipping and handling needs, by using automative delivery methods",
      imgUrl: Aboutasset2,
      altText: "arrow_img",
    },
  ];
  //   ------------------------------------------------------------------------------------------ //

  // -------cardClassName--------//

  const cardCName = "pb-2 mb-5 me-4 bg-warning aling-items-center py-3 px-2";
  const cardBodyCName = "mb-5 mx-lg-5";
  const cardTitleCName = "ff-m fw-bolder fs-1 text-center p-0";
  const cardTextCName = "ff-p fs-6 text-center  lh-base p-0";
  const cardImgDivCName =
    "d-flex aling-items-center justify-content-center m-auto";

  // me-lg-4 me-md-2 ms-lg-0 ms-md-2
  //   ---------------coustem-style------------------ //

  const cStyle = {
    width: "100px",
    height: "120px",
    margin: "auto",
  };

  return (
    <>
      <div className="container d-none d-sm-none d-md-block d-lg-block">
        <div className="row aling-items-center justify-content-center ms-2">
          {data.map((item, i) => (
            <div className="col-6  rounded-2 ps-0 pb-4 " key={i}>
              <Card
                cardTitle={item.cardTitleText}
                cardText={item.cardText}
                imgUrl={item.imgUrl}
                altText={item.altText}
                cardClassName={cardCName}
                cardBodyClassName={cardBodyCName}
                cardTitleClassName={cardTitleCName}
                cardTextClassName={cardTextCName}
                cardImgClassName={cardImgDivCName}
                customStyle={cStyle}
              />
            </div>
          ))}
        </div>
      </div>

      {/* slider for mobile device */}
      <div className="container  d-sm-block d-md-none d-lg-none">
        <div className="container my-4 pe-2 d-sm-block d-lg-none d-md-none">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
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
            }}
            className="ms-4"
          >
            {data.map((item, i) => (
              <SwiperSlide>
                <Card
                  cardTitle={item.cardTitleText}
                  cardText={item.cardText}
                  imgUrl={item.imgUrl}
                  altText={item.altText}
                  cardClassName={cardCName}
                  cardBodyClassName={cardBodyCName}
                  cardTitleClassName={cardTitleCName}
                  cardTextClassName={cardTextCName}
                  cardImgClassName={cardImgDivCName}
                  customStyle={cStyle}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default AboutUsCard;
