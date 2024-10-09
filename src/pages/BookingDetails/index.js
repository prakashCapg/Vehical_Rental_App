import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Accordion from '../../components/Accordion/Accordion'; 
import Dropdown from '../../components/Dropdown/Dropdown'; 
import { getBookingDetails, getVehicleDetailsByIdRef, saveBookingDetails } from '../../services/booking-details.service';
import './style.css'
const BookingDetails = () => {
  const location = useLocation(); 
  const [bookingData, setBookingData] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [vehicleData,setVehicleData]=useState(null);
  const [isEdit, setIsEdit] = useState(false); 
  const bookingId = location.state?.bookingId;

  const statusOptions = ['Booked', 'Under Preparation', 'Ready for Delivery','Delivered',  'Return',  'Cancelled']; 

  useEffect(() => {
    const fetchBookingDetails = async () => {
      if (bookingId) {
        const response = await getBookingDetails(bookingId);
        if (response.success) {
          setBookingData(response.bookings);
          setSelectedStatus(response.bookings.status);
          const vehicleResponse=getVehicleDetailsByIdRef(response.bookings.vehicleIdReference);
          if(vehicleResponse.success){
            setVehicleData(vehicleResponse.vehicle);
          }
        } else {
          console.log(response.error);
        }
      }
    };

    fetchBookingDetails();
  }, [bookingId]);

  const handleStatusChange = (newStatus) => {
    setSelectedStatus(newStatus);
    console.log("Status changed to:", newStatus);
  };

  const handleToggleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const handleSave = () => {
    if (bookingData) {
      const response = saveBookingDetails(bookingId, { status: selectedStatus });
      if (response.success) {
        setBookingData((prev) => ({ ...prev, status: selectedStatus }));
        handleToggleEdit(); 
      } else {
        console.log(response.error);
      }
    }
  };

  return (
    <div className="booking-details">
      <h2>Booking Details</h2>
      {bookingData ? (
        <Accordion
        header={
          <span className='font-medium'>
            Booking ID: {bookingData.bookingId}
            <span className='mx-5 ' > 
            {vehicleData.type} - {vehicleData.brand}
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
              <button className='ml-2'onClick={isEdit ? handleSave : handleToggleEdit}>
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
                  <div className="detail-value">{bookingData.returnDate || "N/A"}</div>
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
      ) : (
        <h1>No Booking Data Found</h1>
      )}
    </div>
  );
};

export default BookingDetails;