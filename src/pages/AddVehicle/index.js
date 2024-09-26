import React, { useState } from "react";
import "./Addvehicle.css";
import InputField from "../../components/InputField_Text/InputField_text";
import ImageUpload from "../../components/ImageUpload/Index";
import Buttons from "../../components/button/Buttons";
import SingleSelectDropdown from "../../components/SingleSelectDropDown";
import { handleAddVehicle } from "../../services/add-vehicle.service";

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
    if (imageFiles.length === 0) return; // Prevent if no files

    const fileReaders = imageFiles.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          console.log(`File uploaded: ${file.name}, Size: ${file.size}`); // Log file info
          resolve(reader.result); // Resolve with base64 string
        };
        reader.onerror = (error) => {
          console.error("Error reading file:", error); // Log error
          reject(error);
        };
        reader.readAsDataURL(file); // Read as Data URL
      });
    });

    try {
      const base64Images = await Promise.all(fileReaders);
      console.log("Base64 Images:", base64Images); // Log base64 images
      setFormValues((prev) => ({
        ...prev,
        image: base64Images, // Store the array of Base64 strings
      }));
      setIsImageUploaded(base64Images.length > 0); // Set true if images are uploaded
    } catch (error) {
      console.error("Failed to read image files:", error);
      setIsImageUploaded(false); // Reset in case of error
    }
  };

  const onSubmit = async () => {
    if (!isFormValid()) return; // Ensure form is valid

    try {
      const response = await handleAddVehicle(formValues);
      console.log("Vehicle added successfully:", response);

      // Reset form values
      setFormValues({
        vehicleName: "",
        vehicleBrand: "",
        vehicleModel: "",
        transmissionType: "",
        fuelType: "",
        vehicleCategory: "",
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

  const isFormValid = () => {
    const allFieldsFilled = Object.entries(formValues).every(([key, value]) => {
      const isFilled = typeof value === "string" && value.trim() !== "";
      console.log(`Field: ${key}, Value: "${value}", Is Filled: ${isFilled}`); // Log for debugging
      return isFilled;
    });

    const imagesValid =
      Array.isArray(formValues.image) && formValues.image.length > 0;
    console.log("All fields filled:", allFieldsFilled); // Log for debugging
    console.log("Image uploaded:", imagesValid); // Log for debugging

    return allFieldsFilled && imagesValid; // Ensure image is uploaded
  };

  return (
    <div className="Add-vehicle-input">
      <div className="Add-vehicle-form">
        <div className="input-fields">
          <InputField
            label="Vehicle Name:"
            inputType="letterandnumber"
            inputformValue={formValues.vehicleName}
            onValueInput={handleInputChange("vehicleName")}
          />
          <InputField
            label="Vehicle Brand:"
            inputType="letter"
            inputformValue={formValues.vehicleBrand}
            onValueInput={handleInputChange("vehicleBrand")}
          />
          <InputField
            label="Vehicle Model:"
            inputType="number"
            inputformValue={formValues.vehicleModel}
            onValueInput={handleInputChange("vehicleModel")}
          />
          <SingleSelectDropdown
            label="Vehicle Transmission Type:"
            options={["Manual", "Automatic"]}
            optionlabel="Select Transmission"
            formselectedOption={formValues.transmissionType}
            onSelect={handleSelect("transmissionType")}
          />
          <SingleSelectDropdown
            label="Vehicle Fuel Type:"
            options={["Petrol", "Diesel", "Electric"]}
            optionlabel="Select Fuel Type"
            formselectedOption={formValues.fuelType}
            onSelect={handleSelect("fuelType")}
          />
          <SingleSelectDropdown
            label="Vehicle Category:"
            options={["Car", "Bike", "Six-Seater"]}
            optionlabel="Select Vehicle Category"
            formselectedOption={formValues.vehicleCategory}
            onSelect={handleSelect("vehicleCategory")}
          />
          <InputField
            label="Vehicle Price:"
            inputType="number"
            inputformValue={formValues.vehiclePrice}
            onValueInput={handleInputChange("vehiclePrice")}
          />
          <InputField
            label="Vehicle Rent Price:"
            inputType="number"
            inputformValue={formValues.rentPrice}
            onValueInput={handleInputChange("rentPrice")}
          />
          <InputField
            label="Vehicle Registration Number:"
            inputType="letterandnumber"
            inputformValue={formValues.registrationNumber}
            onValueInput={handleInputChange("registrationNumber")}
          />
        </div>
        <div className="Image-Upload">
          <ImageUpload onUpload={onImageUpload} />

          <Buttons
            type=""
            size=""
            label="Submit"
            onClick={onSubmit}
            disabled={!isFormValid()} // Ensure isFormValid is called
          />
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;
