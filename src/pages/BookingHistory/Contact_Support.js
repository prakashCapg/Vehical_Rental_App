import { useEffect, useState } from "react";
import { contactSupport } from "../../services/contact-support.service";
import PopUp from "../../components/PopUp/Popup";
import Button from "../../components/Button/Buttons";
import "./Contact_Support.css";

export const ContactSupportPopup = ({ isVisible, onClose, bookingId }) => {
  const [Name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [issueType, setIssueType] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isVisible) {
      setName("");
      setEmailId("");
      setIssueType("");
      setMessage("");
      setSuccessMessage("");
      setError("");
    }
  }, [isVisible]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Name || !emailId || !issueType || !message) {
      setError("Please fill in all the fields before submitting.");
      return;
    }

    const supportRequest = {
      Name,
      emailId,
      issueType,
      message,
      bookingId: bookingId || "N/A",
    };

    const result = contactSupport(supportRequest);

    if (result.success) {
      setSuccessMessage(result.message);
      setError("");
    } else {
      setError(result.message);
    }
  };

  return (
    <PopUp
      isOpen={isVisible}
      onClose={onClose}
      title="Contact Support"
      width="500px"
      height="1000px"
    >
      {error && <p className="support-popup-error">{error}</p>}
      {successMessage && (
        <p className="support-popup-success">{successMessage}</p>
      )}

      <form className="support-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <label htmlFor="emailId">Your Email</label>
        <input
          id="emailId"
          type="email"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
          placeholder="Enter your email"
        />

        <label htmlFor="issueType">Issue Type</label>
        <select
          id="issueType"
          value={issueType}
          onChange={(e) => setIssueType(e.target.value)}
        >
          <option value="">Select Issue Type</option>
          <option value="Booking Issue">Booking Issue</option>
          <option value="Payment Issue">Payment Issue</option>
          <option value="Vehicle Issue">Vehicle Issue</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="message">Description</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your issue in detail"
        ></textarea>

        <div className="support-popup-actions">
          <Button
            label="Submit"
            type="green-button"
            size="medium"
            onClick={handleSubmit}
          />
          <Button
            label="Cancel"
            type="red-button"
            size="medium"
            onClick={onClose}
          />
        </div>
      </form>
    </PopUp>
  );
};
