import React from "react";
import { Link } from "react-router-dom";

function Link({ linkUrl, cName, cStyle, dCName,content }) {
  return (
    <div className={dCName}>
      <Link to={linkUrl} className={cName} style={cStyle}>{content}</Link>
    </div>
  );
}

export default Link;
