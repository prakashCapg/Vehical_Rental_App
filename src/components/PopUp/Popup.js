import "../../components/PopUp/Popup.css";
import React, { useState, useEffect } from "react";

export const BookingPopup = ({ isVisible, onClose }) => {
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);
  const [isBookingCancelled, setBookingCancelled] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      setConfirmationVisible(false);
      setBookingCancelled(false);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const confirmCancellation = () => {
    setBookingCancelled(true);
    setConfirmationVisible(true);
    {
      /*setTimeout(() => {
      onClose(); // Close the popup after 2 seconds
    }, 2000);*/
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={handleClose}>
          X
        </button>
        {!isConfirmationVisible ? (
          <>
            <h2>Confirm Cancellation</h2>
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

// export const CancellationRequestPopup = ({ onSubmit, onClose, isVisible }) => {
//   const [reason, setReason] = useState("");
//   const [comment, setComment] = useState("");

//   if (!isVisible) return null;

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSubmit(); // Trigger confirmation after submission
//   };

//   return (
//     <div className="popup-overlay" onClick={onClose}>
//       <div className="popup" onClick={(e) => e.stopPropagation()}>
//         <button className="close" onClick={onClose}>
//           X
//         </button>
//         <form onSubmit={handleSubmit}>
//           <h2>CANCELLATION REQUEST</h2>
//           <p>
//             Help improve services. Provide the reason for your cancellation
//             below.
//           </p>
//           <div>
//             <label htmlFor="reason">Select the reason:</label>
//             <select
//               id="reason"
//               value={reason}
//               onChange={(e) => setReason(e.target.value)}
//             >
//               <option value="">Please select a reason</option>
//               <option value="rates">Rates too high</option>
//               <option value="trip-cancelled">Trip was cancelled</option>
//               <option value="questions">Questions about the rental</option>
//               <option value="other">Other reasons</option>
//             </select>
//           </div>
//           <div>
//             <label htmlFor="comment">Add a comment (optional):</label>
//             <textarea
//               id="comment"
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//             />
//           </div>
//           <button type="submit">Cancel Booking</button>
//         </form>
//       </div>
//     </div>
//   );
// };

export const ModifyBookingPopup = ({ isVisible, onClose, bookingDetails }) => {
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
            {/* Add other vehicle types as needed */}
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

//export { BookingPopup, ModifyBookingPopup };

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
