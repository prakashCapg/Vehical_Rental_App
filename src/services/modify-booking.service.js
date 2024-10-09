import { modifyBookingFakeAPI } from "../fakeAPI/modifyBooking-fake-api";

export function modifyBooking(bookingId, updatedDetails) {
  const modify = modifyBookingFakeAPI(bookingId, updatedDetails);
  return modify;
}
