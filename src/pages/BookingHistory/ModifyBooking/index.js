import { useEffect, useState } from "react";
import { modifyBooking } from "../../../services/modify-booking.service";
import PopUp from "../../../components/PopUp/Popup";
import Button from "../../../components/Buttons/Buttons";
import "../ModifyBooking/index.css";

export const ModifyBookingPopup = ({
  isVisible,
  onClose,
  bookingDetails,
  bookingId,
  onBookingModified,
}) => {
  const [newPickupDate, setNewPickupDate] = useState("");
  const [newReturnDate, setNewReturnDate] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (isVisible && bookingDetails) {
      setNewPickupDate(bookingDetails.pickupDate || "");
      setNewReturnDate(bookingDetails.returnDate || "");
      setError("");
      setSuccessMessage("");
    }
  }, [isVisible, bookingDetails]);

  const handleModifyBooking = async () => {
    if (!newPickupDate || !newReturnDate) {
      setError("Both pickup and return dates are required.");
      return;
    }
    const updatedDetails = {
      id: bookingId,
      pickupDate: newPickupDate,
      returnDate: newReturnDate,
      vehicleIdReference: bookingDetails.vehicleIdReference,
    };

    try {
      const result = await modifyBooking(bookingId, updatedDetails);
      if (result.success) {
        setSuccessMessage("Booking successfully modified!");
        onBookingModified(updatedDetails);
        onClose();
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError("An error occurred while modifying the booking.");
      console.error("Error modifying booking:", error);
    }
  };

  if (!isVisible) return null;

  return (
    <PopUp
      isOpen={isVisible}
      onClose={onClose}
      title="Modify Your Booking"
      width="500px"
      height="800px"
    >
      <div className="popup-content modify-popup">
        <div className="popup-body">
          {error && <p className="modify-popup-error">{error}</p>}
          {successMessage && (
            <p className="modify-popup-success">{successMessage}</p>
          )}
          <form className="modify-form" onSubmit={(e) => e.preventDefault()}>
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

            <Button
              label="Save Changes"
              type="green-button"
              size="medium"
              onClick={handleModifyBooking}
            />
            <Button
              label="Close"
              type="red-button"
              size="medium"
              onClick={onClose}
            />
          </form>
        </div>
      </div>
    </PopUp>
  );
};
