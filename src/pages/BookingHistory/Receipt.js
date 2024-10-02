import React, { forwardRef, useImperativeHandle, useRef } from "react";
import html2pdf from "html2pdf.js";
import "./Receipt.css";

const Receipt = forwardRef(({ bookingDetail, vehicleDetail }, ref) => {
  const receiptRef = useRef(null);

  const downloadReceiptPDF = () => {
    const element = receiptRef.current;

    if (!element) {
      console.error("Receipt element not found!");
      return;
    }

    const opt = {
      margin: 1,
      filename: `receipt_${bookingDetail.bookingID}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    setTimeout(() => {
      html2pdf()
        .from(element)
        .set(opt)
        .save()
        .catch((error) => console.error("Error generating PDF:", error));
    }, 100);
  };

  useImperativeHandle(ref, () => ({
    downloadReceiptPDF,
  }));

  if (!bookingDetail || !vehicleDetail) {
    return <p>Loading receipt details...</p>;
  }

  return (
    <div ref={receiptRef} className="receipt-content">
      <div className="receipt-header">
        <div className="company-details">
          <p className="company-name">YOUR COMPANY</p>
          <p>Street Address</p>
          <p>City, State, Zip Code</p>
          <p>www.yourwebsite.com</p>
          <p>contact@yourmail.com</p>
        </div>
        <div className="receipt-title">RECEIPT</div>
      </div>

      <div className="receipt-details">
        <p>
          <strong>Receipt #:</strong> {bookingDetail.bookingID}
        </p>
        <p>
          <strong>Date:</strong> {bookingDetail.pickupDate}
        </p>
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
            <td>{vehicleDetail.category || "N/A"}</td>
            <td>1</td>
            <td>Rs.{vehicleDetail.rentPricePerHour || "N/A"}</td>
            <td>Rs.{bookingDetail.bookingAmount || "N/A"}</td>
          </tr>
        </tbody>
      </table>

      <div className="receipt-footer">
        <p>
          <strong>Status:</strong> {bookingDetail.status}
        </p>
        <p>Thank you for your payment!</p>
      </div>
    </div>
  );
});

export default Receipt;
