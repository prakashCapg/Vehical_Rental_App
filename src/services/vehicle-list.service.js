import { getvehicleDataFakeAPI } from "../fakeAPI/vehicle-list-fake-api";

export function vehicleData() {
  // Make the API call and get all vehicle data
  const { carData, bikeData, sixSeaterData } = getvehicleDataFakeAPI(); // Destructure the returned object

  // Combine all vehicle data into one array
  const allVehicleData = [...carData, ...bikeData, ...sixSeaterData];

  return allVehicleData;
}
