import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import "./Invoice_Receipt.css";

export const Invoice = ({ bookingDetails, onClose }) => {
  const invoiceRef = useRef();

  if (!bookingDetails) {
    return null;
  }

  const { id, title, pickupDate, returnDate, paymentMethod, price, status } =
    bookingDetails;

  const downloadPDF = () => {
    const element = invoiceRef.current;

    html2pdf()
      .from(element)
      .set({
        margin: 1,
        filename: `invoice_${id}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .save();
  };

  return (
    <div className="invoice-overlay" onClick={onClose}>
      <div className="invoice-container" onClick={(e) => e.stopPropagation()}>
        <button className="invoice-close" onClick={onClose}>
          X
        </button>
        <div ref={invoiceRef} className="invoice-content">
          <div className="invoice-header">
            <div className="company-details">
              <p className="company-name">YOUR COMPANY</p>
              <p>Street Address</p>
              <p>City, State, Zip Code</p>
              <p>www.yourwebsite.com</p>
              <p>contact@yourmail.com</p>
            </div>
            <div className="invoice-title">INVOICE</div>
          </div>

          <div className="invoice-details">
            <div className="bill-to">
              <p>
                <strong>BILL TO:</strong>
              </p>
              <p>Customer Name</p>
              <p>Street Address</p>
              <p>City, State, Zip Code</p>
              <p>Phone/email</p>
            </div>
            <div className="invoice-info">
              <p>
                <strong>Invoice #</strong> {id}
              </p>
              <p>
                <strong>Date:</strong> {pickupDate}
              </p>
              <p>
                <strong>Due Date:</strong> {returnDate || "N/A"}
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
                <td>{title}</td>
                <td>1</td>
                <td>Rs.{price}</td>
                <td>Rs.{price}</td>
              </tr>
            </tbody>
          </table>

          <div className="notes">
            <p>
              <strong>NOTES</strong>
            </p>
            <p>Status: {status}</p>
          </div>

          <div className="totals-payment-container">
            <table className="payment-methods">
              <thead>
                <tr>
                  <th>PAYMENT METHODS</th>
                  <th>DETAILS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Method</td>
                  <td>{paymentMethod}</td>
                </tr>
              </tbody>
            </table>

            <table className="totals">
              <tbody>
                <tr>
                  <td>SUBTOTAL</td>
                  <td>Rs.{price}</td>
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
                    <strong>Rs.{price}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="invoice-footer">
            <p>Thank you for choosing our service!</p>
          </div>
        </div>

        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <button className="download-btn" onClick={downloadPDF}>
            Download Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export const Receipt = ({ bookingDetails, onClose }) => {
  const receiptRef = useRef();

  if (!bookingDetails) {
    return null;
  }

  const { id, title, pickupDate, paymentMethod, price, status } =
    bookingDetails;

  const downloadReceiptPDF = () => {
    const element = receiptRef.current;

    const button = document.querySelector(".download-btn");
    button.style.display = "none";

    html2pdf()
      .from(element)
      .set({
        margin: 1,
        filename: `receipt_${id}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .save()
      .then(() => {
        button.style.display = "block";
      });
  };

  return (
    <div className="receipt-overlay" onClick={onClose}>
      <div className="receipt-container" onClick={(e) => e.stopPropagation()}>
        <button className="receipt-close" onClick={onClose}>
          X
        </button>
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
              <strong>Receipt #:</strong> {id}
            </p>
            <p>
              <strong>Date:</strong> {pickupDate}
            </p>
            <p>
              <strong>Payment Method:</strong> {paymentMethod}
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
                <td>{title}</td>
                <td>1</td>
                <td>Rs.{price}</td>
                <td>Rs.{price}</td>
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

        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <button className="download-btn" onClick={downloadReceiptPDF}>
            Download Receipt
          </button>
        </div>
      </div>
    </div>
  );
};
