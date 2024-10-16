import React, { createContext, useState } from "react";
import bookingData from "../Data/BookingData.json";

const BookingContext = createContext();

const BookingContextProvider = ({ children }) => {
  const [pickupDate, setPickUpDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const getBookingDetailsById = (vehicleReferenceId) => {
    return (
      bookingData.Bookings.find(
        (booking) => booking.vehicleReferenceId === vehicleReferenceId
      ) || null
    );
  };

  return (
    <BookingContext.Provider
      value={{
        pickupDate,
        setPickUpDate,
        returnDate,
        setReturnDate,

        getBookingDetailsById,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export { BookingContextProvider, BookingContext };
