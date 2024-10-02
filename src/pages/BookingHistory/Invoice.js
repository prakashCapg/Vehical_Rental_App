import React, { useEffect, useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import PopUp from "../../components/PopUp/Popup";
import Buttons from "../../components/Button/Buttons";
import "./Invoice.css";
import { getInvoiceFakeAPI } from "../../fakeAPI/Invoice-fake-api";

const Invoice = ({ isOpen, onClose }) => {
  const invoiceRef = useRef();

  const [bookingDetails, setBookingDetails] = useState(null);
  const [vehicleDetails, setVehicleDetails] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data...");
      const data = getInvoiceFakeAPI();
      console.log("Fetched Data:", data);

      const bookings = data.Bookings.Bookings;
      const vehicles = data.VehicleData.VehicleData;
      const users = data.UserProfileData.UserProfileData;

      if (bookings.length === 0) {
        console.error("No bookings found");
        return;
      }

      const selectedBooking = bookings[0];
      console.log(
        "Selected Booking:",
        JSON.stringify(selectedBooking, null, 2)
      );

      const relatedVehicle = vehicles.find(
        (vehicle) => vehicle.VehicleId === selectedBooking.vehicleIdReference
      );

      const userID = selectedBooking.customerId;
      console.log("User ID from Selected Booking:", userID);

      if (!userID) {
        console.error("User ID not found in selected booking");
        return;
      }

      const relatedUser = users.find(
        (user) => Number(user.userID) === Number(userID)
      );

      if (relatedUser) {
        console.log("Related User:", relatedUser);
        setUserProfile(relatedUser);
      } else {
        console.error("No related user found for userID:", userID);
        return;
      }

      if (!selectedBooking || !relatedVehicle || !relatedUser) {
        console.error("No booking found");
        return;
      }

      setBookingDetails(selectedBooking);
      setVehicleDetails(relatedVehicle);
    };

    if (isOpen) {
      fetchData();
    }
  }, [isOpen]);

  if (!isOpen || !bookingDetails || !vehicleDetails || !userProfile) {
    return null;
  }

  const { bookingID, pickupDate, dropOffDate, bookingAmount, status } =
    bookingDetails;
  const { type, category, model, brand, rentalPrice } = vehicleDetails;
  const {
    name,
    emailID,
    phoneNumber,
    addressLine1,
    addressLine2,
    city,
    state,
    postalCode,
  } = userProfile;

  const downloadPDF = () => {
    const element = invoiceRef.current;

    if (!element) {
      console.error("Element not found for PDF generation");
      return;
    }

    html2pdf()
      .from(element)
      .set({
        margin: 1,
        filename: `invoice_${bookingID}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .save()
      .catch((error) => console.error("Error generating PDF:", error));
  };

  return (
    <PopUp title="Invoice Details" isOpen={isOpen} onClose={onClose}>
      <div ref={invoiceRef} className="invoice-content">
        <div className="invoice-header">
          <div className="company-details">
            <p className="company-name">YOUR COMPANY</p>
            <p>1234 Street Address</p>
            <p>city, state, postalCode</p>
            <p>www.yourcompany.com</p>
            <p>contact@yourcompany.com</p>
          </div>
          <div className="invoice-title">INVOICE</div>
        </div>

        <div className="invoice-details">
          <div className="bill-to">
            <p>
              <strong>BILL TO:</strong>
            </p>
            <p>name</p>
            <p>addressLine1</p>
            <p>addressLine2</p>
            <p>city, state, postalCode</p>
            <p>phoneNumber</p>
            <p>emailID</p>
          </div>

          <div className="invoice-info">
            <p>
              <strong>Invoice #:</strong> {bookingID}
            </p>
            <p>
              <strong>Date:</strong> {pickupDate}
            </p>
            <p>
              <strong>Due Date:</strong> {dropOffDate || "N/A"}
            </p>
            <p>
              <strong>Status:</strong> {status}
            </p>
          </div>

          <div style={{ clear: "both" }}></div>
        </div>

        <table>
          <thead>
            <tr>
              <th>ITEM DESCRIPTION</th>
              <th>QTY</th>
              <th>PRICE</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{`${brand} ${model} - ${type} (${category})`}</td>
              <td>1</td>
              <td>Rs.{rentalPrice}</td>
              <td>Rs.{bookingAmount}</td>
            </tr>
          </tbody>
        </table>

        <div className="notes">
          <p>
            <strong>NOTES:</strong>
          </p>
          <p>
            Thank you for choosing our services. If you have any questions, feel
            free to contact us at support@yourcompany.com.
          </p>
        </div>

        <div className="totals-payment-container">
          <table className="totals">
            <tbody>
              <tr>
                <td>SUBTOTAL</td>
                <td>Rs.{bookingAmount}</td>
              </tr>
              <tr>
                <td>DISCOUNT</td>
                <td>Rs.0.00</td>
              </tr>
              <tr>
                <td>TAX</td>
                <td>Rs.0.00</td>
              </tr>
              <tr>
                <td>
                  <strong>TOTAL</strong>
                </td>
                <td>
                  <strong>Rs.{bookingAmount}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="invoice-footer">
          <p>Thank you for choosing our service!</p>
        </div>

        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <Buttons
            label="Download Invoice"
            type="green-button"
            size="medium"
            onClick={downloadPDF}
          />
        </div>
      </div>
    </PopUp>
  );
};

export default Invoice;
