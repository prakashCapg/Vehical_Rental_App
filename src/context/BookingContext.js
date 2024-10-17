import { useContext } from "react";
import { BookingContext } from "./BookingContextProvider";

export const useBookingContext = () => {
  return useContext(BookingContext);
};

export default BookingContext;
