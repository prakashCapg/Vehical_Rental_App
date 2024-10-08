import BookingData from "../Data/BookingData.json";
export function updateBookingByIdFakeAPI(bookingId, updatedBooking) {
  const index = BookingData.Bookings.findIndex(
    (b) => b.bookingId.toString() === bookingId.toString()
  );

  if (index !== -1) {
    BookingData.Bookings[index] = {
      ...BookingData.Bookings[index],
      ...updatedBooking,
    };
    return { success: true, booking: BookingData.Bookings[index] };
  } else {
    return { success: false, error: "Booking not found" };
  }
}
