import React, { useContext } from "react";
import Tabs from "../../components/Tabs";
import { vehicleData } from "../../services/vehicle-list.service";
import VehicleContext from "../../context/VehicleContext"; // Ensure correct import

const App = () => {
  const { vehicleType, pickupDate, returnDate } = useContext(VehicleContext);
  const tabs = ["Cars", "Bikes", "6-Seaters"];

  // Retrieve and organize vehicle data
  const allVehicleData = vehicleData() || [];

  const getVehicleDataByType = (type) =>
    allVehicleData.filter((vehicle) => vehicle.type === type);

  return (
    <div>
      <Tabs
        tabs={tabs}
        carData={getVehicleDataByType("car")}
        bikeData={getVehicleDataByType("bike")}
        sixSeaterData={getVehicleDataByType("six-seater")}
        vehicleType={vehicleType || "Cars"}
        pickupDate={pickupDate}
        returnDate={returnDate}
      />
    </div>
  );
};

export default App;
