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
import { fetchInvoiceData } from "../../services/invoice.service";

const BookingHistory = () => {
  const [bookingHistory, setBookingHistory] = useState([]);
  const [isCancelPopupVisible, setCancelPopupVisible] = useState(false);
  const [isModifyPopupVisible, setModifyPopupVisible] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isSupportPopupVisible, setSupportPopupVisible] = useState(false);
  const [isInvoicePopupVisible, setInvoicePopupVisible] = useState(false);
  const [invoiceData, setInvoiceData] = useState(null);
  const [isReceiptReady, setIsReceiptReady] = useState(false);

  const receiptRef = useRef();

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

  const handleViewInvoice = async (booking) => {
    setSelectedBooking(booking);

    try {
      const data = await fetchInvoiceData(booking.bookingId);
      console.log("Fetched invoice data:", data);
      setInvoiceData(data);
      setInvoicePopupVisible(true);
    } catch (error) {
      console.error("Failed to fetch invoice data:", error);
    }
  };

  const handleCloseInvoice = () => {
    setInvoicePopupVisible(false);
    setInvoiceData(null);
    setSelectedBooking(null);
  };

  const handleDownloadReceipt = () => {
    if (receiptRef.current) {
      receiptRef.current.downloadReceiptPDF();
    } else {
      console.error("Receipt ref not available!");
    }
  };

  useEffect(() => {
    if (isReceiptReady && receiptRef.current) {
      console.log("Triggering download for booking:", selectedBooking);
      setTimeout(() => {
        if (receiptRef.current) {
          receiptRef.current.downloadReceiptPDF();
          setIsReceiptReady(false);
        }
      }, 500);
    }
  }, [isReceiptReady, selectedBooking]);

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

  return (
    <div className="booking-list-container">
      {bookingHistory.length > 0 ? (
        bookingHistory.map((item, index) => (
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
                  Status -{" "}
                  <span className={`status-text ${item.status?.toLowerCase()}`}>
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
                  label="Contact Support"
                  type="yellow-button"
                  size="medium"
                  onClick={() => setSupportPopupVisible(true)}
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
      ) : (
        <p>No booking history found.</p>
      )}

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
          onClose={() => setModifyPopupVisible(false)}
          bookingDetails={selectedBooking}
          bookingId={selectedBooking.bookingId}
          onBookingModified={handleModifyBooking}
        />
      )}

      {isInvoicePopupVisible && invoiceData && (
        <Invoice
          isOpen={isInvoicePopupVisible}
          onClose={handleCloseInvoice}
          bookingDetails={invoiceData.booking}
          userDetails={invoiceData.user}
          vehicleDetails={invoiceData.vehicle}
        />
      )}

      {selectedBooking && (
        <Receipt
          ref={receiptRef}
          bookingDetail={selectedBooking}
          vehicleDetail={selectedBooking.vehicle}
        />
      )}

      <ContactSupportPopup
        isVisible={isSupportPopupVisible}
        onClose={() => setSupportPopupVisible(false)}
      />
    </div>
  );
};

export default BookingHistory;
