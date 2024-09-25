import React from "react";
import "./Button.css";

const Buttons = ({
  label,
  type = "primary",
  size = "medium",
  onClick,
  disabled = false,
  className = "",
  style = {},
}) => {
  const buttonClass = `btn ${type} ${size} ${
    disabled ? "disabled" : ""
  } ${className}`;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {label}
    </button>
  );
};

export default Buttons;
