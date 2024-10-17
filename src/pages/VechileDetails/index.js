import React, { useEffect, useState } from "react";
import Buttons from "../../components/Buttons/Buttons";
import { useParams, useNavigate } from "react-router-dom";
import { useGetVehicleById } from "../../services/vehicle-details.service";
import { handleImagePath } from "../../components/Card1/Card1";
import PopUp from "../../components/PopUp/Popup";
import { useBookingContext } from "../../context/BookingContext";

const VehicleDetails = () => {
  const { id: vehicleId, bookingId } = useParams();
  const navigate = useNavigate();
  const [imagePath, setImagePath] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [totalHours, setTotalHours] = useState(0);
  const [totalRent, setTotalRent] = useState(0);

  const { getBookingDetailsById } = useBookingContext();
  const bookingDetails = getBookingDetailsById(bookingId);

  const { vehicleDetails = {} } = useGetVehicleById(vehicleId) || {};

  useEffect(() => {
    if (vehicleDetails && vehicleDetails.imagePath) {
      const resolvedImagePath = handleImagePath(vehicleDetails.imagePath);
      setImagePath(resolvedImagePath);
    }
  }, [vehicleDetails]);

  useEffect(() => {
    if (
      bookingDetails &&
      bookingDetails.pickupDate &&
      bookingDetails.returnDate &&
      vehicleDetails.rentPricePerHour
    ) {
      const pickupDate = new Date(bookingDetails.pickupDate);
      const returnDate = new Date(bookingDetails.returnDate);
      const hoursDifference =
        Math.abs(returnDate - pickupDate) / (1000 * 60 * 60);
      setTotalHours(hoursDifference);

      const rentPerHour = vehicleDetails.rentPricePerHour;
      setTotalRent(hoursDifference * rentPerHour);
    }
  }, [bookingDetails, vehicleDetails]);

  if (!vehicleDetails || !bookingDetails) {
    return <div>Loading...</div>;
  }

  const handleBookClick = () => {
    setIsPopupOpen(true);
  };

  const confirmBooking = () => {
    setIsPopupOpen(false);

    const newBooking = {
      bookingId: bookingId,
      bookingStatus: "Booked",
      bookingDate: new Date().toISOString(),
      vehicleReferenceId: vehicleDetails.vehicleId,
      vehicleDetails: {
        type: vehicleDetails.type,
        brand: vehicleDetails.brand,
        model: vehicleDetails.model,
        rentPricePerHour: vehicleDetails.rentPricePerHour,
      },
      pickupDate: bookingDetails.pickupDate,
      returnDate: bookingDetails.returnDate,
      totalHours,
      totalRent,
    };

    navigate("/user/booking-confirmation", { state: { newBooking } });
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
            alt={`${vehicleDetails.brand} ${vehicleDetails.model}`}
            className="w-full h-full object-cover rounded-lg shadow-md"
            style={{ maxHeight: "450px" }}
          />
        </div>
        <div
          className="w-1/2 p-8 bg-white shadow-lg rounded-lg flex flex-col justify-between"
          style={{ maxHeight: "500px" }}
        >
          <div>
            <h2 className="text-3xl font-bold mb-3">{vehicleDetails.model}</h2>
            <p className="text-md mb-2">
              <strong>Brand:</strong> {vehicleDetails.brand}
            </p>
            <p className="text-md mb-2">
              <strong>Category:</strong> {vehicleDetails.category}
            </p>
            <p className="text-md mb-2">
              <strong>Transmission:</strong> {vehicleDetails.transmission}
            </p>
            <p className="text-md mb-2">
              <strong>Fuel Type:</strong> {vehicleDetails.fuelType}
            </p>
            <p className="text-md mb-2">
              <strong>Description:</strong> {vehicleDetails.description}
            </p>

            <hr style={{ border: "none", borderTop: "5px solid black" }} />
            <br />

            <p className="text-md mb-2">
              <strong>Rent Per Hour:</strong> ${vehicleDetails.rentPricePerHour}
              /hour
            </p>
            <p className="text-md mb-2">
              <strong>Pick Up Date:</strong> {bookingDetails.pickupDate}
            </p>
            <p className="text-md mb-2">
              <strong>Return Date:</strong> {bookingDetails.returnDate}
            </p>
            <p className="text-md mb-2">
              <strong>Total Hours:</strong> {totalHours}
            </p>
            <p className="text-md mb-2">
              <strong>Total Rent:</strong> ${totalRent.toFixed(2)}
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
