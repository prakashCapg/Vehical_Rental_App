import React, { useState, useEffect } from "react";
import "./index.css";
import InputField from "../../components/InputField_Text/InputField_text";
import ImageUpload from "../../components/ImageUpload/Index";
import Buttons from "../../components/Buttons/Buttons";
import SingleSelectDropdown from "../../components/SingleSelectDropDown";
import { UpdateVehiclehandle } from "../../services/vehicle-update.service";

const UpdateVehicle = ({ vehicle, onUpdate, closeModal }) => {
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

  const [images, setImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);

  useEffect(() => {
    if (vehicle) {
      const imagePaths = Array.isArray(vehicle.imagePath)
        ? vehicle.imagePath
        : [];
      setFormValues({
        id: vehicle.id,
        VehicleId: vehicle.VehicleId || "",
        title: vehicle.title || "",
        brand: vehicle.brand || "",
        model: vehicle.model || "",
        transmission: vehicle.transmission || "",
        fuelType: vehicle.fuelType || "",
        type: vehicle.type || "",
        purchasePrice: vehicle.purchasePrice || "",
        rentPricePerHour: vehicle.rentPricePerHour || "",
        registrationNumber: vehicle.registrationNumber || "",
        imagePath: [vehicle.imagePath] || [],
        description: vehicle.description || "",
        category: vehicle.category || "",
      });

      setImages(
        Array.isArray(vehicle.imagePath)
          ? vehicle.imagePath
          : [vehicle.imagePath]
      );
      console.log("Loaded images:", imagePaths); // Log for debugging
    }
  }, [vehicle]);

  const handleSelect = (field) => (selectedValue) => {
    setFormValues((prev) => ({ ...prev, [field]: selectedValue }));
  };

  const handleInputChange = (field) => (value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleImagesUploaded = (newImages) => {
    setImages((prevImages) => {
      const combinedImages = [...prevImages, ...newImages];
      return Array.from(new Set(combinedImages)); // Remove duplicates
    });
  };

  const handleImageDelete = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setImageFiles((prevImages) => prevImages.filter((_, i) => i !== index));
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
        imagePath: base64Images,
      }));
      // Ensure we're updating with the new images
    } catch (error) {
      console.error("Failed to read image files:", error);
    }
  };

  const onSubmit = async () => {
    try {
      const updatedImages = [formValues.imagePath];

      const updatedValues = {
        ...formValues,
        imagePath: Array.isArray(updatedImages)
          ? updatedImages.join(",")
          : updatedImages, // Join array into a string
      };

      const response = await UpdateVehiclehandle(updatedValues);
      console.log("Vehicle updated successfully:", response);

      // Call the onUpdate callback with the updated vehicle data
      onUpdate(updatedValues); // Pass the updated values back to the parent
      closeModal();
    } catch (error) {
      console.error("Failed to update vehicle:", error);
    }
  };

  const onCancel = () => {
    closeModal();
  };

  const isBase64 = (str) => {
    return typeof str === "string" && str.startsWith("data:image/");
  };

  const isBloborBase64 = (src) => {
    return (
      typeof src === "string" &&
      (src.startsWith("blob:") || src.startsWith("data:image/"))
    );
  };

  const renderImage = (src, index) => {
    return (
      <div key={`${src}-${index}`} className="preview-image-container">
        <img
          className="preview-image"
          src={
            isBloborBase64(src)
              ? src
              : require(`../../Data/images/${src.split("/").pop()}`)
          }
          alt={`preview-${index}`}
          onClick={() => handleImageDelete(index)}
        />
      </div>
    );
  };

  return (
    <div className="Update-vehicle-input">
      <div className="Update-vehicle-form">
        <div className="input-fields">
          <h1 className="Update-vehicle-text">UPDATE VEHICLE:</h1>
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
            {images.length > 0
              ? images.map((src, index) => renderImage(src, index))
              : "No image"}
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
        <Buttons label="Submit" onClick={onSubmit} />
      </div>
    </div>
  );
};

export default UpdateVehicle;
