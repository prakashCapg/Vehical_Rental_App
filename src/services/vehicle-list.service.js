import { GetVehicleDataFakeAPI } from "../fakeAPI/vehicle-list-fake-api";

export function vehicleData() {
  const vehiclesNotBooked = GetVehicleDataFakeAPI();

  return vehiclesNotBooked;
}
