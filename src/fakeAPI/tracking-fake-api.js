import bookingData from "../Data/BookingData.json";

export function getTrackingFakeAPI(statusFilter = "tracking") {
  const trackingData = bookingData.Bookings.map((booking) => ({
    bookingId: booking.bookingId,
    status: booking.status,
  }));

  return trackingData;
}
