import React from "react";
import Buttons from "../../components/Buttons/Buttons";
import { FaCheckCircle } from "react-icons/fa";

const BookingConfirmation = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-12 border border-gray-300 rounded-md text-center shadow-2xl max-w-4xl">
        <div className="flex justify-center">
          <FaCheckCircle className="text-7xl text-black mb-6" />
        </div>

        <h1 className="text-4xl font-bold mb-4">BOOKING CONFIRMED</h1>

        <p className="text-blue-600 text-xl mb-8">Booking No. 12344321</p>

        <div className="flex justify-center space-x-6">
          <Buttons
            label="BOOK ANOTHER"
            type="yellow-button"
            size="large"
            onClick={() => console.log("Book Another clicked")}
          />
          <Buttons
            label="Feedback"
            type="gray-button"
            size="large"
            onClick={() => console.log("Feedback clicked")}
          />
          <Buttons
            label="Booking History"
            type="blue-button"
            size="large"
            onClick={() => console.log("Booking History clicked")}
          />
        </div>
      </div>
    </main>
  );
};

export default BookingConfirmation;
