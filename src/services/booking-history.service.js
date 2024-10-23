import { getBookingsFakeAPI } from "../fakeAPI/booking-history-fake-api";

export const getBookingHistory = async () => {
  const bookingData = getBookingsFakeAPI();
  if (bookingData.success) {
    return bookingData;
  } else {
    return { success: false, error: "Failed to fetch booking history" };
  }
};
