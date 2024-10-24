import VehicleData from "../Data/VehicleData.json";

export const handleUpdateVehicle = async (vehicleData) => {
  const EmployeeVehicleList = localStorage.getItem("EmployeeVehicleList");

  let Employeevehicles = EmployeeVehicleList
    ? JSON.parse(EmployeeVehicleList)
    : VehicleData.VehicleData;

  Employeevehicles = Employeevehicles.map((vehicle) =>
    vehicleData.id === vehicle.id ? { ...vehicleData } : vehicle
  );

  console.log(Employeevehicles);

  localStorage.setItem("EmployeeVehicleList", JSON.stringify(Employeevehicles));
};
