import React, { useEffect, useState } from "react";
import "./index.css";
import Buttons from "../../components/button/Buttons";
import Card1 from "../../components/Card1/Card1";
import { vehicleDetailsData } from "../../services/vehicle-list-details.service";
import { Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { deleteVehicle } from "../../fakeAPI/vehicle-delete-fake-api";

const VehicleListDetails = () => {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    setVehicles(vehicleDetailsData());
  }, []);
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate("/admin/add-vehicle");
  };
  const onUpdate = () => {
    console.log("Update");
  };

  const onDelete = async (id) => {
    try {
      await deleteVehicle(id);
      setVehicles((prevVehicles) =>
        prevVehicles.filter((vehicle) => vehicle.id !== id)
      );
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="vehicles">
      <div className="vehicleFilters"></div>
      <div className="vehicleDetails">
        <div className="vehicle-create">
          <Filter className="vehiclefilter" />
          <Buttons label="Create" onClick={handleCreate} />
        </div>
        <div className="vehicle-update-container">
          {vehicles.map((card) => (
            <div className="vehicle-update" key={card.VehicleId}>
              <div className="vehicle-details">
                <Card1
                  imageSrc={card.imagePath}
                  brand={card.brand}
                  model={card.model}
                  fuelType={card.fuelType}
                  transmission={card.transmission}
                  description={card.description}
                  onUpdate={onUpdate}
                  onDelete={() => onDelete(card.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehicleListDetails;
