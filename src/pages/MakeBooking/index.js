import React, { useState } from "react";
import makebookingpic from "./makebookingpicture.png";
import "./MakeBooking.css";
import Buttons from "../../components/button/Buttons";

const Makebooking = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div className="make-booking-container">
      <div className="right-panel">
        <img src={makebookingpic} alt="makebookinpicture" />
      </div>
      <div className="left-panel">
        <div className="booking-form">
          <div className="from-to">
            <div className="from">
              <label>From : </label>
              <input type="text" />
            </div>
            <div className="to">
              <label>To : </label>
              <input type="text" />
            </div>
          </div>
          <div className="search-filter">
            <Buttons
              label={"Car"}
              className={
                selected === "Car" ? "selected-filter" : "filter-button"
              }
              type=""
              size=""
              onClick={() => {
                setSelected("Car");
              }}
            />
            <Buttons
              label={"Bike"}
              className={
                selected === "Bike" ? "selected-filter" : "filter-button"
              }
              type=""
              size=""
              onClick={() => {
                setSelected("Bike");
              }}
            />
            <Buttons
              label={"6-Seater"}
              className={
                selected === "6-Seater" ? "selected-filter" : "filter-button"
              }
              type=""
              size=""
              onClick={() => {
                setSelected("6-Seater");
              }}
            />
          </div>
          <div className="search-button">
            <Buttons
              label={"SEARCH"}
              type=""
              size=""
              className="custom-search-button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Makebooking;
