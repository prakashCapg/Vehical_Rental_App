import { GetVehicleDataFakeAPI } from "../fakeAPI/vehicle-list-fake-api";

export function vehicleData() {
  const vehiclesNotBooked = GetVehicleDataFakeAPI(); // Get the array directly

  return vehiclesNotBooked; // Return the array of vehicles
}
