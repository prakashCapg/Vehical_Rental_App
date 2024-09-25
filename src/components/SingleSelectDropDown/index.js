import React, { useState } from "react";
import "./SingleSelectDropDown.css";

const SingleSelectDropdown = ({ options, optionlabel, label, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue); // Notify parent component of selection
  };

  return (
    <div>
      <label>{label}</label>
      <select
        value={selectedOption}
        onChange={handleSelect}
        className="select-options"
      >
        <option value="" disabled>
          {optionlabel}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SingleSelectDropdown;
