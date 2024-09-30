import React, { useContext, useState, useEffect } from "react";
import Tabs from "../../components/Tabs";
import { vehicleData } from "../../services/vehicle-list.service";
import VehicleContext from "../../context/VehicleContext"; // Ensure correct import

// Helper function to convert date strings into Date objects for comparison
const parseDate = (dateStr) => new Date(dateStr);

// Function to filter vehicles by type (car, bike, six-seater) and date range
const filterVehiclesByDate = (vehicles, startDate, endDate) => {
  const parsedStartDate = parseDate(startDate);
  const parsedEndDate = parseDate(endDate);

  return vehicles.filter((vehicle) => {
    const vehiclePickupDate = parseDate(vehicle.pickupDate);
    const vehicleReturnDate = parseDate(vehicle.returnDate);

    // Check if the vehicle is available and the requested date range
    // fits within the vehicle's availability period
    return (
      vehicle.status === "Available" &&
      parsedStartDate >= vehiclePickupDate &&
      parsedEndDate <= vehicleReturnDate
    );
  });
};

const App = () => {
  const { vehicleType, pickupDate, returnDate } = useContext(VehicleContext);
  const [allVehicleData, setAllVehicleData] = useState([]);
  const tabs = ["Car", "Bike", "Six-Seater"];

  // Retrieve and organize vehicle data

  useEffect(() => {
    const fetchData = async () => {
      const data = await vehicleData();
      setAllVehicleData(data);
    };

    fetchData().catch(console.error); // Catch any errors from fetchData
  }, []);

  // Conditionally filter the vehicles based on the date range selected in the context
  const getFilteredVehicleData = (type) => {
    const vehicleDataByType = allVehicleData.filter(
      (vehicle) => vehicle.type === type
    );
    // If pickupDate and returnDate are present, filter vehicles by date
    if (pickupDate && returnDate) {
      return filterVehiclesByDate(vehicleDataByType, pickupDate, returnDate);
    }
    // If no dates are selected, return all vehicles of the given type
    return vehicleDataByType;
  };

  return (
    <div>
      <Tabs
        tabs={tabs}
        carData={getFilteredVehicleData("Car")}
        bikeData={getFilteredVehicleData("Bike")}
        sixSeaterData={getFilteredVehicleData("Six-Seater")}
        vehicleType={vehicleType || "Car"}
        pickupDate={pickupDate}
        returnDate={returnDate}
      />
    </div>
  );
};

export default App;
