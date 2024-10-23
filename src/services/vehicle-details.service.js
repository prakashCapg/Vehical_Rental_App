import { useVehicleDetails } from "../fakeAPI/vehicle-details-fake-api";

export function useGetVehicleById(vehicleId, bookingId) {
  return useVehicleDetails(vehicleId, bookingId);
}
