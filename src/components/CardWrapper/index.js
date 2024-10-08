import React from "react";
import Card2 from "../Card2";
import { useNavigate } from "react-router-dom";

const CardWrapper = ({ cardData, onCardClick }) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full sm:w-auto overflow-y-auto"
      style={{
        maxHeight: "80vh",
        backgroundColor: "white",
      }}
    >
      {cardData.map((card) => (
        <Card2
          key={card.VehicleId}
          imagePath={card.imagePath}
          category={card.category}
          rentPricePerHour={card.rentPricePerHour}
          description={card.description}
          features={card.features}
          onClick={() => onCardClick(card.VehicleId)}
        />
      ))}
    </div>
  );
};

export default CardWrapper;
