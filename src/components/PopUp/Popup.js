import React from "react";
import PropTypes from "prop-types";
import "./Popup.css";

const Popup = ({ isOpen, title, message, onClose, actions }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close" onClick={onClose}>
          X
        </button>
        <h2>{title}</h2>
        <p>{message}</p>
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

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default Popup;
