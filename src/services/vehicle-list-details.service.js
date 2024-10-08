import { GetVehicleDetailsDataFakeAPI } from "../fakeAPI/vehicle-list-details-fake-api";

export function vehicleDetailsData() {
  const vehicles = GetVehicleDetailsDataFakeAPI(); // Get the array directly

  return vehicles; // Return the array of vehicles
}
