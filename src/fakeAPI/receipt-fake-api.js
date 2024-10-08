import VehicleData from "../Data/VehicleData.json";
import BookingData from "../Data/BookingData.json";
import UserProfileData from "../Data/UserProfileData.json";

export const getReceiptFakeAPI = (bookingId) => {
  const booking = BookingData.Bookings.find((b) => b.bookingId === bookingId);

  if (!booking) {
    throw new Error(`No booking found for ID: ${bookingId}`);
  }
  const vehicle = VehicleData.VehicleData.find(
    (v) => v.VehicleId === booking.vehicleIdReference
  );

  if (!vehicle) {
    throw new Error(`No vehicle found for ID: ${booking.vehicleIdReference}`);
  }

  const user = UserProfileData.UserProfileData[0];

  return {
    booking,
    vehicle,
    user,
  };
};
