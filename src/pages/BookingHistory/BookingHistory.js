import React, { useEffect, useState } from "react";
import Accordion from "../../components/Accordion/Accordion";
import Buttons from "../../components/button/Buttons";
import { BookingPopup, ModifyBookingPopup } from "../../components/PopUp/Popup"; // Import the BookingPopup
import "./BookingHistory.css";
import { getBookingHistory } from "../../services/booking-history.service";

const BookingHistory = () => {
  const [bookingHistory, setBookingHistory] = useState([]);
  const [isCancelPopupVisible, setCancelPopupVisible] = useState(false);
  const [isModifyPopupVisible, setModifyPopupVisible] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);

  useEffect(() => {
    const res = getBookingHistory();
    console.log("Fetched bookings:", res.bookings);
    setBookingHistory(res.bookings);
  }, []);

  const handleCancelClick = (bookingId) => {
    setSelectedBookingId(bookingId);
    setCancelPopupVisible(true);
  };

  const handleModifyClick = (bookingId) => {
    setSelectedBookingId(bookingId);
    setModifyPopupVisible(true);
  };

  const handleCloseCancelPopup = () => {
    setCancelPopupVisible(false);
    setSelectedBookingId(null);
  };

  const handleCloseModifyPopup = () => {
    setModifyPopupVisible(false);
    setSelectedBookingId(null);
  };

  return (
    <div className="booking-list-container">
      {bookingHistory.length > 0 &&
        bookingHistory.map((item, index) => (
          <Accordion
            key={item.id}
            header={
              <>
                <span className="booking-number">Booking No. {index + 1}</span>
                <span className="vehicle-details">
                  {item.vehicleType} - {item.vehicleDetails}
                </span>
                <span className="status" style={{ marginLeft: "100px" }}>
                  Status -
                  <span className={`status-text ${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>
                </span>
              </>
            }
            details={
              <div className="booking-details">
                <div className="details-table">
                  <div className="detail-row">
                    <div className="detail-title">Booking Date:</div>
                    <div className="detail-value">
                      {item.bookingDate} {item.bookingTime}
                    </div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-title">Pickup Date:</div>
                    <div className="detail-value">{item.pickupDate}</div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-title">Return Date:</div>
                    <div className="detail-value">
                      {item.returnDate || "N/A"}
                    </div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-title">Pickup Location:</div>
                    <div className="detail-value">{item.pickupLocation}</div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-title">Drop-off Location:</div>
                    <div className="detail-value">{item.dropOffLocation}</div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-title">Booking Reference:</div>
                    <div className="detail-value">{item.bookingReference}</div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-title">Payment Method:</div>
                    <div className="detail-value">{item.paymentMethod}</div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-title">Total Cost:</div>
                    <div className="detail-value">{item.totalCost}</div>
                  </div>
                </div>
              </div>
            }
            actions={
              <div className="button-container">
                <Buttons label="Contact Support" className="support-button" />
                <Buttons label="Download Receipt" className="download-button" />
                <Buttons label="View Invoice" className="invoice-button" />
                <Buttons
                  label="Modify Booking"
                  className="edit-button"
                  onClick={() => handleModifyClick(item.id)} // Add onClick to open modify popup
                />
                <Buttons
                  label="Cancel Booking"
                  className="cancel-button"
                  onClick={() => handleCancelClick(item.id)}
                />
              </div>
            }
          />
        ))}
      <BookingPopup
        isVisible={isCancelPopupVisible}
        onClose={handleCloseCancelPopup}
        bookingId={selectedBookingId}
      />
      <ModifyBookingPopup
        isVisible={isModifyPopupVisible}
        onClose={handleCloseModifyPopup}
        bookingId={selectedBookingId}
      />
    </div>
  );
};

export default BookingHistory;
