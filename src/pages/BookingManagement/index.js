import React, { useState, useEffect } from 'react';
import { getBookingsSpecificDate } from '../../services/booking-details.service'; 
import Accordion from '../../components/Accordion/Accordion'; 
import Dropdown from '../../components/Dropdown/Dropdown'; 
import Calendar from '../../components/Calendar';
import { useDateContext } from '../../context/DateContext'; 
const BookingManagement = () => {
  const { selectedDate } = useDateContext(); 
  const [bookings, setBookings] = useState([]); 
  const [selectedStatus, setSelectedStatus] = useState(''); 
  const [isEdit, setIsEdit] = useState(false); 
  const statusOptions = ['Booked', 'UnderPreparation', 'ReadyForDelivery', 'Delivered', 'Completed', 'Cancelled']; 
  useEffect(() => {
    fetchBookings(); 
  }, [selectedDate]);
  const fetchBookings = () => {
    const formattedDate = selectedDate.toISOString().split('T')[0]; 
    const response = getBookingsSpecificDate(formattedDate); 
    if (response.success) {
      setBookings(response.bookings); 
    } else {
      setBookings([]); 
    }
  };
  const handleStatusChange = (newStatus) => {
    setSelectedStatus(newStatus);
  };
  const handleToggleEdit = () => {
    setIsEdit(!isEdit);
  };
  const handleSave = () => {
    console.log('Updated status:', selectedStatus);
    setIsEdit(false);
  };
  return (
    <div className="booking-details-accordion">
      <Calendar />
      {bookings.length > 0 ? (
        bookings.map((bookingData) => (
          <Accordion
            key={bookingData.bookingId}
            header={
              <span className='font-medium'>
                Booking ID: {bookingData.bookingId}
                <span className='mx-5'>
                  {bookingData.vehicleIdReference ? `Vehicle ID: ${bookingData.vehicleIdReference}` : ''}
                </span>
              </span>
            }
            status={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <strong>Status:</strong>
                <Dropdown
                  options={statusOptions}
                  placeholder={bookingData.status}
                  value={selectedStatus}
                  onSelect={handleStatusChange}
                  disabled={!isEdit}
                  style={{ marginLeft: '10px' }}
                />
                <button className='btn-header' onClick={isEdit ? handleSave : handleToggleEdit}>
                  {isEdit ? 'Save' : 'Modify'}
                </button>
              </div>
            }
            details={
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
            }
          />
        ))
      ) : (
        <p>No bookings available</p>
      )}
    </div>
  );
};
export default BookingManagement;