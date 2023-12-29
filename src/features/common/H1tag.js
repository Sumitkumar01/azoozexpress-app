import React from 'react'

function H1tag({
  header_text,
  className,
  spanClassName,
  span_text_1,
  span_text_2,
  customStyle,
}) {
  return (
    <>
      <h1 className={className} style={customStyle}>
        <span className={spanClassName}>{span_text_1}</span>
        {header_text}
        <span className={spanClassName}>{span_text_2}</span>
      </h1>
    </>
  );
}

export default H1tag;