import bookingData from "../../../Data/BookingData.json";
import { differenceInDays, isBefore, isAfter } from "date-fns";

const isDateRangeOverlapping = (start1, end1, start2, end2) => {
  return isBefore(start1, end2) && isAfter(end1, start2);
};

export const isDateAvailable = (
  vehicleId,
  newPickupDate,
  newReturnDate,
  currentBookingId
) => {
  const newStartDate = new Date(newPickupDate);
  const newEndDate = new Date(newReturnDate);

  const duration = differenceInDays(newEndDate, newStartDate);
  if (duration > 3) {
    return {
      success: false,
      message: "The booking period should not exceed more than 3 days.",
    };
  }

  const currentBooking = bookingData.Bookings.find(
    (booking) => booking.bookingId === currentBookingId
  );

  if (!currentBooking) {
    return {
      success: false,
      message: "Current booking not found.",
    };
  }

  if (
    newPickupDate === currentBooking.pickupDate &&
    newReturnDate === currentBooking.returnDate
  ) {
    return {
      success: false,
      message: "The new dates cannot be the same as the current booking dates.",
    };
  }

  const conflictingBooking = bookingData.Bookings.find((booking) => {
    const bookingStartDate = new Date(booking.pickupDate);
    const bookingEndDate = new Date(booking.returnDate);

    return (
      booking.vehicleIdReference === vehicleId &&
      booking.bookingId !== currentBookingId &&
      isDateRangeOverlapping(
        newStartDate,
        newEndDate,
        bookingStartDate,
        bookingEndDate
      )
    );
  });

  if (conflictingBooking) {
    return {
      success: false,
      message: `The vehicle is already booked from ${conflictingBooking.pickupDate} to ${conflictingBooking.returnDate}.`,
    };
  }

  return { success: true, message: "The dates are available." };
};
