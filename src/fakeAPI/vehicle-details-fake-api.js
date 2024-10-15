import { useVehicleContext } from "../context/VehicleContext";

export function useVehicleDetails(vehicleId) {
  const { getVehicleDetailsById } = useVehicleContext();

  const vehicleDetails = getVehicleDetailsById(vehicleId);

  if (vehicleDetails.error) {
    console.error(vehicleDetails.error);
    return null;
  }

  return vehicleDetails;
}
