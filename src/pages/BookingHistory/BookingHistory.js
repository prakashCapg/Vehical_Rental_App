import React from "react";
import Accordion from "../../components/Accordion/Accordion";
import "./BookingHistory.css";

const BookingHistory = () => {
  return (
    <div className="booking-list-container">
      {[...Array(5)].map((_, index) => (
        <Accordion
          key={index}
          header={
            <>
              <span className="booking-number">Booking No. {index + 1}</span>
              <span className="vehicle-details">Vehicle Details</span>
            </>
          }
          status={<span className="status">Status</span>}
          details={
            <div className="booking-details">
              <div className="detail-item">
                <strong>Date:</strong> {new Date().toLocaleDateString()}
              </div>
              <div className="detail-item">
                <strong>Time:</strong> {new Date().toLocaleTimeString()}
              </div>
              <div className="detail-item">
                <strong>Pickup Location:</strong> Location A
              </div>
              <div className="detail-item">
                <strong>Drop-off Location:</strong> Location B
              </div>
              <div className="detail-item">
                <strong>Booking Reference:</strong> #REF{index + 1000}
              </div>
              <div className="detail-item">
                <strong>Payment Method:</strong> Credit Card
              </div>
              <div className="detail-item">
                <strong>Total Cost:</strong> $50.00
              </div>
            </div>
          }
          actions={<button className="cancel-button">Cancel Booking</button>}
        />
      ))}
    </div>
  );
};

export default BookingHistory;
