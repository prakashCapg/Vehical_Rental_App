import React, { useState } from "react";

import VehicleContext from "./VehicleContext";

const VehicleContextProvider = ({ children }) => {
  const [vehicleType, setVehicleType] = useState("");
  const [pickupDate, setPickUpDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  return (
    <VehicleContext.Provider
      value={{
        vehicleType,
        setVehicleType,
        pickupDate,
        setPickUpDate,
        returnDate,
        setReturnDate,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

export default VehicleContextProvider;
