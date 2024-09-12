import React, { useState } from "react";
import ImageUploadWithPreview from "./ImageUploadWithPreview";
import "./index.css";

const Tabs = ({ tabs }) => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="dynamic-tabs-container">
      <div className="dynamic-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {/* Include a way to switch between different pieces of content if necessary */}
      </div>
      <ImageUploadWithPreview />
    </div>
  );
};

export default Tabs;
