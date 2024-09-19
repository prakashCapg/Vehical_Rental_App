import React, { useState } from "react";
import makebookingpic from "./makebookingpicture.png";
import "./MakeBooking.css";
import Buttons from "../../components/button/Buttons";
import { useNavigate } from "react-router-dom";
import CustomDatePicker from "../../components/CustomDatePicker";

const Makebooking = () => {
  const [selected, setSelected] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const isSearchDisabled = !fromDate || !toDate;
  const navigate = useNavigate();

  const validateDates = () => {
    if (!fromDate || !toDate) return;

    const from = new Date(fromDate);
    const to = new Date(toDate);
    const differenceInDays = (to - from) / (1000 * 3600 * 24);

    if (differenceInDays > 3) {
      alert("The date range cannot exceed 3 days.");
    } else if (selected === "") {
      alert("Select the Vehicle Type");
    } else if (selected) {
      navigate("/preview", { state: { selectedType: selected } }); // Pass the selected type
    }
  };

  const handleSearch = () => {
    validateDates();
  };
  return (
    <div className="make-booking-container">
      <div className="right-panel">
        <img src={makebookingpic} alt="makebookinpicture" />
      </div>
      <div className="left-panel">
        <div className="booking-form">
          <div className="from-to">
            <div className="from">
              <CustomDatePicker
                date={fromDate}
                setDate={setFromDate}
                label="Pick&nbsp;up&nbsp;Date&nbsp;:&nbsp;"
              />
            </div>
            <div className="to">
              <CustomDatePicker
                date={toDate}
                setDate={setToDate}
                label="Return&nbsp;Date&nbsp;:&nbsp;"
              />
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
              disabled={isSearchDisabled}
              className={"custom-search-button"}
              onClick={handleSearch}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Makebooking;
