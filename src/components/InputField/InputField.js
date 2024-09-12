import React, { useState } from "react";

const FormComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Value: ${inputValue}\nSelected Date: ${selectedDate}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="textDigits">
          Text and Digits (Letters and Numbers Only):
        </label>
        <input
          type="text"
          id="textDigits"
          name="textDigits"
          value={inputValue}
          onChange={handleInputChange}
          pattern="[A-Za-z0-9]+"
          title="Letters and numbers only"
          required
          style={{
            border: "1px solid black",
            padding: "5px",
            outline: "none", // remove the default blue border
          }}
        />
      </div>
      <div>
        <label htmlFor="datePicker">Choose a date:</label>
        <input
          type="date"
          id="datePicker"
          name="datePicker"
          value={selectedDate}
          onChange={handleDateChange}
          required
          style={{
            border: "1px solid black",
            padding: "5px",
            outline: "none", // remove the default blue border
          }}
        />
      </div>
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
  );
};

export default FormComponent;
