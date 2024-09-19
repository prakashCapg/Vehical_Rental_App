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
      navigate("/user/vehicle-booking", { state: { selectedType: selected } }); // Pass the selected type
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
              label={"Cars"}
              className={
                selected === "Cars" ? "selected-filter" : "filter-button"
              }
              type=""
              size=""
              onClick={() => {
                setSelected("Cars");
              }}
            />
            <Buttons
              label={"Bikes"}
              className={
                selected === "Bikes" ? "selected-filter" : "filter-button"
              }
              type=""
              size=""
              onClick={() => {
                setSelected("Bikes");
              }}
            />
            <Buttons
              label={"6-Seaters"}
              className={
                selected === "6-Seaters" ? "selected-filter" : "filter-button"
              }
              type=""
              size=""
              onClick={() => {
                setSelected("6-Seaters");
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
