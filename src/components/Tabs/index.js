import React, { useState } from "react";
import "./index.css";

const Tabs = ({ tabs, activeTab, onTabSelect }) => {
  // State to manage the active tab

  return (
    <div className="dynamic-tabs-container">
      <div className="dynamic-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => onTabSelect(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {/* Include a way to switch between different pieces of content if necessary */}
      </div>
    </div>
  );
};

export default Tabs;
