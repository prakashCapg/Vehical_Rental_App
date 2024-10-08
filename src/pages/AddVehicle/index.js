import React, { useState } from "react";
import "./index.css";
import InputField from "../../components/InputField_Text/InputField_text";
import ImageUpload from "../../components/ImageUpload/Index";
import Buttons from "../../components/button/Buttons";
import SingleSelectDropdown from "../../components/SingleSelectDropDown";
import { handleAddVehicle } from "../../services/add-vehicle.service";
import { useNavigate } from "react-router-dom";

const AddVehicle = () => {
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

  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [images, setImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const navigate = useNavigate();

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

  const handleImagesUploaded = (images) => {
    setImages(images);
  };

  const handleImageDelete = (index) => {
    setImages((prevImages) => {
      return prevImages.filter((_, i) => i !== index);
    });
    setImageFiles((prevImages) => {
      return prevImages.filter((_, i) => i !== index);
    });
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
      setIsImageUploaded(base64Images.length > 0); // This should ensure the button is enabled
    } catch (error) {
      console.error("Failed to read image files:", error);
    }
  };

  const isFormValid = () => {
    // Create a new object excluding the image property
    const { imagePath, ...rest } = formValues;

    const allFieldsFilled = Object.entries(rest).every(([key, value]) => {
      return typeof value === "string" && value.trim() !== "";
    });

    // Check if there are images uploaded
    const imagesValid =
      Array.isArray(imagePath) && imagePath.length > 0 && isImageUploaded;

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
      setIsImageUploaded(false);
      navigate("/employee/vehicle-management");
    } catch (error) {
      console.error("Failed to add vehicle:", error);
    }
  };

  const onCancel = () => {
    navigate("/employee/vehicle-management");
  };

  return (
    <div className="Add-vehicle-input">
      <div className="Add-vehicle-form">
        <div className="input-fields">
          <h1 className="add-vehicle-text">ADD NEW VEHICLE : </h1>
          <InputField
            label="Vehicle&nbsp;Name&nbsp;:&nbsp;"
            inputType="letterandnumber"
            inputformValue={formValues.title}
            onValueInput={handleInputChange("title")}
          />
          <InputField
            label="Vehicle&nbsp;Brand&nbsp;:&nbsp;"
            inputType="letter"
            inputformValue={formValues.brand}
            onValueInput={handleInputChange("brand")}
          />
          <InputField
            label="Vehicle&nbsp;Model&nbsp;:&nbsp;"
            inputType="number"
            inputformValue={formValues.model}
            onValueInput={handleInputChange("model")}
          />
          <SingleSelectDropdown
            label="Transmission&nbsp;:&nbsp;"
            options={["Manual", "Automatic"]}
            optionlabel="Select Transmission"
            formselectedOption={formValues.transmission}
            onSelect={handleSelect("transmission")}
          />
          <SingleSelectDropdown
            label="Vehicle&nbsp;Fuel&nbsp;:&nbsp;"
            options={["Gasoline", "Diesel", "Electric"]}
            optionlabel="Select Fuel Type"
            formselectedOption={formValues.fuelType}
            onSelect={handleSelect("fuelType")}
          />
          <SingleSelectDropdown
            label="Vehicle&nbsp;Type&nbsp;:&nbsp;"
            options={["car", "bike", "suv"]}
            optionlabel="Select Vehicle Type"
            formselectedOption={formValues.type}
            onSelect={handleSelect("type")}
          />
          <InputField
            label="Vehicle&nbsp;Price&nbsp;:&nbsp;"
            inputType="number"
            inputformValue={formValues.purchasePrice}
            onValueInput={handleInputChange("purchasePrice")}
          />
          <InputField
            label="Rent&nbsp;/&nbsp;Hour&nbsp;:&nbsp;"
            inputType="number"
            inputformValue={formValues.rentPricePerHour}
            onValueInput={handleInputChange("rentPricePerHour")}
          />
          <InputField
            label="Registration&nbsp;No&nbsp;:&nbsp;"
            inputType="letterandnumber"
            inputformValue={formValues.registrationNumber}
            onValueInput={handleInputChange("registrationNumber")}
          />
        </div>
        <div className="Image-Upload">
          <h1 className="vehicle-photo">VEHICLE PHOTO : </h1>
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
          type=""
          size=""
          label="Cancel"
          onClick={onCancel}
          style={{
            backgroundColor: "lightgrey",
            border: "2px solid grey",
            color: "grey",
            padding: "8px 20px",
          }} // Ensure isFormValid is called
        />
        <Buttons
          type=""
          size=""
          label="Submit"
          onClick={onSubmit}
          disabled={!isFormValid()} // Ensure isFormValid is called
        />
      </div>
    </div>
  );
};

export default AddVehicle;
