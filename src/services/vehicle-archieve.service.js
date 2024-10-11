import { archiveVehicle } from "../fakeAPI/vehicle-archieve-fake-api";

export const VehicleArchieveById = async (id) => {
  return await archiveVehicle(id);
};
