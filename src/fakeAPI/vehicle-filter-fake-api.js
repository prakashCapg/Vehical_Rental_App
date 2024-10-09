export const filterVehicles = (
  vehicles,
  priceRange,
  selectedFuelTypes,
  selectedBrands
) => {
  return vehicles.filter((vehicle) => {
    const isWithinPriceRange =
      vehicle.purchasePrice >= priceRange[0] &&
      vehicle.purchasePrice <= priceRange[1];
    const isFuelTypeSelected =
      selectedFuelTypes.length === 0 ||
      selectedFuelTypes.includes(vehicle.fuelType);
    const isBrandSelected =
      selectedBrands.length === 0 || selectedBrands.includes(vehicle.brand);

    // Return true if all selected filters are met or no filters are selected
    return isWithinPriceRange && isFuelTypeSelected && isBrandSelected;
  });
};
