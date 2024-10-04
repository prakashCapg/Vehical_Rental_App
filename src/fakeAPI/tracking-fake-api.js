import bookingData from "../Data/BookingData.json";

export function getTrackingFakeAPI() {
  const trackingData = bookingData.Bookings.filter(
    (booking) => booking.status === "tracking"
  ).map((booking) => ({
    bookingId: booking.bookingId,
    status: booking.status,
  }));

  return trackingData;
}
