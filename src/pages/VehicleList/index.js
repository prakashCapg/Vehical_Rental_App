import React, { useContext } from "react";
import Tabs from "../../components/Tabs";
import { vehicleData } from "../../services/vehicle-list.service";
import VehicleContext from "../../context/VehicleContext";

const App = () => {
  const { vehicleType, pickupDate, returnDate } = useContext(VehicleContext);
  const tabs = ["Cars", "Bikes", "6-Seaters"];

  const allVehicleData = vehicleData() || [];
  console.log(allVehicleData);

  const getFilteredVehicleData = (type) => {
    const vehicleDataByType = allVehicleData.filter(
      (vehicle) => vehicle.type.toLowerCase() === type.toLowerCase()
    );

    return vehicleDataByType; // Return filtered vehicles by type
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
      />
    </div>
  );
};

export default App;
