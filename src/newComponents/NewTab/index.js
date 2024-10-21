import React, { useState } from "react";
import "./index.css";

const NewTab = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {children.map((child, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {child.props.label || `Tab ${index + 1}`}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {React.Children.map(children, (child, index) => {
          if (index === activeTab) {
            return child;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default NewTab;
