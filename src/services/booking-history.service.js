import {
  cancelBookingFakeAPI,
  getBookingsFakeAPI,
} from "../fakeAPI/booking-history-fake-api";

export function getBookingHistory() {
  // make api call
  const bookingHistory = getBookingsFakeAPI();
  return bookingHistory;
}

export function cancelBooking(bookingId) {
  const result = cancelBookingFakeAPI(bookingId);
  return result;
}
