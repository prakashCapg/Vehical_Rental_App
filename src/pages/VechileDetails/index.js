// src/pages/VehicleDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import { getVehicleById } from "../../services/vehicle-details.service";

const VehicleDetails = () => {
  const { VehicleId } = useParams();
  const vehicle = getVehicleById(VehicleId);

  if (!vehicle) {
    return <div>Vehicle not at all found</div>;
  }

  return (
    <div className="vehicle-details">
      <img src={vehicle.imagePath} alt={`${vehicle.brand} ${vehicle.model}`} />
      <h2>{`${vehicle.brand} ${vehicle.model}`}</h2>
      <p>{vehicle.description}</p>
      <p>Fuel Type: {vehicle.fuelType}</p>
      <p>Rent Price per Hour: ${vehicle.rentPricePerHour}</p>
    </div>
  );
};

export default VehicleDetails;
