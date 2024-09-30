import React, { useState } from "react";
import "./Addvehicle.css";
import InputField from "../../components/InputField_Text/InputField_text";
import ImageUpload from "../../components/ImageUpload/Index";
import Buttons from "../../components/button/Buttons";
import SingleSelectDropdown from "../../components/SingleSelectDropDown";
import { handleAddVehicle } from "../../services/add-vehicle.service";

const AddVehicle = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    vehicleBrand: "",
    vehicleModel: "",
    transmissionType: "",
    fuelType: "",
    type: "",
    vehiclePrice: "",
    rentPrice: "",
    registrationNumber: "",
    image: [],
  });

  const [isImageUploaded, setIsImageUploaded] = useState(false);

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

  const onImageUpload = async (imageFiles) => {
    if (imageFiles.length === 0) return;

    const fileReaders = imageFiles.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.readAsDataURL(file);
      });
    });

    try {
      const base64Images = await Promise.all(fileReaders);
      setFormValues((prev) => ({
        ...prev,
        image: base64Images,
      }));
      setIsImageUploaded(base64Images.length > 0); // This should ensure the button is enabled
    } catch (error) {
      console.error("Failed to read image files:", error);
    }
  };

  const isFormValid = () => {
    // Create a new object excluding the image property
    const { image, ...rest } = formValues;

    const allFieldsFilled = Object.entries(rest).every(([key, value]) => {
      return typeof value === "string" && value.trim() !== "";
    });

    // Check if there are images uploaded
    const imagesValid = Array.isArray(image) && image.length > 0;

    return allFieldsFilled && imagesValid; // Ensure other fields are filled and images are uploaded
  };

  const onSubmit = async () => {
    if (!isFormValid()) return; // Ensure form is valid

    try {
      const response = await handleAddVehicle(formValues);
      console.log("Vehicle added successfully:", response);

      // Reset form values
      setFormValues({
        title: "",
        vehicleBrand: "",
        vehicleModel: "",
        transmissionType: "",
        fuelType: "",
        type: "",
        vehiclePrice: "",
        rentPrice: "",
        registrationNumber: "",
        image: [],
      });
      setIsImageUploaded(false);
    } catch (error) {
      console.error("Failed to add vehicle:", error);
    }
  };

  return (
    <div className="Add-vehicle-input">
      <div className="Add-vehicle-form">
        <div className="input-fields">
          <InputField
            label="Vehicle&nbsp;Name&nbsp;:&nbsp;"
            inputType="letterandnumber"
            inputformValue={formValues.title}
            onValueInput={handleInputChange("title")}
          />
          <InputField
            label="Vehicle&nbsp;Brand&nbsp;:&nbsp;"
            inputType="letter"
            inputformValue={formValues.vehicleBrand}
            onValueInput={handleInputChange("vehicleBrand")}
          />
          <InputField
            label="Vehicle&nbsp;Model&nbsp;:&nbsp;"
            inputType="number"
            inputformValue={formValues.vehicleModel}
            onValueInput={handleInputChange("vehicleModel")}
          />
          <SingleSelectDropdown
            label="Vehicle&nbsp;Transmission&nbsp;Type&nbsp;:&nbsp;"
            options={["Manual", "Automatic"]}
            optionlabel="Select Transmission"
            formselectedOption={formValues.transmissionType}
            onSelect={handleSelect("transmissionType")}
          />
          <SingleSelectDropdown
            label="Vehicle&nbsp;Fuel&nbsp;Type&nbsp;:&nbsp;"
            options={["Petrol", "Diesel", "Electric"]}
            optionlabel="Select Fuel Type"
            formselectedOption={formValues.fuelType}
            onSelect={handleSelect("fuelType")}
          />
          <SingleSelectDropdown
            label="Vehicle&nbsp;Category&nbsp;:&nbsp;"
            options={["Car", "Bike", "Six-Seater"]}
            optionlabel="Select Vehicle Category"
            formselectedOption={formValues.type}
            onSelect={handleSelect("type")}
          />
          <InputField
            label="Vehicle&nbsp;Price&nbsp;:&nbsp;"
            inputType="number"
            inputformValue={formValues.vehiclePrice}
            onValueInput={handleInputChange("vehiclePrice")}
          />
          <InputField
            label="Vehicle&nbsp;Rent&nbsp;Price&nbsp;:&nbsp;"
            inputType="number"
            inputformValue={formValues.rentPrice}
            onValueInput={handleInputChange("rentPrice")}
          />
          <InputField
            label="Vehicle&nbsp;Registration&nbsp;Number&nbsp;:&nbsp;"
            inputType="letterandnumber"
            inputformValue={formValues.registrationNumber}
            onValueInput={handleInputChange("registrationNumber")}
          />
        </div>
        <div className="Image-Upload">
          <ImageUpload onUpload={onImageUpload} />
        </div>
      </div>
      <Buttons
        type=""
        size=""
        label="Submit"
        onClick={onSubmit}
        disabled={!isFormValid()} // Ensure isFormValid is called
      />
    </div>
  );
};

export default AddVehicle;
