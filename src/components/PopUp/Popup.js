import React, { useState } from "react";
import "./Popup.css";

const Popup = ({ isOpen, onClose, title, children, actions }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close" onClick={onClose}>
          X
        </button>
        <h2>{title}</h2>
        <div className="popup-content">{children}</div>
        <div className="popup-actions">
          {actions.map((action, index) => (
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

const PopupContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  const popupActions = [
    {
      label: "Yes",
      onClick: () => {
        console.log("Action confirmed");
        handleClosePopup();
      },
    },
    {
      label: "No",
      onClick: handleClosePopup,
    },
  ];

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
        Book
      </button>

      <Popup
        isOpen={isOpen}
        onClose={handleClosePopup}
        title="Booking Comfirmation"
        actions={popupActions}
      >
        <p>Are you sure want to book?</p>
      </Popup>
    </div>
  );
};

export default PopupContainer;
