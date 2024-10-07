import bookingData from '../data/bookingData.json'; 
export function updateBookingByIdFakeAPI(bookingId, updatedBooking) {

  const index = bookingData.bookings.findIndex(
    b => b.bookingId.toString() === bookingId.toString());

  if (index !== -1) {
    bookingData.bookings[index] = { ...bookingData.bookings[index], ...updatedBooking };

    return { success: true, booking: bookingData.bookings[index] };
  } else {
    return { success: false, error: "Booking not found" };
  }
}
