import React from "react";

function SingleCardSlider(
  carouselId,
  carouselCName,
  carouselItem,
  indctClasname,
  indicatorsBtn,
  csbtname1,
) {
  return (
    <>
      <div
        id={carouselId}
        className={`carousel slide ${carouselCName}`}
        data-bs-rider="carousel"
      >
        <ul className={`carousel-indicators ${indctClasname}`}>
          {indicatorsBtn}
        </ul>
        <div className="carousel-inner">{carouselItem}</div>
        <button
          className={`carousel-control-prev ${csbtname1}`}
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className={`carousel-control-prev ${csbtname1}`}
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default SingleCardSlider;
