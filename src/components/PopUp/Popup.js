import "../../components/PopUp/Popup.css";
import React, { useState, useEffect } from "react";
import { cancelBooking } from "../../services/booking-history.service";

export const BookingPopup = ({
  isVisible,
  onClose,
  bookingDate,
  bookingId,
}) => {
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);
  const [isBookingCancelled, setBookingCancelled] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isVisible) {
      setConfirmationVisible(false);
      setBookingCancelled(false);
      setError("");
    }
  }, [isVisible]);

  const confirmCancellation = () => {
    const currentDate = new Date();
    const allowedCancelDate = new Date(bookingDate);
    allowedCancelDate.setDate(allowedCancelDate.getDate() + 2);

    if (currentDate > allowedCancelDate) {
      setError(
        "Booking cancellation is allowed only up to 2 days after booking."
      );
    } else {
      const result = cancelBooking(bookingId);
      if (result.success) {
        setBookingCancelled(true);
        setConfirmationVisible(true);
      } else {
        setError(result.message);
      }
    }
  };

  const handleClose = () => {
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={handleClose}>
          X
        </button>
        {!isConfirmationVisible ? (
          <>
            <h2>Confirm Cancellation</h2>
            {error && <p className="popup-error">{error}</p>}
            <p className="popup-text">
              Are you sure you want to cancel this booking? This action cannot
              be undone.
            </p>
            <div className="popup-actions">
              <button
                className="popup-action cancel"
                onClick={confirmCancellation}
              >
                Yes, Cancel Booking
              </button>
              <button className="popup-action keep" onClick={handleClose}>
                No, Keep Booking
              </button>
            </div>
          </>
        ) : (
          <p className="popup-text">Your booking has been cancelled.</p>
        )}
      </div>
    </div>
  );
};

export const ModifyBookingPopup = ({
  isVisible,
  onClose,
  bookingDetails,
  bookingId,
}) => {
  const [newPickupDate, setNewPickupDate] = useState("");
  const [newReturnDate, setNewReturnDate] = useState("");
  const [newPickupLocation, setNewPickupLocation] = useState("");
  const [newDropOffLocation, setNewDropOffLocation] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  useEffect(() => {
    if (isVisible && bookingDetails) {
      setNewPickupDate(bookingDetails.pickupDate || "");
      setNewReturnDate(bookingDetails.returnDate || "");
      setNewPickupLocation(bookingDetails.pickupLocation || "");
      setNewDropOffLocation(bookingDetails.dropOffLocation || "");
      setVehicleType(bookingDetails.vehicleType || "");
    }
  }, [isVisible, bookingDetails]);

  const handleModifyBooking = () => {
    console.log("Booking modified with the following details:", {
      newPickupDate,
      newReturnDate,
      newPickupLocation,
      newDropOffLocation,
      vehicleType,
    });
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>
          X
        </button>
        <h2>Modify Your Booking</h2>
        <form className="modify-form">
          <label htmlFor="pickupDate">New Pickup Date</label>
          <input
            id="pickupDate"
            type="date"
            value={newPickupDate}
            onChange={(e) => setNewPickupDate(e.target.value)}
          />

          <label htmlFor="returnDate">New Return Date</label>
          <input
            id="returnDate"
            type="date"
            value={newReturnDate}
            onChange={(e) => setNewReturnDate(e.target.value)}
          />

          <label htmlFor="pickupLocation">New Pickup Location</label>
          <input
            id="pickupLocation"
            type="text"
            value={newPickupLocation}
            onChange={(e) => setNewPickupLocation(e.target.value)}
            placeholder="Enter pickup location"
          />

          <label htmlFor="dropOffLocation">New Drop-off Location</label>
          <input
            id="dropOffLocation"
            type="text"
            value={newDropOffLocation}
            onChange={(e) => setNewDropOffLocation(e.target.value)}
            placeholder="Enter drop-off location"
          />

          <label htmlFor="vehicleType">Vehicle Type</label>
          <select
            id="vehicleType"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="">Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="bike">6 Seater</option>
          </select>

          <div className="popup-actions">
            <button
              className="popup-action save"
              type="button"
              onClick={handleModifyBooking}
            >
              Save Changes
            </button>
            <button
              className="popup-action cancel"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Login Popup Component
// const LoginPopup = () => {
//   const [isPopupVisible, setPopupVisible] = useState(false);

//   const openPopup = () => setPopupVisible(true);
//   const closePopup = () => setPopupVisible(false);

//   return (
//     <>
//       <button onClick={openPopup}>Open Login Popup</button>
//       <Popup isVisible={isPopupVisible} onClose={closePopup} title="Login">
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <div className="popup-actions">
//           <button className="popup-action">Login</button>
//         </div>
//       </Popup>
//     </>
//   );
// };
