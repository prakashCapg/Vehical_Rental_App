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
  const [errorMessage, setErrorMessage] = useState("");
  const isSearchDisabled = !fromDate || !toDate;
  const navigate = useNavigate();

  const validateDates = () => {
    if (!fromDate || !toDate) {
      setErrorMessage("Both dates must be selected.");
      return false;
    }

    const from = new Date(fromDate);
    const to = new Date(toDate);
    const differenceInDays = (to - from) / (1000 * 3600 * 24);

    if (differenceInDays > 3) {
      setErrorMessage("Booking days cannot exceed more than 3 days.");
      return false;
    } else if (selected === "") {
      setErrorMessage("Select the Vehicle Type.");
      return false;
    }
    setErrorMessage(""); // Clear error if validation is successful
    return true;
  };

  const handleSearch = () => {
    if (validateDates()) {
      navigate("/user/vehicle-booking", { state: { selectedType: selected } });
    }
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
          {errorMessage && <p className="error-message">* {errorMessage}</p>}
          <div className="search-button">
            <Buttons
              label={"SEARCH"}
              type=""
              size=""
              disabled={isSearchDisabled}
              className={isSearchDisabled ? "" : "custom-search-button"}
              onClick={handleSearch}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Makebooking;
