import React from "react";
import Card2 from "../Card2";
import { useNavigate } from "react-router-dom";

const CardWrapper = ({ cardData }) => {
  const navigate = useNavigate();

  const handlebutton = (id) => {
    navigate(`/vehicle/${id}`);
  };

  return (
    <div className="scrollbar scrollbar-thumb-yellow-400 scrollbar-track-sky-300 overflow-y-scroll">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  w-full sm:w-auto">
        {cardData.map((card, index) => (
          <Card2
            key={index}
            image={card.image}
            title={card.title}
            price={card.price}
            description={card.description}
            features={card.features}
            onClick={() => {
              handlebutton(card.id);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CardWrapper;
