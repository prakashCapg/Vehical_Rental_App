import { cancelBookingFakeAPI } from "../fakeAPI/cancelBooking-fake-api";

export function cancelBooking(bookingId) {
  const result = cancelBookingFakeAPI(bookingId);
  return result;
}
