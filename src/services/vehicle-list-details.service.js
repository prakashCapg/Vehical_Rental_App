import { GetVehicleDetailsDataFakeAPI } from "../fakeAPI/vehicle-list-details-fake-api";

export function vehicleDetailsData() {
  const vehicles = GetVehicleDetailsDataFakeAPI();

  return vehicles;
}
