import "../../components/PopUp/Popup.css";
import React from "react";

const PopUp = ({
  children,
  isOpen,
  onClose,
  title,
  width = "400px",
  height = "300px",
}) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div
        className="popup-content"
        style={{ width, height }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="popup-header">
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="popup-body">{children}</div>
      </div>
    </div>
  );
};

export default PopUp;
