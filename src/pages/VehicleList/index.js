import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Tabs from "../../components/Tabs";
import { vehicleData } from "../../services/vehicle-list.service";
import VehicleContext from "../../context/VehicleContext";

const VehicleList = () => {
  const { vehicleType, pickupDate, returnDate } = useContext(VehicleContext);
  const navigate = useNavigate();
  const tabs = ["Cars", "Bikes", "6-Seaters"];

  const allVehicleData = vehicleData() || [];
  console.log(allVehicleData);

  const getFilteredVehicleData = (type) => {
    const vehicleDataByType = allVehicleData.filter(
      (vehicle) => vehicle.type.toLowerCase() === type.toLowerCase()
    );

    return vehicleDataByType;
  };

  const handleCardClick = (vehicleId) => {
    navigate(`/user/vehicle-details/${vehicleId}`);
  };

  return (
    <div>
      <Tabs
        tabs={tabs}
        carData={getFilteredVehicleData("car")}
        bikeData={getFilteredVehicleData("bike")}
        sixSeaterData={getFilteredVehicleData("suv")}
        vehicleType={vehicleType || "Cars"}
        pickupDate={pickupDate}
        returnDate={returnDate}
        onCardClick={handleCardClick}
      />
    </div>
  );
};

export default VehicleList;
