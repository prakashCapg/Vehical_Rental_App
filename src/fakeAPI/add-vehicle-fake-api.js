const BASE_URL = "http://localhost:3001/VehicleData";

export const insertVehicle = async (vehicle) => {
  try {
    const existingVehiclesResponse = await fetch(BASE_URL);
    if (!existingVehiclesResponse.ok)
      throw new Error("Failed to fetch existing vehicles");

    const existingVehicles = await existingVehiclesResponse.json();

    const newVehicleId = Array.isArray(existingVehicles)
      ? existingVehicles.length + 1
      : 1;

    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...vehicle, VehicleId: newVehicleId }),
    });

    if (!response.ok) throw new Error("Failed to add vehicle");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
