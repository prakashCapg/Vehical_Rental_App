import React, { useState, useEffect } from "react";
import PopUp from "../../../components/PopUp/Popup";
import Button from "../../../components/Buttons/Buttons";
import { cancelBookingFakeAPI } from "../../../fakeAPI/cancelBooking-fake-api";
import "../CancelBooking/index.css";

export const CancelBooking = ({
  isVisible,
  onClose,
  bookingDate,
  bookingId,
  onBookingCancelled,
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
      const result = cancelBookingFakeAPI(bookingId);
      if (result.success) {
        setBookingCancelled(true);
        setConfirmationVisible(true);
        onBookingCancelled();
      } else {
        setError(result.message);
      }
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <PopUp
      isOpen={isVisible}
      onClose={handleClose}
      title="Cancel Booking"
      width="500px"
      height="400px"
    >
      <div className="cancel-popup-content">
        {!isConfirmationVisible ? (
          <>
            <h2>Confirm Cancellation</h2>
            {error && <p className="cancel-popup-error">{error}</p>}
            <p className="cancel-popup-text">
              Are you sure you want to cancel this booking? This action cannot
              be undone.
            </p>
            <div className="popup-actions">
              <Button
                label="Yes, Cancel Booking"
                type="red-button"
                size="small"
                onClick={confirmCancellation}
              />
              <Button
                label="No, Keep Booking"
                type="green-button"
                size="small"
                onClick={handleClose}
              />
            </div>
          </>
        ) : (
          <p className="cancel-popup-text">Your booking has been cancelled.</p>
        )}
      </div>
    </PopUp>
  );
};
