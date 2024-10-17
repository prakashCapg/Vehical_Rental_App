import React, { createContext, useState } from "react";
import vehicleData from "../Data/VehicleData.json";

const VehicleContext = createContext();

const VehicleContextProvider = ({ children }) => {
  const [vehicleType, setVehicleType] = useState(null);

  const [totalHours, setTotalHours] = useState("");

  const [purchasePrice, setPurchasePrice] = useState(0);
  const [rentPricePerHour, setRentPricePerHour] = useState(0);
  const [imagePath, setImagePath] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [transmission, setTransmission] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [description, setDescription] = useState("");

  const getVehicleDetailsById = (vehicleId) => {
    const vehicleList = vehicleData.VehicleData || [];
    const vehicle = vehicleList.find((v) => v.id === vehicleId);

    if (!vehicle) {
      console.error("Vehicle not found");
      return { error: "Vehicle not found" };
    }

    return vehicle;
  };

  return (
    <VehicleContext.Provider
      value={{
        vehicleType,
        setVehicleType,

        totalHours,
        setTotalHours,

        purchasePrice,
        setPurchasePrice,
        rentPricePerHour,
        setRentPricePerHour,
        imagePath,
        setImagePath,
        category,
        setCategory,
        brand,
        setBrand,
        model,
        setModel,
        transmission,
        setTransmission,
        fuelType,
        setFuelType,
        description,
        setDescription,

        getVehicleDetailsById,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

export { VehicleContextProvider, VehicleContext };
