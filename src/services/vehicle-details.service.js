import {
  getVehicleDataFakeAPI,
  getVehicleDetailsById,
} from "../fakeAPI/vehicle-details-fake-api";

export function VehicleData() {
  const { vehicles } = getVehicleDataFakeAPI();
  return vehicles;
}

export function getVehicleById(VehicleId) {
  return getVehicleDetailsById(VehicleId);
}
