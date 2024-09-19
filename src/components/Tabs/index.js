import React, { useState } from "react";
import CardWrapper from "../../components/CardWrapper";
import "./index.css";
import { useLocation } from "react-router-dom";

const Tabs = ({ tabs, carData, bikeData, sixSeaterData }) => {
  const location = useLocation();

  const selectedType = location.state?.selectedType || "Cars"; // Default to Car if no state is passed

  // State to manage the active tab
  const [activeTab, setActiveTab] = useState(selectedType);

  // Get the appropriate data based on the active tab
  const getCardData = () => {
    switch (activeTab) {
      case "Cars":
        return carData;
      case "Bikes":
        return bikeData;
      case "6-Seaters":
        return sixSeaterData;
      default:
        return carData;
    }
  };

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
        {/* Dynamically render CardWrapper based on active tab */}
        <CardWrapper cardData={getCardData()} />
      </div>
    </div>
  );
};

export default Tabs;
