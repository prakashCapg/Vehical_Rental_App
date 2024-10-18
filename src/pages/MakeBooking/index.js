import React, { useState, useEffect, useContext } from "react";
import makebookingpic from "./makebookingpicture.png";
import "./MakeBooking.css";
import Buttons from "../../components/Buttons/Buttons";
import { useNavigate } from "react-router-dom";
import CustomDatePicker from "../../components/CustomDatePicker";
import VehicleContext from "../../context/VehicleContext";

const Makebooking = () => {
  const {
    pickupDate,
    setPickUpDate,
    returnDate,
    setReturnDate,
    vehicleType,
    setVehicleType,
  } = useContext(VehicleContext);

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const vehicleTypes = ["Cars", "Bikes", "6-Seaters"];
  const isSearchDisabled = !pickupDate || !returnDate;

  useEffect(() => {
    validateDates();
  }, [pickupDate, returnDate, vehicleType]);

  const validateDates = () => {
    if (!pickupDate || !returnDate) {
      setErrorMessage("Both dates must be selected.");
      return false;
    }

    const startDate = new Date(pickupDate);
    const endDate = new Date(returnDate);
    const differenceInDays = (endDate - startDate) / (1000 * 3600 * 24);

    if (differenceInDays > 3) {
      setErrorMessage("Booking days cannot exceed more than 3 days.");
      return false;
    } else if (!vehicleType) {
      setErrorMessage("Select the Vehicle Type.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (validateDates()) {
      navigate("/user/vehicle-booking");
    }
  };

  return (
    <div className="make-booking-container">
      <div className="right-panel">
        <img src={makebookingpic} alt="Make Booking" />
      </div>
      <div className="left-panel">
        <div className="booking-form">
          <div className="from-to">
            <CustomDatePicker
              date={pickupDate}
              setDate={setPickUpDate}
              label="Pick Up Date:"
            />
            <CustomDatePicker
              date={returnDate}
              setDate={setReturnDate}
              label="Return Date:"
            />
          </div>
          <div className="search-filter">
            {vehicleTypes.map((type) => (
              <Buttons
                key={type}
                label={type}
                className={
                  vehicleType === type ? "selected-filter" : "filter-button"
                }
                onClick={() => setVehicleType(type)}
              />
            ))}
          </div>
          {errorMessage && <p className="error-message">* {errorMessage}</p>}
          <div className="search-button">
            <Buttons
              label="SEARCH"
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
