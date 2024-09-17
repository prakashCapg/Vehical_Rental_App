import React from "react";
import "./Button.css";

const Buttons = ({ label, type, onClick, disabled }) => {
  const buttonClass = `btn ${type}`;

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Buttons;
