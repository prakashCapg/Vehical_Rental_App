import bookingData from '../data/bookingData.json'; 
export function updateBookingByIdFakeAPI(bookingId, updatedBooking) {
  const index = bookingData.Bookings.findIndex(
    (b) => b.bookingId.toString() === bookingId.toString()
  );

  if (index !== -1) {
    bookingData.Bookings[index] = { ...bookingData.Bookings[index], ...updatedBooking };
    return { success: true, booking: bookingData.Bookings[index] };
  } else {
    return { success: false, error: 'Booking not found' };
  }
}