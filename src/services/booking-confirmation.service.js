import { newBookingFakeAPI } from "../fakeAPI/booking-confirmation-fake-api";

export function newBookingConfirmation(newBooking) {
  try {
    const bookingDetails = newBookingFakeAPI(newBooking);
    return bookingDetails;
  } catch (error) {
    console.error("Error fetching booking details:", error.message);
    return null;
  }
}
