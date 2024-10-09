import React from "react";
import "./SingleSelectDropDown.css";

const SingleSelectDropdown = ({
  options,
  optionlabel,
  formselectedOption,
  label,
  onSelect,
}) => {
  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    onSelect(selectedValue); // Notify parent component of selection
  };

  return (
    <div className="drop-down-input">
      <label className="input-label">{label}</label>
      <select
        value={formselectedOption}
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
