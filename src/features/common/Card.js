import React from "react";
import ImgTag from "./ImgTag";

function Card({
  cardTitle,
  cardText,
  imgUrl,
  altText,
  cardClassName,
  cardBodyClassName,
  cardTitleClassName,
  cardTextClassName,
  cardImgDivCName,
  customStyle,
}) {
  const cardCName = `card ${cardClassName || ""}`;
  const cardBodyCName = `card-body ${cardBodyClassName || ""}`;
  const cardTitleCName = `card-title ${cardTitleClassName || ""}`;
  const cardTextCName = `card-text ${cardTextClassName || ""}`;

  return (
    <>
      <div className={cardCName}>
        <div className={cardImgDivCName} style={customStyle}>
          <ImgTag img_url={imgUrl} alt_text={altText} />
        </div>
        <div className={cardBodyCName}>
          <h5 className={cardTitleCName}>{cardTitle}</h5>
          <p className={cardTextCName}>{cardText}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
