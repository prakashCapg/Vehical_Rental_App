import { backendData } from "../backendData";

export function getBookingsFakeAPI() {
  return {
    bookings: backendData["bookings"],
  };
}
