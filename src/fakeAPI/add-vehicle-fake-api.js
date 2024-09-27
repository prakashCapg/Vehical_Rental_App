// services/fakeApi.js
const BASE_URL = "http://localhost:3001";

export const insertVehicle = async (vehicle) => {
  try {
    // Determine the endpoint based on vehicle type
    let endpoint;
    if (vehicle.type === "Car") {
      endpoint = `${BASE_URL}/carData`;
    } else if (vehicle.vehicleCategory === "Bike") {
      endpoint = `${BASE_URL}/bikeData`;
    } else if (vehicle.vehicleCategory === "Six-Seater") {
      endpoint = `${BASE_URL}/sixSeaterData`;
    } else {
      throw new Error("Invalid vehicle type");
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...vehicle, id: Date.now() }),
    });

    if (!response.ok) throw new Error("Failed to add vehicle");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
