import {
  cancelBookingFakeAPI,
  getBookingsFakeAPI,
  modifyBookingFakeAPI,
  getvehicleDataFakeAPI,
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

export function modifyBooking(bookingId, updatedDetails) {
  return modifyBookingFakeAPI(bookingId, updatedDetails);
}

export function vehicleData() {
  const { carData, bikeData, sixSeaterData } = getvehicleDataFakeAPI();

  const allVehicleData = [...carData, ...bikeData, ...sixSeaterData];

  return allVehicleData;
}
