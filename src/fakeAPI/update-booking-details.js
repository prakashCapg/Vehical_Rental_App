import bookingData from "../Data/BookingData.json";
export function updateBookingByIdFakeAPI(bookingId, updatedBooking) {
  const index = BookingData.Bookings.findIndex(
    (b) => b.bookingId.toString() === bookingId.toString()
  );

  if (index !== -1) {
    bookingData.Bookings[index] = {
      ...bookingData.Bookings[index],
      ...updatedBooking,
    };
    return { success: true, booking: bookingData.Bookings[index] };
  } else {
    return { success: false, error: "Booking not found" };
  }
}
