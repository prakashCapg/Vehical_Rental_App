import { getBookingsFakeAPI } from "../fakeAPI/booking-history-fake-api";

export function getBookingHistory() {
  const response = getBookingsFakeAPI();
  return response;
}
