import VehicleData from "../data/VehicleData.json";

export function GetVehicleDetailsById(vehicleId) {
  const vehicles = VehicleData.VehicleData;

  const vehicleDetails = vehicles.find(
    (vehicle) => vehicle.VehicleId === vehicleId
  );

  if (vehicleDetails) {
    return vehicleDetails;
  } else {
    return { error: "Vehicle not found" };
  }
}
