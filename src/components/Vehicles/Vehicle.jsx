import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VehicleCard = () => {
  const [selectVehicle, setSelectVehicle] = useState(" ");
  const navigate = useNavigate();
  const handlebutton = (vehiclesType) => {
    setSelectVehicle(vehiclesType);
  };

  const handlenavigate = (id) => {
    navigate("/vehicle/${id}");
  };

  return (
    <div>
      <button
        onClick={() => handlebutton("bike")}
        className="w-[80px] py-2 bg-blue-700 border border-gray-300 text-white rounded-1g hover:bg-blue-300 duration-300 mt-6 ml-3"
      >
        Bike
      </button>
      <button
        onClick={() => handlebutton("car")}
        className="w-[80px] py-2 bg-blue-700 border border-gray-300 text-white rounded-1g hover:bg-blue-300 duration-300 mt-6 ml-3"
      >
        Car
      </button>
      <button
        onClick={() => handlebutton("seaters")}
        className="w-[80px] py-2 bg-blue-700 border border-gray-300 text-white rounded-1g hover:bg-blue-300 duration-300 mt-6 ml-3"
      >
        {" "}
        6-seater
      </button>
      <h1 onClick={() => handlenavigate(1)}>{selectVehicle}</h1>
    </div>
  );
};

export default VehicleCard;
