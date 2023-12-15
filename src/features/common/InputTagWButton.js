import React from "react";

function InputTagWButton({
  containerDCName,
  inpCName,
  btnDivCName,
  pcHolderText,
  inpType,
  inpStyle,
  btCName,
  btText,
  btType,
  btCStyle,
  containerDStyle,
}) {
  return (
    <>
     
        <div className={containerDCName} style={containerDStyle}>
          <input
            className={inpCName}
            placeholder={pcHolderText}
            type={inpType}
            style={inpStyle}
            aria-label={pcHolderText}
          />
          <div className={btnDivCName}>
            <button className={btCName} type={btType} style={btCStyle}>
              {btText}
            </button>
          </div>
        </div>
      
    </>
  );
}

export default InputTagWButton;
