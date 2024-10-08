import React, { useEffect, useState } from "react";
import "./index.css";

const Card2 = ({
  imagePath,
  category,
  rentPricePerHour,
  description,
  onClick,
}) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const isBase64 = (str) => {
      return typeof str === "string" && str.startsWith("data:image/");
    };

    // If imageSrc is an array, find the first valid Base64 image
    if (Array.isArray(imagePath)) {
      const validBase64 = imagePath.find(isBase64);
      if (validBase64) {
        setImageSrc(validBase64); // Set the first valid Base64 image
      } else {
        setImageSrc(""); // Or a fallback if no valid Base64 found
      }
    } else if (typeof imagePath === "string" && isBase64(imagePath)) {
      setImageSrc(imagePath); // Set Base64 string directly
    } else {
      try {
        const img = require(`../../Data/images/${imagePath.split("/").pop()}`);
        setImageSrc(img);
      } catch (error) {
        console.error("Image loading error:", error);
        setImageSrc(""); // Set a fallback image if needed
      }
    }
  }, [imagePath]);

  return (
    <div className="card-container">
      <center>
        <div className="card">
          <img src={imageSrc} alt="" className="card-image" onClick={onClick} />
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
