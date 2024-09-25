import { backendData } from "../backendData";

export function getBookingsFakeAPI() {
  return {
    bookings: backendData["bookings"],
  };
}

export function getvehicleDataFakeAPI() {
  return {
    carData: backendData["carData"],
    bikeData: backendData["bikeData"],
    sixSeaterData: backendData["sixSeaterData"],
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

export function modifyBookingFakeAPI(bookingId, updatedDetails) {
  const bookingIndex = backendData["bookings"].findIndex(
    (booking) => booking.id === bookingId
  );

  if (bookingIndex === -1) {
    return { success: false, message: "Booking not found." };
  }

  backendData["bookings"][bookingIndex] = {
    ...backendData["bookings"][bookingIndex],
    ...updatedDetails,
  };

  return {
    success: true,
    message: "Booking successfully modified.",
    booking: backendData["bookings"][bookingIndex],
  };
}
