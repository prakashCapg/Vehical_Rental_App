import React from "react";
import "./CustomDatePicker.css"; // Ensure this imports your CSS correctly

const CustomDatePicker = ({ label, date, setDate }) => {
  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="date-input-container">
      <label className="date-label">{label}</label>{" "}
      {/* Add a class for consistent styling */}
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
