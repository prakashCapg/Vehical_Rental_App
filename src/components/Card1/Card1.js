import React from "react";
import "./Card1.css";

const Card1 = ({ imageSrc, altText, title, description }) => {
  return (
    <div className="card1">
      <div className="card1-image">
        <img src={imageSrc} alt={altText} />
      </div>
      <div className="card1-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card1;
