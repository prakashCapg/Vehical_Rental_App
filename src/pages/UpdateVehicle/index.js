import React, { useState, useEffect } from "react";
import "./index.css";
import InputField from "../../components/InputField_Text/InputField_text";
import ImageUpload from "../../components/ImageUpload/Index";
import Buttons from "../../components/button/Buttons";
import SingleSelectDropdown from "../../components/SingleSelectDropDown";
import { handleAddVehicle } from "../../services/add-vehicle.service";
import { useNavigate } from "react-router-dom";

const UpdateVehicle = ({ vehicle }) => {
  const [formValues, setFormValues] = useState({
    title: "",
    brand: "",
    model: "",
    transmission: "",
    fuelType: "",
    type: "",
    purchasePrice: "",
    rentPricePerHour: "",
    registrationNumber: "",
    imagePath: [],
  });

  const [images, setImages] = useState([]); // Initialize as an array
  const [imageFiles, setImageFiles] = useState([]);
  const navigate = useNavigate();

  // Effect to populate the form with vehicle data
  useEffect(() => {
    if (vehicle) {
      setFormValues({
        title: vehicle.title || "",
        brand: vehicle.brand || "",
        model: vehicle.model || "",
        transmission: vehicle.transmission || "",
        fuelType: vehicle.fuelType || "",
        type: vehicle.type || "",
        purchasePrice: vehicle.purchasePrice || "",
        rentPricePerHour: vehicle.rentPricePerHour || "",
        registrationNumber: vehicle.registrationNumber || "",
        imagePath: vehicle.imagePath || [],
      });
      setImages(Array.isArray(vehicle.imagePath) ? vehicle.imagePath : []); // Ensure images is an array
    }
  }, [vehicle]);

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

  const handleImagesUploaded = (newImages) => {
    setImages((prevImages) => [...prevImages, ...newImages]); // Append new images to existing ones
  };

  const handleImageDelete = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
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
      handleImagesUploaded(base64Images); // Use the new function to update images
    } catch (error) {
      console.error("Failed to read image files:", error);
    }
  };

  const isFormValid = () => {
    const { imagePath, ...rest } = formValues;
    const allFieldsFilled = Object.entries(rest).every(
      ([key, value]) => typeof value === "string" && value.trim() !== ""
    );
    const imagesValid = Array.isArray(imagePath) && imagePath.length > 0;

    return allFieldsFilled && imagesValid;
  };

  const onSubmit = async () => {
    if (!isFormValid()) return;

    try {
      const updatedValues = {
        ...formValues,
        imagePath: [...images], // Use the images array for the submitted data
      };
      const response = await handleAddVehicle(updatedValues);
      console.log("Vehicle updated successfully:", response);
      navigate("/admin/Vehicle-List"); // Redirect after success
    } catch (error) {
      console.error("Failed to update vehicle:", error);
    }
  };

  const onCancel = () => {
    navigate("/admin/Vehicle-List");
  };

  return (
    <div className="Add-vehicle-input">
      <div className="Add-vehicle-form">
        <div className="input-fields">
          <h1 className="add-vehicle-text">UPDATE VEHICLE:</h1>
          <InputField
            label="Vehicle Name:"
            inputType="letterandnumber"
            inputformValue={formValues.title}
            onValueInput={handleInputChange("title")}
          />
          <InputField
            label="Vehicle Brand:"
            inputType="letter"
            inputformValue={formValues.brand}
            onValueInput={handleInputChange("brand")}
          />
          <InputField
            label="Vehicle Model:"
            inputType="number"
            inputformValue={formValues.model}
            onValueInput={handleInputChange("model")}
          />
          <SingleSelectDropdown
            label="Transmission:"
            options={["Manual", "Automatic"]}
            optionlabel="Select Transmission"
            formselectedOption={formValues.transmission}
            onSelect={handleSelect("transmission")}
          />
          <SingleSelectDropdown
            label="Vehicle Fuel:"
            options={["Petrol", "Diesel", "Electric"]}
            optionlabel="Select Fuel Type"
            formselectedOption={formValues.fuelType}
            onSelect={handleSelect("fuelType")}
          />
          <SingleSelectDropdown
            label="Vehicle Type:"
            options={["Car", "Bike", "Six-Seater"]}
            optionlabel="Select Vehicle Type"
            formselectedOption={formValues.type}
            onSelect={handleSelect("type")}
          />
          <InputField
            label="Vehicle Price:"
            inputType="number"
            inputformValue={formValues.purchasePrice}
            onValueInput={handleInputChange("purchasePrice")}
          />
          <InputField
            label="Rent / Hour:"
            inputType="number"
            inputformValue={formValues.rentPricePerHour}
            onValueInput={handleInputChange("rentPricePerHour")}
          />
          <InputField
            label="Registration No:"
            inputType="letterandnumber"
            inputformValue={formValues.registrationNumber}
            onValueInput={handleInputChange("registrationNumber")}
          />
        </div>
        <div className="Image-Upload">
          <h1 className="vehicle-photo">VEHICLE PHOTO:</h1>
          <ImageUpload
            images={images}
            setImages={setImages}
            imageFiles={imageFiles}
            setImageFiles={setImageFiles}
            onUpload={onImageUpload}
            onImagesUploaded={handleImagesUploaded}
          />
          <div className="preview-container">
            {Array.isArray(images) && images.length > 0
              ? images.map((image, index) => (
                  <div
                    key={`image-${index}`}
                    className="preview-image-container"
                  >
                    <img
                      className="preview-image"
                      src={image}
                      alt={`preview-${index}`}
                      onClick={() => handleImageDelete(index)}
                    />
                  </div>
                ))
              : "Preview Images"}
          </div>
        </div>
      </div>
      <div className="form-submissions">
        <Buttons
          label="Cancel"
          onClick={onCancel}
          style={{
            backgroundColor: "lightgrey",
            border: "2px solid grey",
            color: "grey",
            padding: "8px 20px",
          }}
        />
        <Buttons label="Submit" onClick={onSubmit} disabled={!isFormValid()} />
      </div>
    </div>
  );
};

export default UpdateVehicle;
