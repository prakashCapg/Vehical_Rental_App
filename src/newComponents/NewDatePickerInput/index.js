import React, { useEffect, useState } from "react";
import "./index.css";

const NewDatePickerInput = ({ label, date = "", setDate }) => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setDate(e.target.value);
  };
  useEffect(() => {
    if (date === "") {
      setError("Please select Date");
    } else {
      setError("");
    }
  }, [date]);
  return (
    <div className="N_date-input-container">
      <label className="N_date-label">{label}</label>{" "}
      <div className="N_input-error">
        <input
          type="date"
          value={date || ""}
          onChange={handleChange}
          className="N_date-input"
        />
        {error && <p className="N_error-message">{error}</p>}
      </div>
    </div>
  );
};

export default NewDatePickerInput;
