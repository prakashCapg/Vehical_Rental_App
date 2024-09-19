import React, { useRef } from "react";
import "./CustomDatePicker.css"; // Optional: for additional styling

const CustomDatePicker = ({ label, date, setDate }) => {
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="date-input-container">
      <label style={{ display: "block" }}>{label}</label>
      <input
        type="text"
        value={date || "Select a date..."} // Custom placeholder text
        readOnly
        onClick={() => dateInputRef.current.showPicker()}
        className="date-input"
      />
      <input
        type="date"
        ref={dateInputRef}
        onChange={handleChange}
        className="hidden-date-input"
      />
      <span
        className="calendar-icon"
        onClick={() => dateInputRef.current.showPicker()}
      >
        📅
      </span>
    </div>
  );
};

export default CustomDatePicker;
