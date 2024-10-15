import React from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "../../components/Buttons/Buttons";
import { FaCheckCircle } from "react-icons/fa";

const BookingConfirmation = () => {
  const navigate = useNavigate();

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
              <strong>Booking Number:</strong> 12344321
            </p>
            <p>
              <strong>Total:</strong> $350
            </p>
            <p>
              <strong>Pickup Date:</strong> October 12, 2024
            </p>
            <p>
              <strong>Return Date:</strong> October 15, 2024
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
