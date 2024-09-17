import React from "react";
import "./Button.css";

const Button = ({ label, type, onClick, disabled }) => {
  const buttonClass = `btn ${type}`;

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

const Buttons = () => {
  const handlePrimaryClick = () => {
    alert("Primary Button Clicked");
  };

  const handleSecondaryClick = () => {
    alert("Secondary Button Clicked");
  };

  return (
    <div>
      <h1>Reusable Buttons</h1>
      <Button
        label="Primary Button"
        type="primary"
        onClick={handlePrimaryClick}
      />
      <Button
        label="Secondary Button"
        type="secondary"
        onClick={handleSecondaryClick}
      />
      <Button label="Disabled Button" type="disabled" disabled={true} />
    </div>
  );
};

export default Buttons;
