import { GetVehicleDataFakeAPI } from "../fakeAPI/vehicle-list-fake-api";

export function vehicleData() {
  const vehiclesNotBooked = GetVehicleDataFakeAPI(); // Get the array directly

  // Combine all vehicle data into one array
  const allVehicleData = [...carData, ...bikeData, ...sixSeaterData];

  return allVehicleData;
}
