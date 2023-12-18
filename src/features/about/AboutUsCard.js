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

// Import Swiper styles
import "swiper/css";

function AboutUsCard() {
  // ------ card-1--------- //
  const cardTitleText_1 = "Vison";
  const cardText_1 =
    "We aim to simplify Logistics by providing top-notch delivery solutions and an unparalleled delivery services in GCC";
  const imgUrl_1 =
    "https://azoozexpress.com/wp-content/uploads/2023/07/noun-vision-1702965-1-1.png";
  const altText_1 = "eye_img";

  // ------ card-1-end--------- //

  //   ------------------------------------------------------------------------------------------ //

  // ------ card-2--------- //
  const cardTitleText_2 = "Mission";
  const cardText_2 =
    "We want to be the top choice for helping SME’S with their shipping and handling needs, by using automative delivery methods";
  const imgUrl_2 =
    "https://azoozexpress.com/wp-content/uploads/2023/07/Group-199-2.png";
  const altText_2 = "arrow_img";

  // ------ card-2-end--------- //

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
          <div className="col-6  rounded-2 ps-0 pb-4 ">
            <Card
              cardTitle={cardTitleText_1}
              cardText={cardText_1}
              imgUrl={imgUrl_1}
              altText={altText_1}
              cardClassName={cardCName}
              cardBodyClassName={cardBodyCName}
              cardTitleClassName={cardTitleCName}
              cardTextClassName={cardTextCName}
              cardImgClassName={cardImgDivCName}
              customStyle={cStyle}
            />
          </div>
          <div className="col-6  rounded-2 ps-0 pb-2">
            <Card
              cardTitle={cardTitleText_2}
              cardText={cardText_2}
              imgUrl={imgUrl_2}
              altText={altText_2}
              cardClassName={cardCName}
              cardBodyClassName={cardBodyCName}
              cardTitleClassName={cardTitleCName}
              cardTextClassName={cardTextCName}
              cardImgClassName={cardImgDivCName}
              customStyle={cStyle}
            />
          </div>
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
            }}
            className="ms-4"
          >
            <SwiperSlide>
              <Card
                cardTitle={cardTitleText_1}
                cardText={cardText_1}
                imgUrl={imgUrl_1}
                altText={altText_1}
                cardClassName={cardCName}
                cardBodyClassName={cardBodyCName}
                cardTitleClassName={cardTitleCName}
                cardTextClassName={cardTextCName}
                cardImgClassName={cardImgDivCName}
                customStyle={cStyle}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                cardTitle={cardTitleText_2}
                cardText={cardText_2}
                imgUrl={imgUrl_2}
                altText={altText_2}
                cardClassName={cardCName}
                cardBodyClassName={cardBodyCName}
                cardTitleClassName={cardTitleCName}
                cardTextClassName={cardTextCName}
                cardImgClassName={cardImgDivCName}
                customStyle={cStyle}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default AboutUsCard;
