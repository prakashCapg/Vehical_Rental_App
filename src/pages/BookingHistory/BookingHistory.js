import React, { useEffect, useRef, useState } from "react";
import "./BookingHistory.css";
import Accordion from "../../components/Accordion/Accordion";
import { getBookingHistory } from "../../services/booking-history.service";
import { CancelBooking } from "./CancelBooking";
import { ContactSupportPopup } from "./Contact_Support";
import { ModifyBookingPopup } from "./ModifyBooking";
import Invoice from "./Invoice";
import Receipt from "./Receipt";
import Buttons from "../../components/Button/Buttons";

const BookingHistory = () => {
  const [bookingHistory, setBookingHistory] = useState([]);
  const [displayHistory, setDisplayHistory] = useState([]);
  const [isCancelPopupVisible, setCancelPopupVisible] = useState(false);
  const [isModifyPopupVisible, setModifyPopupVisible] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isSupportPopupVisible, setSupportPopupVisible] = useState(false);
  const [isInvoiceOpen, setInvoiceOpen] = useState(false);
  const [isReceiptOpen, setReceiptOpen] = useState(false);

  const receiptRef = useRef();

  useEffect(() => {
    const fetchBookingHistory = async () => {
      try {
        const res = await getBookingHistory();
        console.log("Fetched bookings:", res.bookings);
        if (res.success && res.bookings && res.bookings.length > 0) {
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
    setSelectedBooking(booking);
    setInvoiceOpen(true);
  };

  const handleDownloadReceipt = (booking) => {
    setSelectedBooking(booking);
    setReceiptOpen(true);
  };

  useEffect(() => {
    if (isReceiptOpen && selectedBooking) {
      receiptRef.current.downloadReceiptPDF();
    }
  }, [isReceiptOpen, selectedBooking]);

  const handleCloseCancelPopup = () => {
    if (selectedBooking) {
      setBookingHistory((prevBookings) =>
        prevBookings.map((booking) =>
          booking.bookingId === selectedBooking.bookingId
            ? { ...booking, status: "Cancelled" }
            : booking
        )
      );
    }
    setCancelPopupVisible(false);
    setSelectedBooking(null);
  };

  const handleCloseModifyPopup = () => {
    setModifyPopupVisible(false);
    setSelectedBooking(null);
  };

  const handleModifyBooking = (updatedBooking) => {
    setBookingHistory((prevBookings) =>
      prevBookings.map((booking) =>
        booking.bookingId === updatedBooking.id
          ? {
              ...booking,
              pickupDate: updatedBooking.pickupDate,
              returnDate: updatedBooking.returnDate,
            }
          : booking
      )
    );
  };

  const handleSupportClick = () => {
    setSupportPopupVisible(true);
  };

  const handleCloseSupportPopup = () => {
    setSupportPopupVisible(false);
  };

  const handleCloseInvoice = () => {
    setInvoiceOpen(false);
    setSelectedBooking(null);
  };

  return (
    <div className="booking-list-container">
      {displayHistory.length > 0 ? (
        displayHistory.map((item, index) => (
          <Accordion
            key={item.bookingId}
            header={
              <>
                <span className="booking-number">Booking No. {index + 1}</span>
                <span className="vehicle-details">
                  {item.vehicleType} -{" "}
                  {item.selectedCategory || item.vehicleCategory}
                </span>
                <span className="status" style={{ marginLeft: "75px" }}>
                  Status -
                  <span
                    className={`status-text ${
                      item.status ? item.status.toLowerCase() : ""
                    }`}
                  >
                    {item.status}
                  </span>
                </span>
              </>
            }
            details={
              <div className="booking-details">
                <div className="details-table">
                  <div className="detail-row">
                    <div className="detail-title">Vehicle Reference:</div>
                    <div className="detail-value">{item.vehicleId}</div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-title">Booking Date:</div>
                    <div className="detail-value">{item.bookingDate}</div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-title">Booking Time:</div>
                    <div className="detail-value">{item.bookingTime}</div>
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
                    <div className="detail-title">Booking Amount:</div>
                    <div className="detail-value">Rs.{item.bookingId}</div>
                  </div>
                </div>
              </div>
            }
            actions={
              <div className="button-container">
                <Buttons
                  label="Contact Support"
                  type="yellow-button"
                  size="medium"
                  onClick={handleSupportClick}
                />
                <Buttons
                  label="Download Receipt"
                  type="blue-button"
                  size="medium"
                  onClick={() => handleDownloadReceipt(item)}
                />
                <Buttons
                  label="View Invoice"
                  type="gray-button"
                  size="medium"
                  onClick={() => handleViewInvoice(item)}
                />
                <Buttons
                  label="Modify Booking"
                  type="green-button"
                  size="medium"
                  onClick={() => handleModifyClick(item)}
                />
                <Buttons
                  label="Cancel Booking"
                  type="red-button"
                  size="medium"
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
        <CancelBooking
          isVisible={isCancelPopupVisible}
          onClose={handleCloseCancelPopup}
          bookingDate={selectedBooking.bookingDate}
          bookingId={selectedBooking.bookingId}
        />
      )}

      {selectedBooking && (
        <ModifyBookingPopup
          isVisible={isModifyPopupVisible}
          onClose={handleCloseModifyPopup}
          bookingDetails={selectedBooking}
          bookingId={selectedBooking.bookingId}
          onBookingModified={handleModifyBooking}
        />
      )}

      {selectedBooking && (
        <Invoice
          isOpen={isInvoiceOpen}
          onClose={handleCloseInvoice}
          // bookingDetails={selectedBooking}
          // vehicleDetails={selectedBooking.vehicle}
          // userProfile={selectedBooking.userProfile}
          bookingDetails={selectedBooking}
        />
      )}

      {selectedBooking && (
        <Receipt
          ref={receiptRef}
          isOpen={isReceiptOpen}
          bookingDetail={selectedBooking}
          vehicleDetail={selectedBooking.vehicle}
        />
      )}

      <ContactSupportPopup
        isVisible={isSupportPopupVisible}
        onClose={handleCloseSupportPopup}
      />
    </div>
  );
};

export default BookingHistory;
