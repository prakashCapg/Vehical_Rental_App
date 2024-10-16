import { useVehicleContext } from "../context/VehicleContext";
import { useBookingContext } from "../context/BookingContext";

export function useVehicleDetails(vehicleId, bookingId) {
  const { getVehicleDetailsById } = useVehicleContext();
  const { getBookingDetailsById } = useBookingContext();

  const vehicleDetails = getVehicleDetailsById(vehicleId);
  const bookingDetails = getBookingDetailsById(bookingId);

  if (!vehicleDetails) {
    console.error(`No vehicle found for ID: ${vehicleId}`);
    return { vehicleDetails: {}, bookingDetails: {} };
  }
  if (!bookingDetails) {
    console.error(`No booking found for ID: ${bookingId}`);
    return { vehicleDetails, bookingDetails: {} };
  }

  return { vehicleDetails, bookingDetails };
}
