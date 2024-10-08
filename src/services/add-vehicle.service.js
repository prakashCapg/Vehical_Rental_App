// services/add-vehicle.service.js
import { insertVehicle } from "../fakeAPI/add-vehicle-fake-api";

export const handleAddVehicle = async (vehicleData) => {
  try {
    const response = await insertVehicle(vehicleData);
    return response;
  } catch (error) {
    console.error("Error adding vehicle:", error);
    throw error; // Rethrow the error to handle it in the component
  }
};
