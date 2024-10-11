import React, { useState } from "react";
import bikeImage from "./bike1.jpg";
import Buttons from "../../components/Buttons/Buttons";
import PopUp from "../../components/PopUp/Popup";

function App() {
  const vehicleData = {
    category: "Sedan",
    brand: "Toyota",
    model: "Camry",
    transmission: "Automatic",
    fuelType: "Gasoline",
    purchasePrice: 20000,
    rentPricePerHour: 20,
    registrationNumber: "AB123CD",
    description: "A comfortable sedan for city driving.",
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleBookClick = () => {
    setIsPopupOpen(true);
  };

  const confirmBooking = () => {
    alert("Booking confirmed!");
    setIsPopupOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <main className="flex justify-center items-center w-full px-10">
        <div className="w-1/2 p-4">
          <img
            src={bikeImage}
            alt={`${vehicleData.brand} ${vehicleData.model}`}
            className="w-full h-full object-cover rounded-lg shadow-md"
            style={{ maxHeight: "400px" }}
          />
        </div>

        <div
          className="w-1/2 p-8 bg-white shadow-lg rounded-lg flex flex-col justify-between"
          style={{ maxHeight: "400px" }}
        >
          <div>
            <h2 className="text-3xl font-bold mb-3">
              {vehicleData.model} ({vehicleData.category})
            </h2>
            <p className="text-md mb-2">
              <strong>Brand:</strong> {vehicleData.brand}
            </p>
            <p className="text-md mb-2">
              <strong>Transmission:</strong> {vehicleData.transmission}
            </p>
            <p className="text-md mb-2">
              <strong>Fuel Type:</strong> {vehicleData.fuelType}
            </p>
            <p className="text-md mb-2">
              <strong>Purchase Price:</strong> ${vehicleData.purchasePrice}
            </p>
            <p className="text-md mb-2">
              <strong>Registration Number:</strong>{" "}
              {vehicleData.registrationNumber}
            </p>
            <p className="text-md mb-2">
              <strong>Description:</strong> {vehicleData.description}
            </p>
            <p className="text-lg font-bold mt-4">
              <strong>${vehicleData.rentPricePerHour}/hour</strong>
            </p>
          </div>

          <div className="mt-4 flex justify-center space-x-12">
            <Buttons label="BACK" type="gray-button" size="medium" />
            <Buttons
              label="BOOK"
              type="yellow-button"
              size="medium"
              onClick={handleBookClick}
            />
          </div>
        </div>
      </main>

      <PopUp
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title="Booking Confirmation"
        width="500px"
        height="250px"
        className="bg-white p-6 rounded-lg shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Confirm Your Booking
        </h2>
        <p className="text-md text-gray-600 mb-6 text-center">
          Are you sure you want to book this vehicle?
        </p>
        <div className="flex justify-center space-x-8">
          <Buttons
            label="No"
            type="red-button"
            size="medium"
            onClick={() => setIsPopupOpen(false)}
          />
          <Buttons
            label="Yes"
            type="blue-button"
            size="medium"
            onClick={confirmBooking}
          />
        </div>
      </PopUp>
    </div>
  );
}

export default App;
