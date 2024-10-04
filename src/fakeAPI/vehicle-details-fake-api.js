import VehicleData from "../data/VehicleData.json";

export const getVehicleDataFakeAPI = () => {
  return { vehicles: VehicleData.VehicleData };
};

export const getVehicleDetailsById = (VehicleId) => {
  const vehicle = VehicleData.VehicleData.find(
    (v) => v.VehicleId === VehicleId
  );
  return vehicle ? vehicle : null;
};
