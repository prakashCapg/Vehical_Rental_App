import { handleUpdateVehicle } from "../fakeAPI/vehicle-update-fake-api";

export const UpdateVehiclehandle = async (vehicleData) => {
  try {
    const response = await handleUpdateVehicle(vehicleData);
    return response;
  } catch (error) {
    console.error("Error adding vehicle:", error);
    throw error; // Rethrow the error to handle it in the component
  }
};
