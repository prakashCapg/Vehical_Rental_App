import React, { useEffect, useState } from "react";
import Buttons from "../../components/Buttons/Buttons";
import { useParams } from "react-router-dom";
import { useGetVehicleById } from "../../services/vehicle-details.service";
import { handleImagePath } from "../../components/Card1/Card1";

const VehicleDetails = () => {
  const { id } = useParams();
  const vehicle = useGetVehicleById(id);
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    if (vehicle) {
      const resolvedImagePath = handleImagePath(vehicle.imagePath);
      setImagePath(resolvedImagePath);
    }
  }, [vehicle]);

  if (!vehicle) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <main className="flex justify-center items-center w-full px-10">
        <div className="w-1/2 p-4">
          <img
            src={imagePath}
            alt={`${vehicle.brand} ${vehicle.model}`}
            className="w-full h-full object-cover rounded-lg shadow-md"
            style={{ maxHeight: "400px" }}
          />
        </div>
        <div
          className="w-1/2 p-8 bg-white shadow-lg rounded-lg flex flex-col justify-between"
          style={{ maxHeight: "400px" }}
        >
          <div>
            <h2 className="text-3xl font-bold mb-3">
              {vehicle.model} {vehicle.category}
            </h2>
            <p className="text-md mb-2">
              <strong>Brand:</strong> {vehicle.brand}
            </p>
            <p className="text-md mb-2">
              <strong>Transmission:</strong> {vehicle.transmission}
            </p>
            <p className="text-md mb-2">
              <strong>Fuel Type:</strong> {vehicle.fuelType}
            </p>
            {/* <p className="text-md mb-2">
              <strong>Purchase Price:</strong> ${vehicle.purchasePrice}
            </p> */}
            <p className="text-md mb-2">
              <strong>Registration Number:</strong> {vehicle.registrationNumber}
            </p>
            <p className="text-md mb-2">
              <strong>Description:</strong> {vehicle.description}
            </p>
            <p className="text-3xl font-semi-bold mt-6">
              <strong>${vehicle.rentPricePerHour}/hour</strong>
            </p>
          </div>

          <div className="mt-4 flex justify-center space-x-12">
            <Buttons label="BACK" type="gray-button" size="medium" />
            <Buttons label="BOOK" type="yellow-button" size="medium" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default VehicleDetails;
