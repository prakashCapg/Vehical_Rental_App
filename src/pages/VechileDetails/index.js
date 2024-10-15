import React, { useEffect, useState } from "react";
import Buttons from "../../components/Buttons/Buttons";
import { useParams, useNavigate } from "react-router-dom";
import { useGetVehicleById } from "../../services/vehicle-details.service";
import { handleImagePath } from "../../components/Card1/Card1";
import PopUp from "../../components/PopUp/Popup";

const VehicleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const vehicle = useGetVehicleById(id);

  const [imagePath, setImagePath] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (vehicle) {
      console.log(vehicle);
      const resolvedImagePath = handleImagePath(vehicle.imagePath);
      setImagePath(resolvedImagePath);
    }
  }, [vehicle]);

  if (!vehicle) {
    return <div>Loading...</div>;
  }

  const handleBookClick = () => {
    setIsPopupOpen(true);
  };

  const confirmBooking = () => {
    setIsPopupOpen(false);
    navigate("/user/booking-confirmation");
  };

  const handleBackClick = () => {
    navigate("/user/vehicle-booking");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <main className="flex justify-center items-center w-full px-10">
        <div className="w-1/2 p-4">
          <img
            src={imagePath}
            alt={`${vehicle.brand} ${vehicle.model}`}
            className="w-full h-full object-cover rounded-lg shadow-md"
            style={{ maxHeight: "450px" }}
          />
        </div>
        <div
          className="w-1/2 p-8 bg-white shadow-lg rounded-lg flex flex-col justify-between"
          style={{ maxHeight: "500px" }}
        >
          <div>
            <h2 className="text-3xl font-bold mb-3">{vehicle.model}</h2>
            <p className="text-md mb-2">
              <strong>Brand:</strong> {vehicle.brand}
            </p>
            <p className="text-md mb-2">
              <strong>category:</strong> {vehicle.category}
            </p>
            <p className="text-md mb-2">
              <strong>Transmission:</strong> {vehicle.transmission}
            </p>
            <p className="text-md mb-2">
              <strong>Fuel Type:</strong> {vehicle.fuelType}
            </p>
            <p className="text-md mb-2">
              <strong>Description:</strong> {vehicle.description}
            </p>

            <hr style={{ border: "none", borderTop: "5px solid black" }} />
            <br></br>

            <p className="text-md mb-2">
              <strong>Rent Per Hour:</strong> ${vehicle.rentPricePerHour}/hour
            </p>
            <p className="text-md mb-2">
              <strong>Pick Up Date:</strong> {vehicle.pickupDate}
            </p>
            <p className="text-md mb-2">
              <strong>Return Date:</strong> {vehicle.returnDate}
            </p>
            <p className="text-md mb-2">
              <strong>Total Hours:</strong> {vehicle.totalHours}
            </p>

            <p className="text-md mb-2">
              <strong>Total Rent:</strong> {vehicle.totalRent}
            </p>
          </div>

          <div className="mt-4 flex justify-center space-x-12">
            <Buttons
              label="BACK"
              type="gray-button"
              size="medium"
              onClick={handleBackClick}
            />
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
};

export default VehicleDetails;
