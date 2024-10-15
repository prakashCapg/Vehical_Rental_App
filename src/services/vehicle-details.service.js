import { useVehicleDetails } from "../fakeAPI/vehicle-details-fake-api";

export function useGetVehicleById(vehicleId) {
  return useVehicleDetails(vehicleId);
}
