const BASE_URL = "http://localhost:3001/VehiclesData";

export const deleteVehicleById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Error deleting vehicle ${errorData.message}`);
  }
};
