import React, { useState } from "react";
import "./BookingHistory.css";

// BookingItem Component using Composition
const BookingItem = ({ children, detailsVisible, onToggleDetails }) => (
  <div className="booking-card">
    <div className="booking-header">
      <div>{children.header}</div>
      <div className="status-container">
        {children.status}
        <button className="toggle-button" onClick={onToggleDetails}>
          {detailsVisible ? "-" : "+"}
        </button>
      </div>
    </div>
    {detailsVisible && (
      <div className="booking-details">
        <div className="details-box">
          <div className="details-text">{children.details}</div>
          {children.actions}
        </div>
      </div>
    )}
  </div>
);

// BookingList Component (Parent)
const BookingHistory = () => {
  const [visibleDetails, setVisibleDetails] = useState(null);

  const toggleDetails = (index) => {
    setVisibleDetails(visibleDetails === index ? null : index);
  };

  return (
    <div className="booking-list-container">
      {[...Array(5)].map((_, index) => (
        <BookingItem
          key={index}
          detailsVisible={visibleDetails === index}
          onToggleDetails={() => toggleDetails(index)}
        >
          {{
            header: (
              <>
                <span className="booking-number">Booking No. {index + 1}</span>
                <span className="vehicle-details">Vehicle Details</span>
              </>
            ),
            status: <span className="status">Status </span>,
            details: <>Other details of booking </>,
            actions: <button className="cancel-button">Cancel Booking</button>,
          }}
        </BookingItem>
      ))}
    </div>
  );
};

export default BookingHistory;
