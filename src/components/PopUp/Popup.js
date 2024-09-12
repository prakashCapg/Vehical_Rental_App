import React, { useState } from "react";
import "./Popup.css";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  const popupActions = [
    {
      label: "Confirm",
      onClick: () => {
        console.log("Action confirmed");
        handleClosePopup();
      },
    },
    {
      label: "Cancel",
      onClick: handleClosePopup,
    },
  ];

  if (!isOpen) {
    return (
      <div style={{ padding: "20px" }}>
        <button
          onClick={handleOpenPopup}
          style={{
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          Open Popup
        </button>
      </div>
    );
  }

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close" onClick={handleClosePopup}>
          X
        </button>
        <h2>Popup Title</h2>
        <p>This is a message in the popup!</p>
        <div className="popup-actions">
          {popupActions.map((action, index) => (
            <button
              key={index}
              className="popup-action"
              onClick={action.onClick}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;
