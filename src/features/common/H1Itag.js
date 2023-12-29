import React from "react";

export default function H1Itag({
  header_text,
  className,
  spanClassName,
  span_text,
  customStyle,
}) {
  return (
    <>
      <h1 className={className} style={customStyle}>
        <i>
          <span className={spanClassName}>{span_text}</span>
          {header_text}
        </i>
      </h1>
    </>
  );
}
