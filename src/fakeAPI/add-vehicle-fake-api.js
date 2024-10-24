import VehicleData from "../Data/VehicleData.json";

export const insertVehicle = async (vehicle) => {
  const EmployeeVehicleList = localStorage.getItem("EmployeeVehicleList");

  const Employeevehicles = EmployeeVehicleList
    ? JSON.parse(EmployeeVehicleList)
    : VehicleData.VehicleData;

  console.log(Employeevehicles);
  const newVehicleId = Employeevehicles.length + 1;
  const newVehicle = Object.assign(vehicle, { VehicleId: newVehicleId });
  Employeevehicles.push(newVehicle);
  localStorage.setItem("EmployeeVehicleList", JSON.stringify(Employeevehicles));
};
