import React, { useEffect, useState } from "react";
import "./index.css";
import NewButton from "../NewButton";
import { Pencil, Archive } from "lucide-react";
import NewRating from "../NewRating";

const NewProductRowCard = ({
  imageSrc,
  altText,
  brand,
  model,
  transmission,
  fuelType,
  description,
  category,
  purchasePrice,
  registrationNumber,
  rentPricePerHour,
  onUpdate,
  onArchieve,
}) => {
  return (
    <div className="N_image-description-container">
      <div className="N_image-description">
        <div className="N_image-container">
          <img src={imageSrc} alt={altText} />
        </div>
        <div className="N_description-container">
          <strong className="N_description-heading">
            <h2 className="N_heading">
              {brand} - {model}
            </h2>
            ({category})
          </strong>

          <p className="N_description">{description}</p>

          <p>
            <strong>Transmission : </strong>
            {transmission}
          </p>
          <p>
            <strong>Fuel Type : </strong>
            {fuelType}
          </p>
          <p>
            <strong>Purchase Price : </strong>${purchasePrice}
          </p>
          <p>
            <strong>Registration No : </strong>
            {registrationNumber}
          </p>
          <p>
            <strong>Rent Per Hour : </strong>${rentPricePerHour}
          </p>
        </div>
        <div className="N_vehicle-update-buttons">
          <NewRating className="N-rating-star" />
          <div className="N_update_buttons">
            <NewButton label={<Pencil size={30} />} onClick={onUpdate} />
            <NewButton label={<Archive size={30} />} onClick={onArchieve} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProductRowCard;
