import { useContext } from "react";
import { VehicleContext } from "./VehicleContextProvider";

export const useVehicleContext = () => {
  return useContext(VehicleContext);
};

export default VehicleContext;
