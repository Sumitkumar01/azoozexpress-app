import React from "react";

function Ptag({pCName,cStyle,ptext}) {
  return (
    <>
      <p className={pCName} style={cStyle}>{ptext}</p>
    </>
  );
}

export default Ptag;
