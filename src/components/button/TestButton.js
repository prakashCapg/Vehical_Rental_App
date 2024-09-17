import React from "react";
import Buttons from "./Buttons";

const TestButton = () => {
  const primary = () => {
    alert("primary Button Clicked");
  };

  const handleSecondaryClick = () => {
    alert("Secondary Button Clicked");
  };

  return (
    <div>
      <Buttons label="Primary button" type="primary" onClick={primary} />
      <Buttons
        label="Secondary Button"
        type="secondary"
        onClick={handleSecondaryClick}
      />
      <Buttons label="Disabled Button" type="disabled" disabled={true} />
    </div>
  );
};

export default TestButton;
