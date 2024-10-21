import React, { useState } from "react";
import Card2 from "../Card2";
import { useNavigate } from "react-router-dom";

const CardWrapper = ({ cardData }) => {
  const [VehicleSelected, setVehicleSelected] = useState(null);
  const navigate = useNavigate();
  const handlebutton = (id) => {
    navigate(`/user/vehicle-details/${id}`);
    setVehicleSelected(id);
  };

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full sm:w-auto overflow-y-auto"
      style={{
        maxHeight: "80vh",
        backgroundColor: "white",
      }}
    >
      {cardData.map((card, index) => (
        <Card2
          key={index}
          imagePath={card.imagePath}
          category={card.category}
          rentPricePerHour={card.rentPricePerHour}
          description={card.description}
          features={card.features}
          pickupDate={card.pickupDate}
          returnDate={card.returnDate}
          onClick={() => handlebutton(card.id)}
        />
      ))}
    </div>
  );
};

export default CardWrapper;
