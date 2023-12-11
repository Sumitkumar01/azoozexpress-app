import React from 'react'

function H2tag({
  header_text,
  className,
  spanClassName,
  span_text_1,
  span_text_2,
  customStyle,
}) {
  return (
    <>
      <h2 className={className} style={customStyle}>
        <span className={spanClassName}>{span_text_1}</span>
        {header_text}
        <span className={spanClassName}>{span_text_2}</span>
      </h2>
    </>
  );
}

export default H2tag;