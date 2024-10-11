const BASE_URL = "http://localhost:3001/VehicleData";

export const archiveVehicle = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ archived: true }),
  });

  if (!response.ok) {
    throw new Error("Failed to archive vehicle");
  }

  return await response.json();
};
