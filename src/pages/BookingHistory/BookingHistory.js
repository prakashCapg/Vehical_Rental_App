import React, { useEffect, useState } from "react";
import Accordion from "../../components/Accordion/Accordion";
import Buttons from "../../components/button/Buttons";
import { BookingPopup, ModifyBookingPopup } from "../../components/PopUp/Popup";
import "./BookingHistory.css";
import { getBookingHistory } from "../../services/booking-history.service";
import {
  Invoice,
  Receipt,
} from "../../components/Invoice_Receipt/Invoice_Receipt";

const BookingHistory = () => {
  const [bookingHistory, setBookingHistory] = useState([]);
  const [displayHistory, setDisplayHistory] = useState([]);
  const [isCancelPopupVisible, setCancelPopupVisible] = useState(false);
  const [isModifyPopupVisible, setModifyPopupVisible] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);

  useEffect(() => {
    const fetchBookingHistory = async () => {
      try {
        const res = await getBookingHistory();
        console.log("Fetched bookings:", res.bookings);
        if (res.bookings && res.bookings.length > 0) {
          setBookingHistory(res.bookings);
        } else {
          setBookingHistory([]);
        }
      } catch (error) {
        console.error("Error fetching booking history:", error);
      }
    };

    fetchBookingHistory();
  }, []);

  useEffect(() => {
    setDisplayHistory(bookingHistory);
    console.log("Display history updated:", bookingHistory);
  }, [bookingHistory]);

  const handleCancelClick = (booking) => {
    setSelectedBooking(booking);
    setCancelPopupVisible(true);
  };

  const handleModifyClick = (booking) => {
    setSelectedBooking(booking);
    setModifyPopupVisible(true);
  };

  const handleViewInvoice = (booking) => {
    console.log("Viewing booking:", booking);
    setSelectedBooking(booking);
    setIsInvoiceOpen(true);
  };

  const handleDownloadReceipt = (booking) => {
    console.log("Downloading receipt for booking:", booking);
    setSelectedBooking(booking);
    setIsReceiptOpen(true);
  };

  const handleCloseCancelPopup = () => {
    setCancelPopupVisible(false);
    setSelectedBooking(null);
  };

  const handleCloseModifyPopup = () => {
    setModifyPopupVisible(false);
    setSelectedBooking(null);
  };

  const handleCloseReceipt = () => {
    setIsReceiptOpen(false);
    setSelectedBooking(null);
  };

  const handleModifyBooking = (updatedBooking) => {
    setBookingHistory((prevBookings) =>
      prevBookings.map((booking) =>
        booking.id === updatedBooking.id
          ? { ...booking, ...updatedBooking }
          : booking
      )
    );
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
                  {item.type} - {item.selectedTitle || item.title}
                </span>
                <span className="status" style={{ marginLeft: "75px" }}>
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
                    <div className="detail-title">Pickup Time:</div>
                    <div className="detail-value">{item.pickupTime}</div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-title">Return Date:</div>
                    <div className="detail-value">
                      {item.returnDate || "N/A"}
                    </div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-title">Return Time:</div>
                    <div className="detail-value">{item.dropoffTime}</div>
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
                <Buttons
                  label="Download Receipt"
                  className="download-button"
                  onClick={() => handleDownloadReceipt(item)}
                />
                <Buttons
                  label="View Invoice"
                  className="invoice-button"
                  onClick={() => handleViewInvoice(item)}
                />
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
      ) : bookingHistory.length === 0 ? (
        <p>No booking history found.</p>
      ) : null}
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
      {isInvoiceOpen && selectedBooking ? (
        <Invoice
          key={selectedBooking?.id || Math.random()}
          bookingDetails={selectedBooking}
          onClose={() => setIsInvoiceOpen(false)}
        />
      ) : (
        <div>No booking details available.</div>
      )}
      {isReceiptOpen && selectedBooking && (
        <Receipt
          bookingDetails={selectedBooking}
          onClose={handleCloseReceipt}
        />
      )}
    </div>
  );
};

export default BookingHistory;
