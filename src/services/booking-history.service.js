import {
  cancelBookingFakeAPI,
  getBookingsFakeAPI,
  modifyBookingFakeAPI,
  contactSupportFakeAPI,
} from "../fakeAPI/booking-history-fake-api";
import { getvehicleDataFakeAPI } from "../fakeAPI/vehicle-list-fake-api";

export function getBookingHistory() {
  const { carData, bikeData, sixSeaterData } = getBookingsFakeAPI();

  const allBookings = [...carData, ...bikeData, ...sixSeaterData];
  return { bookings: allBookings };
}

export function cancelBooking(bookingId) {
  const result = cancelBookingFakeAPI(bookingId);
  return result;
}

export function modifyBooking(bookingId, updatedDetails) {
  const result = modifyBookingFakeAPI(bookingId, updatedDetails);
  return result;
}

export function contactSupport(details) {
  const result = contactSupportFakeAPI(details);
  return result;
}

export function vehicleData() {
  const { carData, bikeData, sixSeaterData } = getvehicleDataFakeAPI();

  const allVehicleData = [...carData, ...bikeData, ...sixSeaterData];

  return allVehicleData;
}
