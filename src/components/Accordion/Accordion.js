import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({ header, defaultStatus = 'close', children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion">
      <div className="accordion-header">
        <div className="accordion-header-title">{header}</div>
        <button className="accordion-toggle-button" onClick={toggleAccordion}>
          {isExpanded ? "-" : "+"}
        </button>
      </div>
      {isExpanded && (
        <div className="accordion-body">
          <div className="accordion-body-content">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
