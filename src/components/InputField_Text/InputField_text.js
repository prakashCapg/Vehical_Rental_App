import React, { useState } from "react";
import "./InputField_text.css";

const InputField = ({ label, children }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const validateInput = (inputValue) => {
    const regex = /^[a-zA-Z0-9]*$/.test(inputValue);
    return regex;
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (validateInput(inputValue)) {
      setValue(inputValue);
      setError("");
    } else {
      setError("Invalid input: only letters and digits are allowed.");
    }
  };

  return (
    <div>
      <div>
        <label>{label}</label>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="Input-field-text"
        />
        {error && <p style={{ color: "red", marginTop: "5px" }}>{error}</p>}
      </div>
    </div>
  );
};

export default InputField;
