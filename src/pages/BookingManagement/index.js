import React, { useState, useEffect } from 'react';
import { getBookingsSpecificDate, getVehicleDetailsByIdRef, saveBookingDetails } from '../../services/booking-details.service'; 
import Accordion from '../../components/Accordion/Accordion'; 
import Dropdown from '../../components/Dropdown/Dropdown'; 
import Calendar from '../../components/Calendar';
import { useDateContext } from '../../context/DateContext'; 
import EditButton from '../../components/EditButton/EditBuuton';
import BookingData from './BookingData';
const BookingManagement = () => {
  const { selectedDate } = useDateContext(); 
  const [bookings, setBookings] = useState([]); 
  const [vehicleData, setVehicleData] = useState({}); 
  const [selectedStatus, setSelectedStatus] = useState(''); 
  const [isEdit, setIsEdit] = useState(false); 

  const statusOptions = ['Booked', 'UnderPreparation', 'ReadyForDelivery', 'Delivered', 'Completed', 'Cancelled']; 

  useEffect(() => {
    fetchBookings(); 
  }, [selectedDate]);

  const fetchBookings = async () => {
    const formattedDate = selectedDate.toISOString().split('T')[0]; 
    const response = await getBookingsSpecificDate(formattedDate); 

    if (response.success) {
      const bookingList = response.bookings;
      setBookings(bookingList);
      setSelectedStatus(bookingList[0]?.status); 
      const updatedVehicleData = {};
      for (const booking of bookingList) {
        if (booking.vehicleIdReference) {
          const vehicleResponse = await getVehicleDetailsByIdRef(booking.vehicleIdReference);
          if (vehicleResponse.success) {
            updatedVehicleData[booking.vehicleIdReference] = vehicleResponse.vehicle;
          }
        }
      }
      setVehicleData(updatedVehicleData);
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

  const handleSave = async (bookingId) => {
    const updatedBooking = { status: selectedStatus };
    const saveResult = await saveBookingDetails(bookingId, updatedBooking);
    
    if (saveResult.success) {
      console.log('Updated status:', selectedStatus);
      fetchBookings(); 
    } 
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
                      {`${vehicleData[bookingData.vehicleIdReference]?.type || ''} - ${vehicleData[bookingData.vehicleIdReference]?.brand || ''}`}
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
                <EditButton
                  isEditing={isEdit}
                  onClick={isEdit ? () => handleSave(bookingData.bookingId) : handleToggleEdit}
                  label1="Save"      
                  label2="Modify"   
                />
              </div>
            }
            details={
              <BookingData
                bookingData={bookingData}
              />
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

