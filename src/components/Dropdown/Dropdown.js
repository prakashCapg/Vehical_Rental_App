import React, { useState } from "react";
import "./Dropdown.css";

const Drop = ({ options, onSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (value) => {
    setSelectedValue(value);
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" onClick={() => setIsOpen(!isOpen)}>
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

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (value) => {
    setSelectedOption(value);
  };

  const options = ["Option A", "Option B", "Option C", "Option D", "option E"];

  return (
    <div>
      <h1>Dropdown Example</h1>
      <Drop
        options={options}
        onSelect={handleSelect}
        placeholder="Select an option"
      />
      <p>Selected: {selectedOption}</p>
    </div>
  );
};

export default Dropdown;
