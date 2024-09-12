import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Bookings from "./pages/Bookings/Bookings";
import Vehicle from "./components/Vehicles/Vehicle";
import VehicleDetailsPage from "./pages/VehicleDetailsPage/VehicleDetailsPage";
import CustomerDetails from "./pages/VehicleDetailsPage/CustomerDetails";
import ConfirmationPage from "./pages/VehicleDetailsPage/ConfirmationPage";
import Preview from "./pages/preview";
import React, { useState } from "react";
import Popup from "./components/PopUp/Popup";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleBooking = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const popupActions = [
    {
      label: "Confirm",
      onClick: () => {
        console.log("Booking confirmed");
        handleClosePopup();
      },
    },
    {
      label: "Cancel",
      onClick: handleClosePopup,
    },
  ];

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/bookings" exact Component={Bookings} />
          <Route path="/vehicles" exact Component={Vehicle} />
          <Route path="/vehicle/:id" exact Component={VehicleDetailsPage} />
          <Route path="/book/:id" exact Component={CustomerDetails} />
          <Route path="/confirm" exact Component={ConfirmationPage} />
          <Route path="/preview" exact Component={Preview} />
        </Routes>
      </BrowserRouter>

      <div>
        <button
          onClick={handleBooking}
          style={{
            display: "block",
            margin: "20px",
            padding: "10px",
            background: "blue",
            color: "white",
            fontSize: "16px",
          }}
        >
          Book Vehicle
        </button>
      </div>

      <Popup
        isOpen={isPopupOpen}
        title="Booking Confirmation"
        message="Your booking has been successfully created!"
        onClose={handleClosePopup}
        actions={popupActions}
      />
    </div>
  );
}

export default App;
