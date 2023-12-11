import React from "react";

function H2_i_Tag({
  header_text,
  className,
  spanClassName,
  span_text,
  customStyle,
}) {
  return (
    <>
      <h2 className={className} style={customStyle}>
        <i>
          <span className={spanClassName}>{span_text}</span>
          {header_text}
        </i>
      </h2>
    </>
  );
}

export default H2_i_Tag;
