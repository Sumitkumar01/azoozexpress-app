import React from "react";

function Row2ColumnCCt(
  otCol1Class,
  otCol2Class,
  otRowClass,
  inrRowClass,
  inrRowContent,
  col2Content
) {

  const otRClass = `row ${otRowClass || ""}`; 
  const inrRclass = `row ${inrRowClass || ""}`;
  return (
    <div>
      <div className={otRClass}>
        <div className={otCol1Class}>
          <div className={inrRclass}>{inrRowContent}</div>
        </div>
        <div className={otCol2Class}>{col2Content}</div>
      </div>
    </div>
  );
}

export default Row2ColumnCCt;
