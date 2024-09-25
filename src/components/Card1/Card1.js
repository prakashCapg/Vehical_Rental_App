import React from "react";
import "./Card1.css";

const Card1 = ({ imageSrc, altText, title, description }) => {
  return (
    <div className="image-description-container">
      <div className="image-container">
        <img src={imageSrc} alt={altText} />
      </div>
      <div className="description-container">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card1;
