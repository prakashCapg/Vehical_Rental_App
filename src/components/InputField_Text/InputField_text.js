import React, { useState } from "react";
import "./InputField_text.css";

const InputField = ({ label, inputType, onValueInput }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const validateInput = (inputValue) => {
    return /^[a-zA-Z0-9]*$/.test(inputValue);
  };

  const validateNumberInput = (inputValue) => {
    return /^[0-9]*$/.test(inputValue);
  };

  const validateLetterInput = (inputValue) => {
    return /^[a-zA-Z]*$/.test(inputValue);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    let isValid = true;

    if (inputType === "letter") {
      isValid = validateLetterInput(inputValue);
      if (!isValid) setError("Invalid input: only letters are allowed.");
    } else if (inputType === "number") {
      isValid = validateNumberInput(inputValue);
      if (!isValid) setError("Invalid input: only digits are allowed.");
    } else if (inputType === "letterandnumber") {
      isValid = validateInput(inputValue);
      if (!isValid)
        setError("Invalid input: only letters and digits are allowed.");
    }

    if (isValid) {
      setValue(inputValue);
      setError("");
      onValueInput(inputValue); // Notify the parent component
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
