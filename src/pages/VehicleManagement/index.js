import React, { useEffect, useState } from "react";
import "./index.css";
import Buttons from "../../components/button/Buttons";
import Card1 from "../../components/Card1/Card1";
import { vehicleDetailsData } from "../../services/vehicle-list-details.service";
import { Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { deleteVehicle } from "../../services/vehicle-delete.service";
import InputFieldCheckbox from "../../components/InputField_checkbox";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { getFilteredVehicles } from "../../services/vehicle-filter.service";
import Popup from "../../components/PopUp/Popup";
import UpdateVehicle from "../UpdateVehicle/index.js";

const VehicleListDetails = () => {
  const [vehicles, setVehicles] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null); // State to track the vehicle being updated
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setVehicles(vehicleDetailsData());
  }, []);

  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/employee/Add-vehicle");
  };

  const onDelete = async (id) => {
    try {
      setVehicles((prevVehicles) =>
        prevVehicles.filter((vehicle) => vehicle.id !== id)
      );

      await deleteVehicle(id);
    } catch (err) {
      alert(err.message);

      setVehicles((prevVehicles) => [...prevVehicles, { id }]);
    }
  };

  const uniqueFuelTypes = [
    ...new Set(vehicles.map((vehicle) => vehicle.fuelType)),
  ];

  const uniqueBrandTypes = [
    ...new Set(vehicles.map((vehicle) => vehicle.brand)),
  ];

  const handleFuelTypeChange = (fuelType) => {
    setSelectedFuelTypes((prev) =>
      prev.includes(fuelType)
        ? prev.filter((ft) => ft !== fuelType)
        : [...prev, fuelType]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const filteredVehicles = getFilteredVehicles(
    vehicles,
    priceRange,
    selectedFuelTypes,
    selectedBrands
  );

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  const openModal = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVehicle(null);
  };

  return (
    <div className="vehicles">
      <div className={`vehicleFilters ${showFilters ? "visible" : ""}`}>
        <h2 className="fueltypefilter">
          <strong>Fuel Type : </strong>
        </h2>
        <div className="fuel-filter">
          {uniqueFuelTypes.map((fuelType) => (
            <InputFieldCheckbox
              key={fuelType}
              label={fuelType}
              onChange={() => handleFuelTypeChange(fuelType)}
              checked={selectedFuelTypes.includes(fuelType)}
            />
          ))}
        </div>
        <h2 className="brandtypefilter">
          <strong>Brand : </strong>
        </h2>
        <div className="brand-filter">
          {uniqueBrandTypes.map((brand) => (
            <InputFieldCheckbox
              key={brand}
              label={brand}
              onChange={() => handleBrandChange(brand)}
              checked={selectedBrands.includes(brand)}
            />
          ))}
        </div>
        <div className="pricerangefilter">
          <h2 className="pricefilter">
            <strong>Price Range :</strong>
          </h2>
          <div className="min-max-price">
            <p className="min-price">${priceRange[0]}</p>
            <p className="max-price">${priceRange[1]}</p>
          </div>
          <Slider
            range
            min={0}
            max={100000}
            value={priceRange}
            onChange={setPriceRange}
          />
        </div>
      </div>
      <div className="vehicleDetails">
        <div className="vehicle-create">
          <Filter className="vehiclefilter" onClick={toggleFilters} />
          <Buttons label="Create" onClick={handleCreate} />
        </div>
        <div className="vehicle-update-container">
          {filteredVehicles.length > 0 ? (
            filteredVehicles.map((card) => (
              <div className="vehicle-update" key={card.VehicleId}>
                <div className="vehicle-list-details">
                  <Card1
                    imageSrc={card.imagePath}
                    brand={card.brand}
                    model={card.model}
                    fuelType={card.fuelType}
                    transmission={card.transmission}
                    description={card.description}
                    onUpdate={() => openModal(card)}
                    onDelete={() => onDelete(card.id)}
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="no-vehicles">
              No vehicles Based on provided Filter
            </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <Popup isOpen={isModalOpen} onClose={closeModal}>
          <UpdateVehicle vehicle={selectedVehicle} />
        </Popup>
      )}
    </div>
  );
};

export default VehicleListDetails;
