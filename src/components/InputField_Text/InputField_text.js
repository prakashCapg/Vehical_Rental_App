import React, { useState, useEffect } from "react";
import "./InputField_text.css";

const InputField = ({
  label,
  inputType,
  inputformValue = "",
  onValueInput,
  placeholder,
}) => {
  const [error, setError] = useState("");

  useEffect(() => {
    if (inputformValue === "") {
      setError("Please select Valid Input");
    } else {
      setError("");
    }
  }, [inputformValue]);

  const validateNumberAndAlphabetInput = (inputValue) => {
    return /^[a-zA-Z0-9]*$/.test(inputValue);
  };

  const validateNumberInput = (inputValue) => {
    return /^[0-9]*$/.test(inputValue);
  };

  const validateLetterInput = (inputValue) => {
    return /^[a-zA-Z\s]*$/.test(inputValue);
  };

  const validateEmailInput = (inputValue) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(inputValue);
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
      isValid = validateNumberAndAlphabetInput(inputValue);
      if (!isValid)
        setError("Invalid input: only letters and digits are allowed.");
    } else if (inputType === "email") {
      isValid = validateEmailInput(inputValue);
      if (!isValid) setError("Invalid input: please enter a valid email.");
    }

    if (isValid || inputType === "email") {
      onValueInput(inputValue);
    }
  };

  return (
    <div className="text-input-box">
      <label className="input-label">{label}</label>
      <div className="input-value-error">
        <input
          type={"text"}
          value={inputformValue}
          onChange={handleChange}
          className="Input-field-text"
          placeholder={placeholder}
        />
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default InputField;
