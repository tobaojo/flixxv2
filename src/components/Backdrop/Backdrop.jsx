import React from "react";
import "./Backdrop.css";

const Backdrop = ({ content, baseImageURL }) => {
  const width = "original";

  return (
    <div className="backdrop">
      <img src={`${baseImageURL + width + content.backdrop_path}`} alt="" />
    </div>
  );
};

export default Backdrop;
