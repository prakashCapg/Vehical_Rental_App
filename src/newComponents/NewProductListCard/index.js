import React, { useEffect, useState } from "react";
import "./index.css";

const NewProductListCard = ({
  imagePath,
  category = "Car",
  rentPricePerHour = "500",
  description = "A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people over cargo. There are around one billion cars in use worldwide. The car is considered an essential part of the developed economy.",
  onClick,
}) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const isBase64 = (str) => {
      return typeof str === "string" && str.startsWith("data:image/");
    };

    if (Array.isArray(imagePath)) {
      const validBase64 = imagePath.find(isBase64);
      if (validBase64) {
        setImageSrc(validBase64);
      } else {
        setImageSrc("");
      }
    } else if (typeof imagePath === "string" && isBase64(imagePath)) {
      setImageSrc(imagePath);
    } else {
      try {
        const img = require(`../../Data/images/${imagePath.split("/").pop()}`);
        setImageSrc(img);
      } catch (error) {
        console.error("Image loading error:", error);
        setImageSrc("");
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

export default NewProductListCard;
