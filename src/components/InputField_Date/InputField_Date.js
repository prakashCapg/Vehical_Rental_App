import React from "react";

const InputField_Date = ({ label, children }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue) {
      alert(`Selected Date: ${inputValue}`);
      e.target.value = "";
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <label style={{ display: "block", marginBottom: "10px" }}>{label}</label>
      <input
        type="date"
        onChange={handleChange}
        style={{
          padding: "10px",
          width: "300px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      {children}
    </div>
  );
};

export default InputField_Date;
