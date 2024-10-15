import bookingData from "../Data/BookingData.json";
import vehicleData from "../Data/VehicleData.json";

export function modifyBookingFakeAPI(
  bookingId,
  updatedDetails,
  {
    setVehicleType,
    setPickUpDate,
    setReturnDate,
    setBookingAmount,
    setPurchasePrice,
    setRentPricePerHour,
  }
) {
  const bookingIndex = bookingData.Bookings.findIndex(
    (booking) => booking.bookingId === bookingId
  );

  if (bookingIndex === -1) {
    return { success: false, message: "Booking not found." };
  }

  const updatedBooking = {
    ...bookingData.Bookings[bookingIndex],
    ...updatedDetails,
  };

  bookingData.Bookings[bookingIndex] = updatedBooking;

  const vehicleId = updatedBooking.vehicleIdReference;

  const vehicleInfo = vehicleData.VehicleData.find(
    (vehicle) => vehicle.VehicleId === vehicleId
  );

  if (!vehicleInfo) {
    return {
      success: true,
      message: "Booking modified, but related vehicle not found.",
      booking: updatedBooking,
    };
  }

  setVehicleType(vehicleInfo.type);
  setPickUpDate(updatedBooking.pickupDate);
  setReturnDate(updatedBooking.returnDate);
  setBookingAmount(updatedBooking.bookingAmount);
  setPurchasePrice(vehicleInfo.purchasePrice);
  setRentPricePerHour(vehicleInfo.rentPricePerHour);

  return {
    success: true,
    message: "Booking successfully modified.",
    booking: updatedBooking,
    vehicle: vehicleInfo,
  };
}
