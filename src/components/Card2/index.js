import React from "react";
import "./index.css";

const Card2 = ({
  imagePath,
  category,
  rentPricePerHour,
  description,
  onClick,
}) => {
  return (
    <div className="card-container">
      <center>
        <div className="card">
          <img
            src={require(`../../data/images/${imagePath.split("/").pop()}`)}
            alt=""
            className="card-image"
            onClick={onClick}
          />
          <div className="card-header">
            <h2 className="card-title">{category}</h2>
            <p className="card-price">${rentPricePerHour}/hour</p>
          </div>
          <div className="card-description">
            <p>{description}</p>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Card2;
