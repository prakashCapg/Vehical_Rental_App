import React from 'react';
import { useLocation } from 'react-router-dom';

const BookingDetails = () => {
  const location = useLocation();
  const { booking } = location.state || { booking: null }; // Get booking details from state

  if (!booking) {
    return <p>No booking details available.</p>;
  }

  return (
    <div className="booking-details border p-4 rounded shadow mt-4 min-h-screen">
      <h3 className="text-lg font-semibold">Booking ID: {booking.bookingID}</h3>
      <p><strong>Vehicle:</strong> {booking.vehicleDetails || booking.title}</p>
      <p><strong>Status:</strong> {booking.status}</p>
      <p><strong>Pickup Date:</strong> {booking.pickupDate}</p>
      <p><strong>Return Date:</strong> {booking.returnDate}</p>
      <p><strong>Booking Reference:</strong> {booking.bookingReference || 'N/A'}</p>
      <p><strong>Payment Method:</strong> {booking.paymentMethod || 'N/A'}</p>
      <p><strong>Total Cost:</strong> ${booking.totalCost}</p>
      
    </div>
  );
};

export default BookingDetails;
