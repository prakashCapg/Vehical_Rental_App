import React, { useState } from "react";
import "./Addvehicle.css";
import InputField from "../../components/InputField_Text/InputField_text";
import ImageUpload from "../../components/ImageUpload/Index";
import Buttons from "../../components/button/Buttons";
import SingleSelectDropdown from "../../components/SingleSelectDropDown";

const AddVehicle = () => {
  const [formValues, setFormValues] = useState({
    vehicleName: "",
    vehicleBrand: "",
    vehicleModel: "",
    transmissionType: "",
    fuelType: "",
    vehicleCategory: "",
    vehiclePrice: "",
    rentPrice: "",
    registrationNumber: "",
  });

  const handleSelect = (field) => (selectedValue) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: selectedValue,
    }));
  };

  const handleInputChange = (field) => (value) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddVehicle = () => {
    console.log("done");
  };

  const isFormValid = Object.values(formValues).every(
    (value) => value.trim() !== ""
  );

  return (
    <div className="Add-vehicle-input">
      <div className="Add-vehicle-form">
        <div className="input-fields">
          <InputField
            label="Vehicle Name :"
            inputType="letterandnumber"
            value={formValues.vehicleName}
            onValueInput={handleInputChange("vehicleName")}
          />
          <InputField
            label="Vehicle Brand :"
            inputType="letter"
            value={formValues.vehicleBrand}
            onValueInput={handleInputChange("vehicleBrand")}
          />
          <InputField
            label="Vehicle Model :"
            inputType="number"
            value={formValues.vehicleModel}
            onValueInput={handleInputChange("vehicleModel")}
          />
          <SingleSelectDropdown
            label="Vehicle Transmission Type :"
            options={["Manual", "Automatic"]}
            optionlabel="Select Transmission"
            onSelect={handleSelect("transmissionType")}
          />
          <SingleSelectDropdown
            label="Vehicle Fuel Type :"
            options={["Petrol", "Diesel", "Electric"]}
            optionlabel="Select Fuel Type"
            onSelect={handleSelect("fuelType")}
          />
          <SingleSelectDropdown
            label="Vehicle Category :"
            options={["Car", "Bike", "Six-Seater"]}
            optionlabel="Select Vehicle Category"
            onSelect={handleSelect("vehicleCategory")}
          />
          <InputField
            label="Vehicle Price :"
            inputType="number"
            value={formValues.vehiclePrice}
            onValueInput={handleInputChange("vehiclePrice")}
          />
          <InputField
            label="Vehicle Rent Price :"
            inputType="number"
            value={formValues.rentPrice}
            onValueInput={handleInputChange("rentPrice")}
          />
          <InputField
            label="Vehicle Registration Number :"
            inputType="letterandnumber"
            value={formValues.registrationNumber}
            onValueInput={handleInputChange("registrationNumber")}
          />
        </div>
        <div className="Image-Upload">
          <ImageUpload />
          <Buttons type="" size="" label={"Upload Image"} />
          <Buttons
            type=""
            size=""
            label="Submit"
            onClick={handleAddVehicle}
            disabled={!isFormValid} // Disable button if form is invalid
          />
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;
