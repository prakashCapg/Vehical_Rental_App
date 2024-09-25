import React from "react";
import "./Addvehicle.css";
import InputField from "../../components/InputField_Text/InputField_text";
import ImageUpload from "../../components/ImageUpload/Index";
import Buttons from "../../components/button/Buttons";
import SingleSelectDropdown from "../../components/SingleSelectDropDown";

const AddVehicle = () => {
  const options = [
    { value: "Car", label: "Car" },
    { value: "Bike", label: "Bike" },
    { value: "6-Seater", label: "6-Seater" },
  ];

  const handleSelect = (selectedValue) => {
    console.log("Selected value:", selectedValue);
  };

  return (
    <div className="Add-vehicle-input">
      <div className="Add-vehicle-form">
        <div className="input-fields">
          <InputField label="Vehicle&nbsp;Name&nbsp;:&nbsp;" />
          <InputField label="Vehicle&nbsp;Brand&nbsp;:&nbsp;" />
          <InputField label="Vehicle&nbsp;Model&nbsp;:&nbsp;" />
          <InputField label="Vehicle&nbsp;Transmission&nbsp;Type&nbsp;:&nbsp;" />
          <InputField label="Vehicle&nbsp;Fuel&nbsp;Type&nbsp;:&nbsp;" />
          <SingleSelectDropdown
            label="Vehicle&nbsp;Category&nbsp;:&nbsp;"
            options={options}
            optionlabel="Select Vehicle Category"
            onSelect={handleSelect}
          />
          <InputField label="Vehicle&nbsp;Price&nbsp;:&nbsp;" />
          <InputField label="Vehicle&nbsp;Rent&nbsp;Price&nbsp;:&nbsp;" />
          <InputField label="Vehicle&nbsp;Registration&nbsp;Number&nbsp;:&nbsp;" />
        </div>
        <div className="Image-Upload">
          <ImageUpload />
          <Buttons type="" size="" label={"Upload Image"} />
          <Buttons type="" size="" label="Submit" />
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;
