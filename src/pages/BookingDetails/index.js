import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Accordion from "../../components/Accordion/Accordion";
import Dropdown from "../../components/Dropdown/Dropdown";
import {
  getBookingDetails,
  getVehicleDetailsByIdRef,
  saveBookingDetails,
} from "../../services/booking-details.service";
import "./style.css";
import EditButton from "../../components/EditButton/EditBuuton";
import BookingData from "../BookingManagement/BookingData";

const BookingDetails = () => {
  const location = useLocation();
  const [bookingData, setBookingData] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [vehicleData, setVehicleData] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const bookingId = location.state?.bookingId;

  const statusOptions = [
    "Booked",
    "Under Preparation",
    "Ready for Delivery",
    "Delivered",
    "Return",
    "Cancelled",
  ];

  useEffect(() => {
    const fetchBookingDetails = async () => {
      if (bookingId) {
        const response = await getBookingDetails(bookingId);
        if (response.success) {
          setBookingData(response.bookings);
          setSelectedStatus(response.bookings.status);

          const vehicleResponse = await getVehicleDetailsByIdRef(
            response.bookings.vehicleIdReference
          );
          if (vehicleResponse.success) {
            setVehicleData(vehicleResponse.vehicle);
          } else {
            console.log(vehicleResponse.error);
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

  const handleSave = async () => {
    if (bookingData) {
      const response = await saveBookingDetails(bookingId, {
        status: selectedStatus,
      });
      if (response.success) {
        setBookingData((prev) => ({ ...prev, status: selectedStatus }));
        handleToggleEdit();
      } else {
        console.log(response.error);
      }
    }
  };

  return (
    <div className="booking-details min-h-screen">
      <h2>Booking Details</h2>
      {bookingData ? (
        <Accordion
          header={
            <span className="font-medium">
              Booking ID: {bookingData.bookingId}
              <span className="mx-5">
                {vehicleData?.type} - {vehicleData?.brand}
              </span>
            </span>
          }
          status={
            <div style={{ display: "flex", alignItems: "center" }}>
              <strong>Status:</strong>
              <Dropdown
                options={statusOptions}
                placeholder={bookingData.status}
                value={selectedStatus}
                onSelect={handleStatusChange}
                disabled={!isEdit}
                style={{ marginLeft: "10px" }}
              />
              <EditButton
                isEditing={isEdit}
                onClick={
                  isEdit
                    ? () => handleSave(bookingData.bookingId)
                    : handleToggleEdit
                }
                label1="Save"
                label2="Modify"
              />
            </div>
          }
          details={<BookingData bookingData={bookingData} />}
        />
      ) : (
        <h1>No Booking Data Found</h1>
      )}
    </div>
  );
};

export default BookingDetails;
