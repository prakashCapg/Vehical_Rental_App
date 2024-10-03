import React, { useRef, useEffect, useState } from "react";
import "../Receipt/index.css";
import html2pdf from "html2pdf.js";
import { fetchReceipt } from "../../../services/receipt.service";

const Receipt = ({ bookingId, onDownloadComplete }) => {
  const receiptRef = useRef();
  const [bookingDetails, setBookingDetails] = useState(null);
  const [vehicleDetails, setVehicleDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchReceipt(bookingId);
        console.log("Fetched Data:", data);

        const { booking, vehicle } = data;

        if (!booking || !vehicle) {
          console.error("Booking or vehicle data is missing");
          return;
        }

        setBookingDetails(booking);
        setVehicleDetails(vehicle);
      } catch (error) {
        console.error("Error fetching receipt data:", error.message || error);
      }
    };

    if (bookingId) {
      fetchData();
    }
  }, [bookingId]);

  useEffect(() => {
    if (bookingDetails && vehicleDetails) {
      const element = receiptRef.current;

      if (!element) {
        console.error("Element not found for PDF generation");
        return;
      }

      html2pdf()
        .from(element)
        .set({
          margin: 1,
          filename: `receipt_${bookingDetails.bookingId}.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: {
            scale: 2,
            scrollY: 0,
          },
          jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
          pagebreak: { mode: ["css", "legacy"] },
        })
        .save()
        .then(() => {
          onDownloadComplete();
        })
        .catch((error) => console.error("Error generating PDF:", error));
    }
  }, [bookingDetails, vehicleDetails, onDownloadComplete]);

  if (!bookingDetails || !vehicleDetails) {
    return null;
  }

  const {
    bookingId: bookingID,
    pickupDate,
    returnDate,
    bookingDate,
    bookingAmount,
  } = bookingDetails;
  const { type, category, model } = vehicleDetails;

  return (
    <div
      className="receipt-container"
      ref={receiptRef}
      style={{ display: "none" }}
    >
      <div className="receipt-header">
        <h2>Receipt</h2>
        <div>
          <p>
            <strong>Receipt Number:</strong> {bookingID}
          </p>
          <p>
            <strong>Booking Date:</strong> {bookingDate}
          </p>
          <p>
            <strong>Pickup Date:</strong> {pickupDate}
          </p>
          <p>
            <strong>Return Date:</strong> {returnDate || "N/A"}
          </p>
        </div>
      </div>

      <div className="receipt-details">
        <h3>Vehicle Details</h3>
        <p>
          <strong>Vehicle Type:</strong> {type}
        </p>
        <p>
          <strong>Model:</strong> {model}
        </p>
        <p>
          <strong>Category:</strong> {category}
        </p>
      </div>

      <div className="receipt-amount">
        <h3>Total Amount</h3>
        <p>Rs. {bookingAmount}</p>
      </div>
    </div>
  );
};

export default Receipt;
