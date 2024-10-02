import userProfileData from "../Data/UserProfileData.json";
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
  const user = userProfileData.UserProfileData.find(
    (profile) => profile.Name === Name && profile.emailId === emailId
  );

  if (!user) {
    return { success: false, message: "User not found." };
  }

  let bookingInfo = null;
  if (bookingId) {
    bookingInfo = bookingData.Bookings.find(
      (booking) =>
        booking.bookingId === bookingId && booking.userID === user.userID
    );

    if (!bookingInfo) {
      return {
        success: false,
        message: "Booking not found or does not belong to the user.",
      };
    }
  }
  const supportRequest = {
    Name,
    emailId,
    issueType,
    message,
    bookingId: bookingInfo ? bookingInfo.bookingId : "N/A",
    timestamp: new Date().toISOString(),
  };
  console.log("Support request submitted:", supportRequest);

  return {
    success: true,
    message: "Your support request has been submitted successfully.",
  };
}
