import React from "react";
import Button from "../../components/button/Buttons";

const TestButton = () => {
  return (
    <div>
      <Button
        label="Primary Button"
        type="primary"
        className="custom-primary-button"
      />

      <Button
        label="Secondary Button"
        type="secondary"
        style={{ backgroundColor: "green", color: "white" }}
      />

      <Button
        label="Large Button"
        type="primary"
        size="large"
        className="custom-large-button"
      />

      <Button
        label="Small Button"
        type="primary"
        size="small"
        className="small-button"
      />

      <Button label="Disabled Button" type="disabled" disabled={true} />
    </div>
  );
};

export default TestButton;
