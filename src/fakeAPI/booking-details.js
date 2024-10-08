import BookingData from "../Data/BookingData.json";
import VehicleData from "../Data/VehiclesData.json";

export function getBookingsIdFakeAPI(bookingId) {
  const booking = BookingData.Bookings.find(
    (b) => b.bookingId.toString() === bookingId.toString()
  );

  if (booking) {
    return { success: true, bookings: booking };
  } else {
    return { success: false, error: "Booking ID not found" };
  }
}

export function getAllVehicleDetails() {
  return { success: true, vehicles: VehicleData.VehicleData };
}

export function getVehicleDetailsById(vehicleRef) {
  const vehicle = VehicleData.VehicleData.find(
    (vehicle) => vehicle.VehicleId.toString() === vehicleRef.toString()
  );

  if (vehicle) {
    return {
      success: true,
      vehicle,
    };
  } else {
    return {
      success: false,
      error: "vehicle id not found",
    };
  }
}
