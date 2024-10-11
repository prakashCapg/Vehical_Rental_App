import React from "react";

const Textarea = ({ id, label, value, onChange, placeholder, required }) => {
  return (
    <div className="textarea-container">
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      ></textarea>
    </div>
  );
};

export default Textarea;
