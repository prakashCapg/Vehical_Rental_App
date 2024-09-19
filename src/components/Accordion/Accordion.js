import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({ header, status, details, actions }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="booking-card">
      <div className="booking-header">
        <div>{header}</div>
        <div className="status-container">
          {status}
          <button className="toggle-button" onClick={toggleAccordion}>
            {isExpanded ? "-" : "+"}
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className="booking-details">
          <div className="details-box">
            <div className="details-text">{details}</div>
            {actions}
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
