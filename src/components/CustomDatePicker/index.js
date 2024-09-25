import React from "react";
import "./CustomDatePicker.css"; // Optional: for additional styling

const CustomDatePicker = ({ label, date, setDate }) => {
  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="date-input-container">
      <label>{label}</label>

      <input
        type="date"
        value={date || "Select a date..."}
        onChange={handleChange}
        className="date-input"
      />
    </div>
  );
};

export default CustomDatePicker;
