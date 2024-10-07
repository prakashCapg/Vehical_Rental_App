import React from "react";
import "./index.css";

const InputFieldCheckbox = ({ label, onChange, checked }) => {
  return (
    <div className="filter">
      <input
        className="filter-checkbox"
        type="checkbox"
        name={label}
        onChange={onChange}
        checked={checked}
      />
      <label className="filter-name">{label}</label>
    </div>
  );
};

export default InputFieldCheckbox;
