import React from "react";
import "./CustomDatePicker.css";

const CustomDatePicker = ({ label, date, setDate }) => {
  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="date-input-container">
      <label className="date-label">{label}</label>
      <input
        type="date"
        value={date || ""}
        onChange={handleChange}
        className="date-input"
      />
    </div>
  );
};

export default CustomDatePicker;
