import { modifyBookingFakeAPI } from "../fakeAPI/modifyBooking-fake-api";

export function modifyBooking(
  bookingId,
  updatedDetails,
  {
    setVehicleType,
    setPickUpDate,
    setReturnDate,
    setBookingAmount,
    setPurchasePrice,
    setRentPricePerHour,
  }
) {
  return modifyBookingFakeAPI(bookingId, updatedDetails, {
    setVehicleType,
    setPickUpDate,
    setReturnDate,
    setBookingAmount,
    setPurchasePrice,
    setRentPricePerHour,
  });
}
