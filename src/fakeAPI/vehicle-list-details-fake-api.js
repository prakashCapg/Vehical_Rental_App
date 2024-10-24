import VehicleData from "../Data/VehicleData.json";

export function GetVehicleDetailsDataFakeAPI() {
  const EmployeeVehicleList = localStorage.getItem("EmployeeVehicleList");

  const Employeevehicles = EmployeeVehicleList
    ? JSON.parse(EmployeeVehicleList)
    : VehicleData.VehicleData;
  localStorage.setItem("EmployeeVehicleList", JSON.stringify(Employeevehicles));
  return Employeevehicles;
}
