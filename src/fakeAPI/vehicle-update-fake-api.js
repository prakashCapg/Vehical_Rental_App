const API_URL = "http://localhost:3001/VehicleData";

export const handleUpdateVehicle = async (vehicleData) => {
  const { id, ...data } = vehicleData;

  if (id) {
    // Update vehicle
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } else {
    // Create new vehicle
    console.log("Vehicle Update Failed");
  }
};
