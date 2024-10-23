import React, { useEffect, useState } from "react";
import "./SingleSelectDropDown.css";

const SingleSelectDropdown = ({
  options,
  optionlabel,
  formselectedOption = "",
  label,
  onSelect,
}) => {
  const [error, setError] = useState("");

  useEffect(() => {
    if (formselectedOption === "") {
      setError("Please select Valid Input");
    } else {
      setError("");
    }
  }, [formselectedOption]);

  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    onSelect(selectedValue); // Notify parent component of selection
  };

  return (
    <div className="drop-down-input">
      <label className="input-label-dropdown">{label}</label>
      <div>
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
        {error && <p className="message-error">{error}</p>}
      </div>
    </div>
  );
};

export default SingleSelectDropdown;
