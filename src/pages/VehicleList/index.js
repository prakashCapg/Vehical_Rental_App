import React from "react";
import { useNavigate } from "react-router-dom";
import Tabs from "../../components/Tabs";
import { vehicleData } from "../../services/vehicle-list.service";
import { useVehicleContext } from "../../context/VehicleContext";

const VehicleList = () => {
  const { vehicleType, pickupDate, returnDate } = useVehicleContext();
  const navigate = useNavigate();
  const tabs = ["Cars", "Bikes", "6-Seaters"];

  const allVehicleData = vehicleData() || [];
  console.log(allVehicleData);

  const handleVehicleClick = (id) => {
    navigate(`/user/vehicle-details/${id}`);
  };

  const getFilteredVehicleData = (type) => {
    const vehicleDataByType = allVehicleData.filter(
      (vehicle) => vehicle.type.toLowerCase() === type.toLowerCase()
    );

    return vehicleDataByType;
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
        onCardClick={handleVehicleClick}
      />
    </div>
  );
};

export default VehicleList;
