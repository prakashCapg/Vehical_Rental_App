import React, { useEffect, useState } from "react";
import "./Card1.css";
import Buttons from "../Buttons/Buttons";

export const handleImagePath = (imageSrc) => {
  try {
    return require(`../../Data/images/${imageSrc.split("/").pop()}`);
  } catch (error) {
    console.error("Image loading error:", error);
    return "";
  }
};

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
  onArchieve,
}) => {
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    const isBase64 = (str) => {
      return typeof str === "string" && str.startsWith("data:image/");
    };

    if (Array.isArray(imageSrc)) {
      const validBase64 = imageSrc.find(isBase64);
      if (validBase64) {
        setImagePath(validBase64);
      } else {
        setImagePath("");
      }
    } else if (typeof imageSrc === "string" && isBase64(imageSrc)) {
      setImagePath(imageSrc);
    } else {
      const img = handleImagePath(imageSrc);
      setImagePath(img);
    }
  }, [imageSrc]);

  return (
    <div className="image-description-container">
      <div className="image-description">
        <div className="image-container">
          <img src={imagePath} alt={altText} />
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
        <Buttons label="Archieve" onClick={onArchieve} />
      </div>
    </div>
  );
};

export default Card1;
