import VehicleData from "../Data/VehicleData.json";

export const archiveVehicle = async (id) => {
  const EmployeeVehicleList = localStorage.getItem("EmployeeVehicleList");

  let Employeevehicles = EmployeeVehicleList
    ? JSON.parse(EmployeeVehicleList)
    : VehicleData.VehicleData;

  Employeevehicles = Employeevehicles.map((vehicle) =>
    id === vehicle.id ? { ...vehicle, Archived: true } : vehicle
  );

  console.log(Employeevehicles);

  localStorage.setItem("EmployeeVehicleList", JSON.stringify(Employeevehicles));
};
