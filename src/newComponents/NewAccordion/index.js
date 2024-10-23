import React, { useState } from "react";
import "./index.css";

const NewAccordion = ({ header, defaultStatus = "open", children }) => {
  const [isExpanded, setIsExpanded] = useState(
    defaultStatus === "open" ? true : false
  );

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="N_accordion">
      <div className="N_accordion-header">
        <div className="N_accordion-header-title">{header}</div>
        <button className="N_accordion-toggle-button" onClick={toggleAccordion}>
          {isExpanded ? "-" : "+"}
        </button>
      </div>
      {isExpanded && (
        <div className="N_accordion-body">
          <div className="N_accordion-body-content">{children}</div>
        </div>
      )}
    </div>
  );
};

export default NewAccordion;
