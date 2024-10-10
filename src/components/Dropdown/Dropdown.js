import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ label, options, onSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (value) => {
    setSelectedValue(value);
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" onClick={() => setIsOpen(!isOpen)}>
      <label className="input-label">{label}</label>
      <div className="dropdown-header">
        {selectedValue || placeholder}
        <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>▼</span>
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option) => (
            <li key={option} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
