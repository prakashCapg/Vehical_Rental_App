import VehicleData from "../Data/VehicleData.json";

export function GetVehicleDetailsDataFakeAPI() {
  const EmployeeVehicleList = localStorage.getItem("EmployeeVehicleList");

  const vehicles = EmployeeVehicleList
    ? JSON.parse(EmployeeVehicleList)
    : VehicleData.VehicleData;

  return vehicles;
}
