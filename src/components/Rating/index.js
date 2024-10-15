import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ initialRating = 0, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRating = (value) => {
    const newRating = rating === value ? 0 : value;
    setRating(newRating);
    if (onRatingChange) onRatingChange(newRating);
  };

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((value) => (
        <FaStar
          key={value}
          className={`cursor-pointer ${
            value <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
          onClick={() => handleRating(value)}
          size={80}
        />
      ))}
    </div>
  );
};

export default Rating;
