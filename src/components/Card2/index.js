import React from "react";
import "./index.css";

const Card2 = ({ image, title, rentPrice, description, onClick }) => {
  return (
    <div className="card-container">
      <center>
        <div className="card">
          <img src={image} alt="" className="card-image" onClick={onClick} />
          <div className="card-header">
            <h2 className="card-title">{title}</h2>
            <p className="card-price">${rentPrice}/hour</p>
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
