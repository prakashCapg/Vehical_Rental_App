import React from "react";
import "./Card1.css";

const Card = ({ imageSrc, altText, title, description }) => {
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

const Card1 = () => {
  const items = [
    {
      imageSrc: "https://via.placeholder.com/150",
      altText: "Placeholder Image 1",
      title: "Vehicle 1",
      description: "This is a description for Vehicle 1.",
    },
    {
      imageSrc: "https://via.placeholder.com/150",
      altText: "Placeholder Image 2",
      title: "Vehicle 2",
      description: "This is a description for Vehicle 2.",
    },
  ];

  return (
    <div>
      {items.map((item, index) => (
        <Card
          key={index}
          imageSrc={item.imageSrc}
          altText={item.altText}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Card1;
