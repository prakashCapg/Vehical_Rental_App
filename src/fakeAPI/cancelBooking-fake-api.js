import bookingData from "../Data/BookingData.json";

export function cancelBookingFakeAPI(bookingId) {
  const { Bookings } = bookingData;
  const foundBookingIndex = Bookings.findIndex(
    (booking) => booking.bookingId === bookingId
  );

  if (foundBookingIndex === -1) {
    return { success: false, message: "Booking not found." };
  }

  Bookings[foundBookingIndex].status = "Cancelled";

  return {
    success: true,
    message: "Booking successfully cancelled.",
    booking: Bookings[foundBookingIndex],
  };
}
