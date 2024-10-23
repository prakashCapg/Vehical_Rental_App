import React from "react";
import "./index.css";

const NewPopUp = ({ children, isOpen, setIsOpen }) => {
  return (
    isOpen && (
      <div className="N_popup-overlay">
        <div className="N_popup-content">
          <div className="N_popup-body">
            <button className="N_close-btn" onClick={() => setIsOpen(!isOpen)}>
              ×
            </button>

            <div className="N_popup-body-content">{children}</div>
          </div>
        </div>
      </div>
    )
  );
};

export default NewPopUp;
