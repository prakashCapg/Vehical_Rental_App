import bookingData from "../Data/BookingData.json";

export function getTrackingFakeAPI(statusFilter = "tracking") {
  const trackingData = bookingData.Bookings.filter(
    (booking) => booking.status === statusFilter
  ).map((booking) => ({
    bookingId: booking.bookingId,
    status: booking.status,
  }));

  return trackingData;
}
