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
}) => {
  const selectedType = vehicleType || "Cars"; // Default to Car if no state is passed

  // State to manage the active tab
  const [activeTab, setActiveTab] = useState(selectedType);
  const { setPickUpDate, setReturnDate, setVehicleType } =
    useContext(VehicleContext);

  // Get the appropriate data based on the active tab
  const getCardData = () => {
    switch (activeTab) {
      case "Car":
        return carData;
      case "Bike":
        return bikeData;
      case "Six-Seater":
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
          label="return&nbsp;Date&nbsp;:&nbsp;"
          setDate={setReturnDate}
        />
      </div>

      <div className="tab-content">
        {/* Dynamically render CardWrapper based on active tab */}
        <CardWrapper cardData={getCardData()} />
      </div>
    </div>
  );
};

export default Tabs;
