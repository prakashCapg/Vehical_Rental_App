import { getVehicleDataFakeAPI } from "../fakeAPI/vehicle-list-fake-api";

export async function vehicleData() {
  // Make the API call and get all vehicle data
  const { carData, bikeData, sixSeaterData } = await getVehicleDataFakeAPI(); // Await the API call

  if (!carData || !bikeData || !sixSeaterData) {
    return []; // Handle case where data is null or not returned
  }

  // Combine all vehicle data into one array
  const allVehicleData = [...carData, ...bikeData, ...sixSeaterData];

  return allVehicleData;
}
