import bookingData from "../Data/BookingData.json";
import vehicleData from "../Data/VehicleData.json";

export function getBookingsIdFakeAPI(bookingId) {
  const booking = bookingData.Bookings.find(
    (b) => b.bookingId.toString() === bookingId.toString()
  );

  if (booking) {
    return { success: true, bookings: booking };
  } else {
    return { success: false, error: "Booking ID not found" };
  }
}

export function getAllVehicleDetails() {
  return { success: true, vehicles: vehicleData.VehicleData };
}

export function getVehicleDetailsById(vehicleRef) {
  const vehicle = vehicleData.VehicleData.find(
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
