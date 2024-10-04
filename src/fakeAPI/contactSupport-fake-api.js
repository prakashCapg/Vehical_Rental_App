import bookingData from "../Data/BookingData.json";

export function contactSupportFakeAPI({
  Name,
  emailId,
  issueType,
  message,
  bookingId,
}) {
  if (!Name || !emailId || !issueType || !message) {
    return { success: false, message: "All fields are required." };
  }

  const validBookingId =
    bookingId &&
    bookingData.Bookings.some((booking) => booking.bookingId === bookingId)
      ? bookingId
      : "N/A";

  const supportRequest = {
    Name,
    emailId,
    issueType,
    message,
    bookingId: validBookingId,
    timestamp: new Date().toISOString(),
  };

  console.log("Support request submitted:", supportRequest);

  return {
    success: true,
    message: "Your support request has been submitted successfully.",
    bookingId: validBookingId,
  };
}
