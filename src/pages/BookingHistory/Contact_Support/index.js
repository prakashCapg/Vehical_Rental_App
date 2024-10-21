import { useEffect, useState } from "react";
import { contactSupport } from "../../../services/contact-support.service";
import PopUp from "../../../components/PopUp/Popup";
import Button from "../../../components/Buttons/Buttons";
import "../Contact_Support/index.css";
import InputField from "../../../components/InputField_Text/InputField_text";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Textarea from "../../../components/Textarea/Textarea";

export const ContactSupportPopup = ({ isVisible, onClose, bookingId }) => {
  const [Name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [issueType, setIssueType] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSubmit = async (e) => {
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

    setIsLoading(true);
    try {
      const result = await contactSupport(supportRequest);
      if (result.success) {
        setSuccessMessage(result.message);
        setError("");
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError("Failed to contact support. Please try again later.");
      console.error("Support contact error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PopUp
      isOpen={isVisible}
      onClose={onClose}
      title="Contact Support"
      width="600px"
      height="530px"
    >
      {error && <p className="support-popup-error">{error}</p>}
      {successMessage && (
        <p className="support-popup-success">{successMessage}</p>
      )}

      <form className="support-form" onSubmit={handleSubmit}>
        <InputField
          label="Your Name"
          inputType="letter"
          inputformValue={Name}
          onValueInput={setName}
        />

        <InputField
          label="Your Email"
          inputType="email"
          inputformValue={emailId}
          onValueInput={setEmailId}
        />

        <Dropdown
          label="Issue Type"
          options={["Booking Issue", "Payment Issue", "Vehicle Issue", "Other"]}
          onSelect={setIssueType}
          placeholder="Select Issue Type"
        />

        <Textarea
          id="message"
          label="Description"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your issue in detail"
          required={true}
        />

        <div className="support-popup-actions">
          <Button
            label="Cancel"
            type="red-button"
            size="medium"
            onClick={onClose}
          />
          <Button
            label={isLoading ? "Submitting..." : "Submit"}
            type="green-button"
            size="medium"
            disabled={isLoading}
          />
        </div>
      </form>
    </PopUp>
  );
};
