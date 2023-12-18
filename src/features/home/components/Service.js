import React from "react";
import {
  Autoplay,
  Navigation,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Service() {
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
                  src="https://azoozexpress.com/wp-content/uploads/2023/07/01-300x300.png"
                  className="img-fluid 84"
                  alt=""
                  srcset="
                      https://azoozexpress.com/wp-content/uploads/2023/07/01-300x300.png 300w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/01-150x150.png 150w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/01.png         411w
                    "
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
                  src="https://azoozexpress.com/wp-content/uploads/2023/07/02-300x300.png"
                  className="img-fluid 90"
                  alt=""
                  srcset="
                      https://azoozexpress.com/wp-content/uploads/2023/07/02-300x300.png 300w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/02-150x150.png 150w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/02.png         411w
                    "
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
                  src="https://azoozexpress.com/wp-content/uploads/2023/07/03-300x300.png"
                  className="img-fluid 89"
                  alt=""
                  srcset="
                      https://azoozexpress.com/wp-content/uploads/2023/07/03-300x300.png 300w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/03-150x150.png 150w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/03.png         411w
                    "
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
                  src="https://azoozexpress.com/wp-content/uploads/2023/07/04-300x300.png"
                  className="img-fluid 88"
                  alt=""
                  srcset="
                      https://azoozexpress.com/wp-content/uploads/2023/07/04-300x300.png 300w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/04-150x150.png 150w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/04.png         411w
                    "
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
                  src="https://azoozexpress.com/wp-content/uploads/2023/07/05-300x300.png"
                  className="img-fluid 87"
                  alt=""
                  srcset="
                      https://azoozexpress.com/wp-content/uploads/2023/07/05-300x300.png 300w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/05-150x150.png 150w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/05.png         411w
                    "
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
                  src="https://azoozexpress.com/wp-content/uploads/2023/07/06-300x300.png"
                  className="img-fluid 86"
                  alt=""
                  srcset="
                      https://azoozexpress.com/wp-content/uploads/2023/07/06-300x300.png 300w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/06-150x150.png 150w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/06.png         411w
                    "
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
                  src="https://azoozexpress.com/wp-content/uploads/2023/07/07-300x300.png"
                  className="img-fluid 85"
                  alt=""
                  srcset="
                      https://azoozexpress.com/wp-content/uploads/2023/07/07-300x300.png 300w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/07-150x150.png 150w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/07.png         414w
                    "
                  sizes="(max-width: 300px) 100vw, 300px"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* desktop slider */}
      <div className="container my-4  d-sm-block d-lg-none d-md-block">
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
          className="ms-3"
        >
          <SwiperSlide>
            {" "}
            <img
              loading="lazy"
              decoding="async"
              width="300"
              height="300"
              src="https://azoozexpress.com/wp-content/uploads/2023/07/01-300x300.png"
              className="img-fluid 84"
              alt=""
              srcset="
                      https://azoozexpress.com/wp-content/uploads/2023/07/01-300x300.png 300w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/01-150x150.png 150w,
                      https://azoozexpress.com/wp-content/uploads/2023/07/01.png         411w
                    "
              sizes="(max-width: 300px) 100vw, 300px"
            />{" "}
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img
              src="https://azoozexpress.com/wp-content/uploads/2023/07/02-300x300.png"
              className="img-fluid"
              alt=""
            />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img
              src="https://azoozexpress.com/wp-content/uploads/2023/07/03-300x300.png"
              className="img-fluid"
              alt=""
            />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img
              src="https://azoozexpress.com/wp-content/uploads/2023/07/04-300x300.png"
              className="img-fluid"
              alt=""
            />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img
              src="https://azoozexpress.com/wp-content/uploads/2023/07/05-300x300.png"
              className="img-fluid"
              alt=""
            />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img
              src="https://azoozexpress.com/wp-content/uploads/2023/07/06-300x300.png"
              className="img-fluid"
              alt=""
            />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img
              src="https://azoozexpress.com/wp-content/uploads/2023/07/07-300x300.png"
              className="img-fluid "
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Service;
