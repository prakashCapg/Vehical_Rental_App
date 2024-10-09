import { getBookingsIdFakeAPI } from "../fakeAPI/booking-details";
import { updateBookingByIdFakeAPI } from "../fakeAPI/update-booking-details";
import { getVehicleDetailsById } from "../fakeAPI/booking-details";
export function getBookingDetails(bookingId){
    return getBookingsIdFakeAPI(bookingId);
}

export const saveBookingDetails = (bookingId, updatedBooking) => {
    return updateBookingByIdFakeAPI(bookingId, updatedBooking);
  };

export const getVehicleDetailsByIdRef=(vehicleRef)=>{
  return getVehicleDetailsById(vehicleRef);
}
