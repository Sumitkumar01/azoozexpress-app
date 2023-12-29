import React from "react";
import Serv1 from "../../../assets/Serv1.png";
import Serv2 from "../../../assets/Serv2.png";
import Serv3 from "../../../assets/serv3.png";
import Serv4 from "../../../assets/serv4.png";
import Serv5 from "../../../assets/Serv5.png";
import Serv6 from "../../../assets/Serv6.png";
import Serv7 from "../../../assets/Serv7.png";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Service() {
  const imgurl = [
    { url: Serv1 },
    { url: Serv2 },
    { url: Serv3 },
    { url: Serv4 },
    { url: Serv5 },
    { url: Serv6 },
    { url: Serv7 },
  ];
  return (
    <div>
      {/* <!-- our services --> */}
      <section className="container mt-3 p-lg-3 p-md-3">
        <div className="text-center">
          <h2 className="fw-bolder fs-1 ff-m">
            OUR <span className="text-danger"> SERVICES</span>
          </h2>
        </div>
      </section>
      {/* <!-- our services img --> */}
      <div className="container d-none d-sm-none d-md-none d-lg-block">
        <section>
          <div className="row justify-content-center">
            <div className="col-lg-4 p-2">
              <div className="d-flex justify-content-center">
                <img
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="300"
                  src={Serv1}
                  className="img-fluid "
                  alt=""
                  sizes="(max-width: 300px) 100vw, 300px"
                />
              </div>
            </div>
            <div className="col-lg-4 p-2">
              <div className="d-flex justify-content-center">
                <img
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="300"
                  src={Serv2}
                  className="img-fluid 90"
                  alt=""
                  sizes="(max-width: 300px) 100vw, 300px"
                />
              </div>
            </div>
            <div className="col-lg-4 p-2">
              <div className="d-flex justify-content-center">
                <img
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="300"
                  src={Serv3}
                  className="img-fluid 89"
                  alt=""
                  sizes="(max-width: 300px) 100vw, 300px"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row justify-content-center">
            <div className="col-lg-4 p-2">
              <div className="d-flex justify-content-center">
                <img
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="300"
                  src={Serv4}
                  className="img-fluid 88"
                  alt=""
                  sizes="(max-width: 300px) 100vw, 300px"
                />
              </div>
            </div>
            <div className="col-lg-4 p-2">
              <div className="d-flex justify-content-center">
                <img
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="300"
                  src={Serv5}
                  className="img-fluid 87"
                  alt=""
                  sizes="(max-width: 300px) 100vw, 300px"
                />
              </div>
            </div>
            <div className="col-lg-4 p-2">
              <div className="d-flex justify-content-center">
                <img
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="300"
                  src={Serv6}
                  className="img-fluid 86"
                  alt=""
                  sizes="(max-width: 300px) 100vw, 300px"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row justify-content-center">
            <div className="col-lg-4 p-2">
              <div className="d-flex justify-content-center">
                <img
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="300"
                  src={Serv7}
                  className="img-fluid 85"
                  alt=""
                  sizes="(max-width: 300px) 100vw, 300px"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* desktop slider */}
      <div className="container my-4  d-sm-block d-lg-none d-md-block text-center">
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
          }}
        >
          {imgurl.map((item,i)=>(<SwiperSlide key={i}>
            <img
              loading="lazy"
              decoding="async"
              width="300"
              height="300"
              src={item.url}
              className="img-fluid 84"
              alt=""
              sizes="(max-width: 300px) 100vw, 300px"
            />
          </SwiperSlide>))}
          
        </Swiper>
      </div>
    </div>
  );
}

export default Service;
