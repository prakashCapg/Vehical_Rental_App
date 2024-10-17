import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Buttons from "../../components/Buttons/Buttons";
import { FaCheckCircle } from "react-icons/fa";
import { newBookingConfirmation } from "../../services/booking-confirmaton.service";

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    const newBooking = location.state?.newBooking;
    console.log("newbooking details", newBooking);

    if (!newBooking) {
      console.error("No booking details provided.");
      return;
    }

    const details = newBookingConfirmation(newBooking);

    if (details) {
      setBookingDetails(details);
    } else {
      console.error("No booking details found for booking:", newBooking);
    }
  }, [location.state]);

  if (!bookingDetails) {
    return <div>Loading...</div>;
  }

  const { bookingId, totalRent, pickupDate, returnDate, vehicleDetails } =
    bookingDetails;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-16 border border-gray-300 rounded-md text-center shadow-2xl max-w-4xl w-full">
        <div className="flex justify-center">
          <FaCheckCircle className="text-7xl text-black mb-6" />
        </div>
        <h1 className="text-4xl font-bold mb-4">BOOKING CONFIRMED</h1>

        <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
          <div className="grid grid-cols-2 gap-4 text-left">
            <p>
              <strong>Booking Number:</strong> {bookingId}
            </p>
            <p>
              <strong>Total:</strong> ${totalRent.toFixed(2)}
            </p>
            <p>
              <strong>Pickup Date:</strong> {pickupDate}
            </p>
            <p>
              <strong>Return Date:</strong> {returnDate}
            </p>
            <p>
              <strong>Vehicle:</strong> {vehicleDetails.model} (
              {vehicleDetails.brand})
            </p>
          </div>
          <div className="mt-4 text-left">
            <p>
              <strong>Status:</strong> Confirmed
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-16">
          <Buttons
            label="BOOK ANOTHER"
            type="yellow-button"
            size="large"
            onClick={() => navigate("/user/make-booking")}
          />
          <Buttons
            label="BOOKING HISTORY"
            type="blue-button"
            size="large"
            onClick={() => navigate("/user/booking-history")}
          />
        </div>
      </div>
    </main>
  );
};

export default BookingConfirmation;
