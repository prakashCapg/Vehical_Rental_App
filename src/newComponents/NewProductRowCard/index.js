import React, { useEffect, useState } from "react";
import "./index.css";
import NewButton from "../NewButton";
import { Pencil, Archive } from "lucide-react";
import NewRating from "../NewRating";

export const handleImagePath = (imageSrc) => {
  try {
    return require(`../../Data/images/${imageSrc.split("/").pop()}`);
  } catch (error) {
    console.error("Image loading error:", error);
    return "";
  }
};

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
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    const isBase64 = (str) => {
      return typeof str === "string" && str.startsWith("data:image/");
    };

    if (Array.isArray(imageSrc)) {
      const validBase64 = imageSrc.find(isBase64);
      if (validBase64) {
        setImagePath(validBase64);
      } else {
        setImagePath("");
      }
    } else if (typeof imageSrc === "string" && isBase64(imageSrc)) {
      setImagePath(imageSrc);
    } else {
      const img = handleImagePath(imageSrc);
      setImagePath(img);
    }
  }, [imageSrc]);

  return (
    <div className="N_image-description-container">
      <div className="N_image-description">
        <div className="N_image-container">
          <img src={imagePath} alt={altText} />
        </div>
        <div className="N_description-container">
          <strong className="N_description-heading">
            <h2>
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
