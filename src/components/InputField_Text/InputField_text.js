import React, { useState } from "react";

const InputField = ({ label, children }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [submittedValue, setSubmittedValue] = useState(null);

  const validateInput = (inputValue) => {
    const isNumber = /^[0-9]*$/.test(inputValue);
    const isText = /^[A-Za-z]*$/.test(inputValue);
    return isText || isNumber;
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (validateInput(inputValue)) {
      setValue(inputValue);
      setError("");
    } else {
      setError("Invalid input: only letters or digits are allowed.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (value) {
      setSubmittedValue(value);
      alert(`Submitted Value: ${value}`);
      setValue(""); // Clear the input field after submission
    } else {
      setError("Please enter a valid value before submitting.");
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", marginBottom: "10px" }}>
          {label}
        </label>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          style={{
            padding: "10px",
            width: "300px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {error && <p style={{ color: "red", marginTop: "5px" }}>{error}</p>}
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          Submit
        </button>
      </form>
      {submittedValue && (
        <p style={{ marginTop: "10px" }}>
          {/*<strong>Submitted Value:</strong> {submittedValue}*/}
        </p>
      )}
      {children}
    </div>
  );
};

export default InputField;
