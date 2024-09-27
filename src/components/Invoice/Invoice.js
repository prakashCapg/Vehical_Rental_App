// src/components/Invoice/Invoice.jsx
import React from "react";
import "./Invoice.css";

const Invoice = ({ bookingDetails, onClose }) => {
  console.log("Invoice component loaded", bookingDetails);
  if (!bookingDetails) {
    console.log("Booking details are undefined");
    return null;
  }

  const {
    id,
    type,
    brand,
    model,
    title,
    pickupDate,
    pickupTime,
    returnDate,
    dropoffTime,
    bookingReference,
    paymentMethod,
    registration,
    price,
    status,
  } = bookingDetails;

  return (
    <div className="invoice-overlay" onClick={onClose}>
      <div className="invoice-container" onClick={(e) => e.stopPropagation()}>
        <button className="invoice-close" onClick={onClose}>
          X
        </button>
        <h2>Booking Invoice</h2>
        <div className="invoice-header">
          <div>
            <h4>Booking ID: {id}</h4>
            <p>Reference: {bookingReference}</p>
          </div>
          <div>
            <h4>Status: {status}</h4>
          </div>
        </div>
        <hr />
        <div className="invoice-details">
          <div className="invoice-section">
            <h3>Vehicle Details</h3>
            <p>
              <strong>Type:</strong> {type}
            </p>
            <p>
              <strong>Brand:</strong> {brand}
            </p>
            <p>
              <strong>Model:</strong> {model}
            </p>
            <p>
              <strong>Title:</strong> {title}
            </p>
            <p>
              <strong>Registration Number:</strong> {registration}
            </p>
          </div>
          <div className="invoice-section">
            <h3>Booking Details</h3>
            <p>
              <strong>Pickup Date:</strong> {pickupDate}
            </p>
            <p>
              <strong>Pickup Time:</strong> {pickupTime}
            </p>
            <p>
              <strong>Return Date:</strong> {returnDate || "N/A"}
            </p>
            <p>
              <strong>Return Time:</strong> {dropoffTime}
            </p>
          </div>
          <div className="invoice-section">
            <h3>Payment Details</h3>
            <p>
              <strong>Payment Method:</strong> {paymentMethod}
            </p>
            <p>
              <strong>Price:</strong> Rs.{price}
            </p>
          </div>
        </div>
        <hr />
        <div className="invoice-footer">
          <p>Thank you for choosing our service!</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
