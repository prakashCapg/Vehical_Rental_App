import React, { useEffect, useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import PopUp from "../../../components/PopUp/Popup";
import Buttons from "../../../components/Buttons/Buttons";
import "../Invoice/index.css";
import { fetchInvoiceData } from "../../../services/invoice.service";

const Invoice = ({ isOpen, onClose, bookingId }) => {
  const invoiceRef = useRef();

  const [bookingDetails, setBookingDetails] = useState(null);
  const [vehicleDetails, setVehicleDetails] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchInvoiceData(bookingId);
        console.log("Fetched Data:", data);

        const { booking, vehicle, user } = data;

        if (!booking || !vehicle || !user) {
          console.error("Booking, vehicle, or user data is missing");
          return;
        }

        setBookingDetails(booking);
        setVehicleDetails(vehicle);
        setUserProfile(user);
      } catch (error) {
        console.error("Error fetching invoice data:", error.message || error);
      }
    };

    if (isOpen && bookingId) {
      fetchData();
    }
  }, [isOpen, bookingId]);

  if (!isOpen || !bookingDetails || !vehicleDetails || !userProfile) {
    return null;
  }

  const {
    bookingId: bookingID,
    pickupDate,
    returnDate,
    bookingAmount,
    status,
  } = bookingDetails;
  const { type, category, model, brand, rentPricePerHour } = vehicleDetails;
  const {
    Name,
    emailId,
    phoneNumber,
    AddressLine1,
    AddressLine2,
    City,
    State,
    PostalCode,
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
        margin: [0.5, 0.5, 0.5, 0.5], // Set all margins to 0.5 inches
        filename: `invoice_${bookingID}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2, // Adjust the scale for quality
          useCORS: true,
          scrollY: 0,
          height: element.scrollHeight + 50, // Increase the height by 50px to ensure everything is captured
        },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      })
      .save()
      .catch((error) => console.error("Error generating PDF:", error));
  };

  return (
    <PopUp
      title="Invoice Details"
      isOpen={isOpen}
      onClose={onClose}
      width="800px"
      height="800px"
    >
      <div ref={invoiceRef} className="invoice-content">
        <div className="invoice-header">
          <div className="company-details">
            <p className="company-name">YOUR COMPANY</p>
            <p>1234 Street Address</p>
            <p>{`${City}, ${State}, ${PostalCode}`}</p>
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
            <p>{Name}</p>
            <p>{AddressLine1}</p>
            <p>{AddressLine2}</p>
            <p>{`${City}, ${State}, ${PostalCode}`}</p>
            <p>{phoneNumber}</p>
            <p>{emailId}</p>
          </div>

          <div className="invoice-info">
            <p>
              <strong>Invoice #:</strong> {bookingID}
            </p>
            <p>
              <strong>Date:</strong> {pickupDate}
            </p>
            <p>
              <strong>Due Date:</strong> {returnDate || "N/A"}
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
              <td>Rs.{rentPricePerHour}</td>
              <td>Rs.{bookingAmount}</td>
            </tr>
          </tbody>
        </table>

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

        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <Buttons
            label="Download Invoice"
            type="green-button"
            size="medium"
            onClick={downloadPDF}
          />
        </div>

        <div className="notes">
          <p>
            <strong>NOTES:</strong>
          </p>
          <p>
            Thank you for choosing our services. If you have any questions, feel
            free to contact us at support@yourcompany.com.
          </p>
        </div>
      </div>
    </PopUp>
  );
};

export default Invoice;
