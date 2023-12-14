import React from "react";

function H2ITag({
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

export default H2ITag;
