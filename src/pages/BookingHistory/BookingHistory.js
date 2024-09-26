import React, { useEffect, useState } from "react";
import Accordion from "../../components/Accordion/Accordion";
import Buttons from "../../components/button/Buttons";
import { BookingPopup, ModifyBookingPopup } from "../../components/PopUp/Popup";
import "./BookingHistory.css";
import { getBookingHistory } from "../../services/booking-history.service";

const BookingHistory = () => {
  const [bookingHistory, setBookingHistory] = useState([]);
  const [displayHistory, setDisplayHistory] = useState([]); // State to manage display
  const [isCancelPopupVisible, setCancelPopupVisible] = useState(false);
  const [isModifyPopupVisible, setModifyPopupVisible] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    const fetchBookingHistory = async () => {
      try {
        const res = await getBookingHistory();
        console.log("Fetched bookings:", res.bookings);
        setBookingHistory(res.bookings);
      } catch (error) {
        console.error("Error fetching booking history:", error);
      }
    };

    fetchBookingHistory();
  }, []);

  useEffect(() => {
    // Update the display history when booking history changes
    setDisplayHistory(bookingHistory);
    console.log("Display history updated:", displayHistory);
  }, [bookingHistory]);

  const handleCancelClick = (booking) => {
    setSelectedBooking(booking);
    setCancelPopupVisible(true);
  };

  const handleModifyClick = (booking) => {
    setSelectedBooking(booking);
    setModifyPopupVisible(true);
  };

  const handleCloseCancelPopup = () => {
    setCancelPopupVisible(false);
    setSelectedBooking(null);
  };

  const handleCloseModifyPopup = () => {
    setModifyPopupVisible(false);
    setSelectedBooking(null);
  };

  const handleModifyBooking = async (updatedBooking) => {
    console.log("Updated Booking:", updatedBooking);
    setBookingHistory((prevBookings) => {
      const updatedBookings = prevBookings.map((booking) =>
        booking.id === updatedBooking.id
          ? {
              ...booking,
              pickupLocation: updatedBooking.pickupLocation,
              dropoffLocation: updatedBooking.dropOffLocation,
              pickupDate: updatedBooking.pickupDate,
              returnDate: updatedBooking.returnDate,
              type: updatedBooking.type,
              selectedBrand: updatedBooking.selectedBrand,
              selectedModel: updatedBooking.selectedModel,
              selectedTitle: updatedBooking.selectedTitle,
              paymentMethod: updatedBooking.paymentMethod,
              price: updatedBooking.price,
              title: updatedBooking.title,
            }
          : booking
      );
      console.log("Updated Bookings after modification:", updatedBookings);
      return updatedBookings;
    });
  };

  return (
    <div className="booking-list-container">
      {displayHistory.length > 0 ? (
        displayHistory.map((item, index) => (
          <Accordion
            key={item.id}
            header={
              <>
                <span className="booking-number">Booking No. {index + 1}</span>
                <span className="vehicle-details">
                  {item.type} - {item.title}
                </span>
                <span className="status" style={{ marginLeft: "60px" }}>
                  Status -
                  <span
                    className={`status-text ${
                      item.status ? item.status.toLowerCase() : ""
                    }`}
                  >
                    {""} {item.status}
                  </span>
                </span>
              </>
            }
            details={
              <div className="booking-details">
                <div className="details-table">
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
                    <div className="detail-value">{item.dropoffLocation}</div>
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
                    <div className="detail-title">Registration Number:</div>
                    <div className="detail-value">{item.registration}</div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-title">Price:</div>
                    <div className="detail-value">Rs.{item.price}</div>
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
                  onClick={() => handleModifyClick(item)}
                />
                <Buttons
                  label="Cancel Booking"
                  className="cancel-button"
                  onClick={() => handleCancelClick(item)}
                />
              </div>
            }
          />
        ))
      ) : (
        <p>No booking history found.</p>
      )}
      {selectedBooking && (
        <BookingPopup
          isVisible={isCancelPopupVisible}
          onClose={handleCloseCancelPopup}
          bookingDate={selectedBooking.bookingDate}
          bookingId={selectedBooking.id}
        />
      )}
      {selectedBooking && (
        <ModifyBookingPopup
          isVisible={isModifyPopupVisible}
          onClose={handleCloseModifyPopup}
          bookingDetails={selectedBooking}
          bookingId={selectedBooking.id}
          onBookingModified={handleModifyBooking}
        />
      )}
    </div>
  );
};

export default BookingHistory;
