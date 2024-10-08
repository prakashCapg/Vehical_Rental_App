import React, { useEffect, useState } from "react";
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
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    const isBase64 = (str) => {
      return typeof str === "string" && str.startsWith("data:image/");
    };

    // If imageSrc is an array, find the first valid Base64 image
    if (Array.isArray(imageSrc)) {
      const validBase64 = imageSrc.find(isBase64);
      if (validBase64) {
        setImagePath(validBase64); // Set the first valid Base64 image
      } else {
        setImagePath(""); // Or a fallback if no valid Base64 found
      }
    } else if (typeof imageSrc === "string" && isBase64(imageSrc)) {
      setImagePath(imageSrc); // Set Base64 string directly
    } else {
      try {
        const img = require(`../../Data/images/${imageSrc.split("/").pop()}`);
        setImagePath(img);
      } catch (error) {
        console.error("Image loading error:", error);
        setImagePath(""); // Set a fallback image if needed
      }
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
      </div>
    </div>
  );
};

export default Card1;
