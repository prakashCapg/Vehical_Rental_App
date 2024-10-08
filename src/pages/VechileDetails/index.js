import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVehicleById } from "../../services/vehicle-details.service";

const VehicleDetails = () => {
  const { vehicleId } = useParams();
  const [vehicleDetails, setVehicleDetails] = useState(null);

  useEffect(() => {
    const details = getVehicleById(vehicleId);
    setVehicleDetails(details);
  }, [vehicleId]);

  if (!vehicleDetails) return <div>Loading...</div>;

  return (
    <div>
      <h1>
        {vehicleDetails.brand} {vehicleDetails.model}
      </h1>
      <p>Category: {vehicleDetails.category}</p>
      <p>Fuel Type: {vehicleDetails.fuelType}</p>
      <p>Rental Price per Hour: ${vehicleDetails.rentPricePerHour}</p>
    </div>
  );
};

export default VehicleDetails;
