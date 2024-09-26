import "../../components/PopUp/Popup.css";
import React, { useState, useEffect } from "react";
import {
  cancelBooking,
  modifyBooking,
} from "../../services/booking-history.service";
import { getvehicleDataFakeAPI } from "../../fakeAPI/vehicle-list-fake-api";

export const BookingPopup = ({
  isVisible,
  onClose,
  bookingDate,
  bookingId,
}) => {
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);
  const [isBookingCancelled, setBookingCancelled] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isVisible) {
      setConfirmationVisible(false);
      setBookingCancelled(false);
      setError("");
    }
  }, [isVisible]);

  const confirmCancellation = () => {
    const currentDate = new Date();
    const allowedCancelDate = new Date(bookingDate);
    allowedCancelDate.setDate(allowedCancelDate.getDate() + 2);

    if (currentDate > allowedCancelDate) {
      setError(
        "Booking cancellation is allowed only up to 2 days after booking."
      );
    } else {
      const result = cancelBooking(bookingId);
      if (result.success) {
        setBookingCancelled(true);
        setConfirmationVisible(true);
      } else {
        setError(result.message);
      }
    }
  };

  const handleClose = () => {
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div className="cancel-popup" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={handleClose}>
          X
        </button>
        {!isConfirmationVisible ? (
          <>
            <h2>Confirm Cancellation</h2>
            {error && <p className="cancel-popup-error">{error}</p>}
            <p className="cancel-popup-text">
              Are you sure you want to cancel this booking? This action cannot
              be undone.
            </p>
            <div className="popup-actions">
              <button
                className="popup-action cancel"
                onClick={confirmCancellation}
              >
                Yes, Cancel Booking
              </button>
              <button className="popup-action keep" onClick={handleClose}>
                No, Keep Booking
              </button>
            </div>
          </>
        ) : (
          <p className="cancel-popup-text">Your booking has been cancelled.</p>
        )}
      </div>
    </div>
  );
};

export const ModifyBookingPopup = ({
  isVisible,
  onClose,
  bookingDetails,
  bookingId,
  onBookingModified,
}) => {
  const [newPickupDate, setNewPickupDate] = useState("");
  const [newReturnDate, setNewReturnDate] = useState("");
  const [newPickupLocation, setNewPickupLocation] = useState("");
  const [newDropOffLocation, setNewDropOffLocation] = useState("");
  const [type, setType] = useState(""); // Vehicle Type
  const [paymentMethod, setPaymentMethod] = useState("");
  const [price, setPrice] = useState(0);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [brands, setBrands] = useState([]);
  const [allModels, setAllModels] = useState([]); // Store all models
  const [filteredModels, setFilteredModels] = useState([]); // Models based on title selection
  const [titles, setTitles] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  useEffect(() => {
    if (isVisible && bookingDetails) {
      setNewPickupDate(bookingDetails.pickupDate || "");
      setNewReturnDate(bookingDetails.returnDate || "");
      setNewPickupLocation(bookingDetails.pickupLocation || "");
      setNewDropOffLocation(bookingDetails.dropOffLocation || "");
      setType(bookingDetails.type || "");
      setPaymentMethod(bookingDetails.paymentMethod || "");
      setPrice(bookingDetails.price || 0);
      setError("");
      setSuccessMessage("");
      setSelectedBrand("");
      setSelectedModel("");
      setSelectedTitle("");
      fetchVehicleDetails(bookingDetails.type);
    }
  }, [isVisible, bookingDetails]);

  const vehicleDataMap = {
    Car: "carData",
    Bike: "bikeData",
    "6 Seater": "sixSeaterData",
  };

  const fetchVehicleDetails = async (selectedType) => {
    try {
      const { carData, bikeData, sixSeaterData } =
        await getvehicleDataFakeAPI();
      const data = {
        carData,
        bikeData,
        sixSeaterData,
      };

      const selectedVehicleData = data[vehicleDataMap[selectedType]];
      const allBrands = [
        ...new Set(selectedVehicleData.map((vehicle) => vehicle.brand)),
      ];

      setBrands(allBrands);
      setAllModels(selectedVehicleData); // Store all models for filtering
      setFilteredModels([]);
      setTitles([]);
      setPrice(0);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBrandDetails = (selectedBrand) => {
    const { carData, bikeData, sixSeaterData } = getvehicleDataFakeAPI();
    const selectedVehicleData = vehicleDataMap[type];

    const vehicleData = {
      carData,
      bikeData,
      sixSeaterData,
    }[selectedVehicleData];

    const filteredVehicles = vehicleData.filter(
      (vehicle) => vehicle.brand === selectedBrand
    );
    const filteredModels = [
      ...new Set(filteredVehicles.map((vehicle) => vehicle.model)),
    ];
    const filteredTitles = [
      ...new Set(filteredVehicles.map((vehicle) => vehicle.title)),
    ];

    setTitles(filteredTitles);
    setSelectedModel("");
    setSelectedTitle("");
    setFilteredModels([]);
    setPrice(0);
  };

  const filterModelsByTitle = (title) => {
    const modelsForTitle = allModels.filter(
      (vehicle) => vehicle.title === title
    );
    const models = [...new Set(modelsForTitle.map((vehicle) => vehicle.model))]; // Unique models for selected title
    setFilteredModels(models);
    setSelectedModel(""); // Reset selected model
    setPrice(0); // Reset price when title changes
  };

  const fetchPrice = async (selectedBrand, selectedModel, selectedTitle) => {
    const { carData, bikeData, sixSeaterData } = await getvehicleDataFakeAPI();
    const vehicleData = {
      Car: carData,
      Bike: bikeData,
      "6 Seater": sixSeaterData,
    }[type];

    if (!vehicleData) {
      console.error("No vehicle data found for the selected type.");
      return;
    }

    const matchingVehicle = vehicleData.find(
      (vehicle) =>
        vehicle.brand === selectedBrand &&
        vehicle.model === selectedModel &&
        vehicle.title === selectedTitle
    );

    setPrice(matchingVehicle ? matchingVehicle.price : 0);
  };

  const handleVehicleTypeChange = (e) => {
    const selectedType = e.target.value;
    setType(selectedType);
    setSelectedBrand("");
    setSelectedModel("");
    setSelectedTitle("");
    fetchVehicleDetails(selectedType);
  };

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    setSelectedBrand(brand);
    fetchBrandDetails(brand);
  };

  const handleModelChange = (e) => {
    const model = e.target.value;
    setSelectedModel(model);

    if (model && selectedBrand && selectedTitle) {
      fetchPrice(selectedBrand, model, selectedTitle);
    }
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setSelectedTitle(title);
    filterModelsByTitle(title); // Filter models based on selected title

    setSelectedModel("");
  };

  const handleModifyBooking = async () => {
    console.log("New Pickup Location:", newPickupLocation);
    console.log("New Drop-off Location:", newDropOffLocation);
    if (!selectedBrand || !selectedModel || !selectedTitle) {
      setError("Please select a brand, model, and title before saving.");
      return;
    }
    const updatedDetails = {
      id: bookingId,
      pickupDate: newPickupDate, // Existing variable
      returnDate: newReturnDate, // Existing variable
      pickupLocation: newPickupLocation, // Make sure this is set
      dropOffLocation: newDropOffLocation, // Make sure this is set
      type,
      selectedBrand,
      selectedModel,
      selectedTitle,
      paymentMethod,
      price,
    };

    const result = await modifyBooking(bookingId, updatedDetails);
    if (result.success) {
      setSuccessMessage("Booking successfully modified!");
      onBookingModified(updatedDetails); // Notify parent component
      onClose(); // Close the popup
    } else {
      setError(result.message); // Handle error
    }
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="modify-popup" onClick={(e) => e.stopPropagation()}>
        <button className="modify-close" onClick={onClose}>
          X
        </button>
        <h2>Modify Your Booking</h2>
        {error && <p className="modify-popup-error">{error}</p>}
        {successMessage && (
          <p className="modify-popup-success">{successMessage}</p>
        )}
        <form className="modify-form">
          <label htmlFor="pickupDate">New Pickup Date</label>
          <input
            id="pickupDate"
            type="date"
            onChange={(e) => setNewPickupDate(e.target.value)}
          />

          <label htmlFor="returnDate">New Return Date</label>
          <input
            id="returnDate"
            type="date"
            onChange={(e) => setNewReturnDate(e.target.value)}
          />

          <label htmlFor="pickupLocation">New Pickup Location</label>
          <input
            id="pickupLocation"
            type="text"
            value={newPickupLocation}
            onChange={(e) => {
              setNewPickupLocation(e.target.value);
              console.log("Pickup Location Set To:", e.target.value);
            }} // This should correctly update state
            placeholder="Enter pickup location"
          />

          <label htmlFor="dropOffLocation">New Drop-off Location</label>
          <input
            id="dropOffLocation"
            type="text"
            value={newDropOffLocation}
            onChange={(e) => {
              setNewDropOffLocation(e.target.value);
              console.log("Drop-off Location Set To:", e.target.value);
            }}
            placeholder="Enter drop-off location"
          />

          <label htmlFor="type">Vehicle Type</label>
          <select id="type" onChange={handleVehicleTypeChange}>
            <option value="">Select Vehicle</option>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
            <option value="6 Seater">6 Seater</option>
          </select>

          <label htmlFor="brands">Available Brands</label>
          <select
            id="brands"
            value={selectedBrand}
            onChange={handleBrandChange}
            disabled={!type}
          >
            <option value="">Select Brand</option>
            {brands.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </select>

          <label htmlFor="titles">Available Titles</label>
          <select
            id="titles"
            value={selectedTitle}
            onChange={handleTitleChange}
            disabled={!selectedBrand}
          >
            <option value="">Select Title</option>
            {titles.map((title, index) => (
              <option key={index} value={title}>
                {title}
              </option>
            ))}
          </select>

          <label htmlFor="models">Available Models</label>
          <select
            id="models"
            value={selectedModel}
            onChange={handleModelChange}
            disabled={!selectedTitle}
          >
            <option value="">Select Model</option>
            {filteredModels.map((model, index) => (
              <option key={index} value={model}>
                {model}
              </option>
            ))}
          </select>

          <label htmlFor="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Select Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Cash">Cash</option>
          </select>

          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="number"
            value={price}
            readOnly
            placeholder="0"
          />

          <div className="modify-popup-actions">
            <button
              className="modify-popup-action save"
              type="button"
              onClick={handleModifyBooking}
            >
              Save Changes
            </button>
            <button
              className="modify-popup-action cancel"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Login Popup Component
// const LoginPopup = () => {
//   const [isPopupVisible, setPopupVisible] = useState(false);

//   const openPopup = () => setPopupVisible(true);
//   const closePopup = () => setPopupVisible(false);

//   return (
//     <>
//       <button onClick={openPopup}>Open Login Popup</button>
//       <Popup isVisible={isPopupVisible} onClose={closePopup} title="Login">
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <div className="popup-actions">
//           <button className="popup-action">Login</button>
//         </div>
//       </Popup>
//     </>
//   );
// };
