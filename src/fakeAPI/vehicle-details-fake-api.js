import { useVehicleContext } from "../context/VehicleContext";

export function useVehicleDetails(vehicleId, bookingId) {
  const { getVehicleDetailsById } = useVehicleContext();

  const vehicleDetails = getVehicleDetailsById(vehicleId);

  if (!vehicleDetails) {
    console.error(`No vehicle found for ID: ${vehicleId}`);
    return { vehicleDetails: {}, bookingDetails: {} };
  }

  return { vehicleDetails };
}
