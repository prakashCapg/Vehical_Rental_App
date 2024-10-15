import React, { useEffect, useState } from "react";
import "./BookingHistory.css";
import Accordion from "../../components/Accordion/Accordion";
import Buttons from "../../components/Buttons/Buttons";
import { getBookingHistory } from "../../services/booking-history.service";
import { CancelBooking } from "../BookingHistory/CancelBooking/index";
import { ContactSupportPopup } from "../BookingHistory/Contact_Support/index";
import { ModifyBookingPopup } from "../BookingHistory/ModifyBooking/index";
import Invoice from "../BookingHistory/Invoice/index";
import Receipt from "../BookingHistory/Receipt/index";
import Tracking from "../BookingHistory/Tracking/index";
import { VehicleContextProvider } from "../../context/VehicleContextProvider";

const BookingHistory = () => {
  const [bookingHistory, setBookingHistory] = useState([]);
  const [isCancelPopupVisible, setCancelPopupVisible] = useState(false);
  const [isModifyPopupVisible, setModifyPopupVisible] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isSupportPopupVisible, setSupportPopupVisible] = useState(false);
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);
  const [isReceiptVisible, setIsReceiptVisible] = useState(false);
  const [trackingBookingId, settrackingBookingId] = useState(null);

  useEffect(() => {
    const fetchBookingHistory = async () => {
      try {
        const res = await getBookingHistory();
        if (res.success && res.bookings.length > 0) {
          setBookingHistory(res.bookings);
        }
      } catch (error) {
        console.error("Error fetching booking history:", error);
      }
    };
    fetchBookingHistory();
  }, []);

  const handleCancelClick = (booking) => {
    setSelectedBooking(booking);
    setCancelPopupVisible(true);
  };

  const handleModifyClick = (booking) => {
    setSelectedBooking(booking);
    setModifyPopupVisible(true);
  };

  const handleSupportClick = () => {
    setSupportPopupVisible(true);
  };

  const handleViewInvoice = (booking) => {
    setSelectedBooking(booking);
    setIsInvoiceOpen(true);
  };

  const handleCloseInvoice = () => {
    setIsInvoiceOpen(false);
    setSelectedBooking(null);
  };

  const handleDownloadReceipt = (booking) => {
    setSelectedBooking(booking);
    setIsReceiptVisible(true);
  };

  const handleReceiptDownloadComplete = () => {
    setIsReceiptVisible(false);
    setSelectedBooking(null);
  };

  const handleCloseCancelPopup = () => {
    setCancelPopupVisible(false);
    setSelectedBooking(null);
  };

  const handleBookingCancelled = () => {
    if (selectedBooking) {
      setBookingHistory((prevBookings) =>
        prevBookings.map((booking) =>
          booking.bookingId === selectedBooking.bookingId
            ? { ...booking, status: "Cancelled" }
            : booking
        )
      );
    }
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
    setModifyPopupVisible(false);
    setSelectedBooking(null);
  };

  const handleTrackingClick = (booking) => {
    settrackingBookingId((prevId) =>
      prevId === booking.bookingId ? null : booking.bookingId
    );
  };

  const handleCloseTracking = () => {
    settrackingBookingId(null);
    setSelectedBooking(null);
  };

  return (
    <div className="booking-list-container">
      {bookingHistory.length > 0 ? (
        bookingHistory.map((item, index) => (
          <Accordion
            key={item.bookingId}
            header={
              <div className="booking-header">
                <div className="booking-number">Booking No. {index + 1}</div>
                <div>
                  <span className="vehicle-details">{item.vehicleType} - </span>
                  <span className="vehicle-details">
                    {item.selectedCategory || item.vehicleCategory}
                  </span>
                </div>

                <div className="status" style={{ marginLeft: "60px" }}>
                  Status -{" "}
                  <span className={`status-text ${item.status?.toLowerCase()}`}>
                    {item.status}
                  </span>
                </div>
              </div>
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
                    <div className="detail-value">Rs.{item.bookingAmount}</div>
                  </div>
                </div>
              </div>
            }
            actions={
              <div className="button-container">
                <Buttons
                  label="Tracking"
                  type="lightseagreen-button"
                  size="medium"
                  onClick={() => handleTrackingClick(item)}
                />

                <Buttons
                  label="Contact Support"
                  type="yellow-button"
                  size="medium"
                  onClick={() => {
                    setSelectedBooking(item);
                    handleSupportClick();
                  }}
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
                {trackingBookingId === item.bookingId && (
                  <div className="tracking-component">
                    <Tracking
                      status={item.status}
                      bookingId={item.bookingId}
                      onClose={handleCloseTracking}
                    />
                  </div>
                )}
              </div>
            }
          />
        ))
      ) : (
        <p>No booking history found.</p>
      )}
      {selectedBooking && (
        <CancelBooking
          isVisible={isCancelPopupVisible}
          onClose={handleCloseCancelPopup}
          bookingDate={selectedBooking.bookingDate}
          bookingId={selectedBooking.bookingId}
          onBookingCancelled={handleBookingCancelled}
        />
      )}
      <VehicleContextProvider>
        {selectedBooking && (
          <ModifyBookingPopup
            isVisible={isModifyPopupVisible}
            onClose={() => setModifyPopupVisible(false)}
            bookingDetails={selectedBooking}
            bookingId={selectedBooking.bookingId}
            onBookingModified={handleModifyBooking}
          />
        )}
      </VehicleContextProvider>
      {selectedBooking && (
        <Invoice
          isOpen={isInvoiceOpen}
          onClose={handleCloseInvoice}
          bookingId={selectedBooking.bookingId}
        />
      )}

      {isReceiptVisible && selectedBooking && (
        <Receipt
          bookingId={selectedBooking.bookingId}
          onDownloadComplete={handleReceiptDownloadComplete}
        />
      )}

      <ContactSupportPopup
        isVisible={isSupportPopupVisible}
        onClose={() => setSupportPopupVisible(false)}
        bookingId={selectedBooking ? selectedBooking.bookingId : null}
      />
    </div>
  );
};

export default BookingHistory;
