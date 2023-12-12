import React from "react";

function H3tag({ h3_text, className, customStyle }) {
  return (
    <>
      <h3 className={className} style={customStyle}>
        {h3_text}
      </h3>
    </>
  );
}

export default H3tag;
