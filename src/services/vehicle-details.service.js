import { GetVehicleDetailsById } from "../fakeAPI/vehicle-details-fake-api";

export function getVehicleById(vehicleId) {
  const vehicleDetails = GetVehicleDetailsById(vehicleId);

  if (vehicleDetails.error) {
    console.error(vehicleDetails.error);
    return null;
  }

  return vehicleDetails;
}
