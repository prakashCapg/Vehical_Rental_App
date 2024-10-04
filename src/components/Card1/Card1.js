import React from "react";
import "./Card1.css";

const Card2 = ({
  imagePath,
  category,
  rentPricePerHour,
  description,
  features,
  onClick,
}) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={imagePath} alt={category} />
      <h3>{category}</h3>
      <p>Rent: ${rentPricePerHour}/hr</p>
      <p>{description}</p>
      <ul>
        {features &&
          features.map((feature, index) => <li key={index}>{feature}</li>)}
      </ul>
    </div>
  );
};

export default Card2;
