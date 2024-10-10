// developer : SIDAM AVINASH 
// display the booking details
import React from 'react';

const BookingData = ({ bookingData }) => {
  return (
    <div className="booking-details">
      <div className="details-table">
        <div className="detail-row">
          <div className="detail-title">Booking Date:</div>
          <div className="detail-value">{bookingData.bookingDate}</div>
        </div>
        <div className="detail-row">
          <div className="detail-title">Booking Time:</div>
          <div className="detail-value">{bookingData.bookingTime}</div>
        </div>
        <div className="detail-row">
          <div className="detail-title">Pickup Date:</div>
          <div className="detail-value">{bookingData.pickupDate}</div>
        </div>
        <div className="detail-row">
          <div className="detail-title">Return Date:</div>
          <div className="detail-value">{bookingData.returnDate || 'N/A'}</div>
        </div>
        <div className="detail-row">
          <div className="detail-title">Vehicle ID Reference:</div>
          <div className="detail-value">{bookingData.vehicleIdReference}</div>
        </div>
        <div className="detail-row">
          <div className="detail-title">Booking Amount:</div>
          <div className="detail-value">${bookingData.bookingAmount}</div>
        </div>
      </div>
    </div>
  );
};

export default BookingData;
