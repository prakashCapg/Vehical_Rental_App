import React, { useContext, useState } from "react";
import CardWrapper from "../../components/CardWrapper";
import "./index.css";
import CustomDatePicker from "../CustomDatePicker";
import VehicleContext from "../../context/VehicleContext";

const Tabs = ({
  tabs,
  carData,
  bikeData,
  sixSeaterData,
  vehicleType,
  pickupDate,
  returnDate,
  onCardClick, // Added onCardClick prop
}) => {
  const selectedType = vehicleType || "Cars";

  const [activeTab, setActiveTab] = useState(selectedType);
  const { setPickUpDate, setReturnDate, setVehicleType } =
    useContext(VehicleContext);

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

  const handleTabSubmit = (tab) => {
    setActiveTab(tab);
    setVehicleType(tab);
  };

  return (
    <div className="dynamic-tabs-container">
      <div className="dynamic-container">
        <div className="dynamic-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTabSubmit(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <CustomDatePicker
          date={pickupDate}
          label="Pick&nbsp;up&nbsp;Date&nbsp;:&nbsp;"
          setDate={setPickUpDate}
        />
        <CustomDatePicker
          date={returnDate}
          label="Return&nbsp;Date&nbsp;:&nbsp;"
          setDate={setReturnDate}
        />
      </div>

      <div className="tab-content">
        {/* Dynamically render CardWrapper based on active tab */}
        <CardWrapper cardData={getCardData()} onCardClick={onCardClick} />
      </div>
    </div>
  );
};

export default Tabs;
