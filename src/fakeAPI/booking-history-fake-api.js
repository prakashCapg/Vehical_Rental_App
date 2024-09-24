import { backendData } from "../backendData";

export function getBookingsFakeAPI() {
  return {
    bookings: backendData["bookings"],
  };
}

export function cancelBookingFakeAPI(bookingId) {
  const bookingIndex = backendData["bookings"].findIndex(
    (booking) => booking.id === bookingId
  );

  if (bookingIndex === -1) {
    return { success: false, message: "Booking not found." };
  }

  backendData["bookings"][bookingIndex].status = "Cancelled";

  return { success: true, message: "Booking successfully cancelled." };
}
