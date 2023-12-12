import React from 'react'

function Img_tag({ img_url, alt_text }) {
  return (
    <>
      <img src={img_url} className="img-fluid" alt={alt_text} />
    </>
  );
}

export default Img_tag