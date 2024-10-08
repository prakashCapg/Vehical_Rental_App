import { deleteVehicleById } from "../fakeAPI/vehicle-delete-fake-api";

export const deleteVehicle = async (id) => {
  return await deleteVehicleById(id);
};
