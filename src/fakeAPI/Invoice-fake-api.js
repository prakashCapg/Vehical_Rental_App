import VehicleData from "../Data/VehicleData.json";
import Bookings from "../Data/BookingData.json";
import UserProfileData from "../Data/UserProfileData.json";

export function getInvoiceFakeAPI() {
  return {
    VehicleData: VehicleData,
    Bookings: Bookings,
    UserProfileData: UserProfileData,
  };
}
