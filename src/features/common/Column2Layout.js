import React from 'react'

function Column2Layout({col1Content,col2Content ,rClass,col1Class,col2Class}) {

    const rowClass = `row ${rClass || ""}`;

  return (
    <>
      <div className={rowClass}>
        <div className={col1Class}>{col1Content}</div>
        <div className={col2Class}>{col2Content}</div>
      </div>
    </>
  );
}

export default Column2Layout