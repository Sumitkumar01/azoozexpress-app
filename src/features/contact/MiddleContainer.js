import React from "react";
import Row2ColumnCCt from "../common/Row2ColumnCCt";
import H2tag from "../common/H2tag";
import Img_tag from "../common/Img_tag";

function MiddleContainer() {
  const otCol1Class = "col-lg-6";
  const otCol2Class = "col-lg-6";
  const otRowClass = "d-flex";
  const inrRowClass = "d-flex";

  const header_text = "Get a free quote";
  const className = "text-Uppercase fs-2 fw-bold ff-m";

  const imgUrl = "https://azoozexpress.com/wp-content/uploads/2023/07/1-1.png";
  const altText = "Avatar image";

  const inrRowContent = () => {
    return (
      <>
        <div className="col-12">
          <H2tag header_text={header_text} className={className} />
        </div>
        <div className="col-12">
          <div className="row flex-column">
            <div className="col-12">
                <input></input>
            </div>
            <div className="col-12">
                <input></input>
            </div>
            <div className="col-12">
                <inpu></inpu>
            </div>
          </div>
        </div>
      </>
    );
  };
  const col2Content = () => {
    return (
      <div>
        <Img_tag img_url={imgUrl} alt_text={altText} />
      </div>
    );
  };

  return (
    <>
      <div className="container bg-warning rounded-2">
        <Row2ColumnCCt
          otCol1Class={otCol1Class}
          otCol2Class={otCol2Class}
          otRowClass={otRowClass}
          inrRowClass={inrRowClass}
          inrRowContent={inrRowContent}
          col2Content={col2Content}
        />
      </div>
    </>
  );
}

export default MiddleContainer;
