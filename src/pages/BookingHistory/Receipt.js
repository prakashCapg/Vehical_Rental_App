import React, { useRef, useImperativeHandle, forwardRef } from "react";
import html2pdf from "html2pdf.js";
import "./Receipt.css";

const Receipt = forwardRef(({ isOpen, bookingDetail, vehicleDetail }, ref) => {
  const receiptRef = useRef();

  useImperativeHandle(ref, () => ({
    downloadReceiptPDF() {
      const element = receiptRef.current;

      if (!element) {
        console.error("Element not found for PDF generation");
        return;
      }

      html2pdf()
        .from(element)
        .set({
          margin: 1,
          filename: `receipt_${bookingDetail.bookingID}.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        })
        .save()
        .catch((error) => console.error("Error generating PDF:", error));
    },
  }));

  if (!isOpen || !bookingDetail || !vehicleDetail) {
    return null;
  }

  const { bookingID, pickupDate, bookingAmount, status } = bookingDetail;
  const { category, rentalPrice } = vehicleDetail;

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
          <strong>Receipt #:</strong> {bookingID}
        </p>
        <p>
          <strong>Date:</strong> {pickupDate}
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
            <td>{category}</td>
            <td>1</td>
            <td>Rs.{rentalPrice}</td>
            <td>Rs.{bookingAmount}</td>
          </tr>
        </tbody>
      </table>

      <div className="receipt-footer">
        <p>
          <strong>Status:</strong> {status}
        </p>
        <p>Thank you for your payment!</p>
      </div>
    </div>
  );
});
export default Receipt;
