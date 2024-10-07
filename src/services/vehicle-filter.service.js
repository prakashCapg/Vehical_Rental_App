// src/services/vehicleService.js
import { filterVehicles } from "../fakeAPI/vehicle-filter-fake-api";

export const getFilteredVehicles = (
  vehicles,
  priceRange,
  selectedFuelTypes,
  selectedBrands
) => {
  // Fetching the vehicle data
  return filterVehicles(
    vehicles,
    priceRange,
    selectedFuelTypes,
    selectedBrands
  );
};
