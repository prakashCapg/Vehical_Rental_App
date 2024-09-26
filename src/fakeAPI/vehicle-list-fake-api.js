const BASE_URL = "http://localhost:3001";

export const getVehicleDataFakeAPI = async () => {
  try {
    const [carResponse, bikeResponse, sixSeaterResponse] = await Promise.all([
      fetch(`${BASE_URL}/carData`),
      fetch(`${BASE_URL}/bikeData`),
      fetch(`${BASE_URL}/sixSeaterData`),
    ]);

    if (!carResponse.ok || !bikeResponse.ok || !sixSeaterResponse.ok) {
      throw new Error("Failed to fetch vehicle data");
    }

    const [carData, bikeData, sixSeaterData] = await Promise.all([
      carResponse.json(),
      bikeResponse.json(),
      sixSeaterResponse.json(),
    ]);

    return {
      carData,
      bikeData,
      sixSeaterData,
    };
  } catch (error) {
    console.error(error);
    return null; // or return an empty object as a fallback
  }
};
