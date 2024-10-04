import React from "react";
import "./Card1.css";
import Buttons from "../button/Buttons";

const Card1 = ({
  imageSrc,
  altText,
  brand,
  model,
  transmission,
  fuelType,
  description,
  onUpdate,
  onDelete,
}) => {
  return (
    <div className="image-description-container">
      <div className="image-description">
        <div className="image-container">
          <img
            src={require(`../../Data/images/${imageSrc.split("/").pop()}`)}
            alt={altText}
          />
        </div>
        <div className="description-container">
          <p>{description}</p>
          <p>Brand : {brand}</p>
          <p>Model : {model}</p>
          <p>Transmission : {transmission}</p>
          <p>Fuel Type : {fuelType}</p>
        </div>
      </div>
      <div className="vehicle-update-buttons">
        <Buttons label="Update" onClick={onUpdate} />
        <Buttons label="Delete" onClick={onDelete} />
      </div>
    </div>
  );
};

export default Card1;
