import React from "react";
import "./index.css";
import Buttons from "../../components/button/Buttons";
import Card1 from "../../components/Card1/Card1";
import { vehicleDetailsData } from "../../services/vehicle-list-details.service";
import { Filter } from "lucide-react";

const index = () => {
  const vehicles = vehicleDetailsData();
  return (
    <div className="vehicles">
      <div className="vehicleFilters"></div>
      <div className="vehicleDetails">
        <div className="vehicle-create">
          <Filter className="vehiclefilter" />
          <Buttons label="Create" />
        </div>
        <div className="vehicle-update-container">
          {vehicles.map((card, index) => (
            <div className="vehicle-update">
              <div className="vehicle-details">
                <Card1
                  key={index}
                  imageSrc={card.imagePath}
                  brand={card.brand}
                  model={card.model}
                  fuelType={card.fuelType}
                  transmission={card.transmission}
                  description={card.description}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
