// ImageUpload.js
import React from "react";
import "./ImageUpload.css";
import upload from "./cloud-upload-button.png";
import Buttons from "../Buttons/Buttons";

const ImageUpload = ({
  onUpload,
  onImagesUploaded,
  setImages,
  setImageFiles,
  imageFiles,
}) => {
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));

    setImages((prevImages) => [...prevImages, ...newImages]);
    setImageFiles((prevFiles) => [...prevFiles, ...files]); // Store the actual files
    onImagesUploaded(newImages, files);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    if (imageFiles.length === 0) {
      console.error("No images to upload.");
      return;
    }

    onUpload(imageFiles); // Pass the actual file objects
    setImages([]);
    setImageFiles([]); // Clear the stored file objects
  };

  return (
    <div className="image-upload-container">
      <div className="image-Input">
        <label className="file-upload-label">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="file-upload-input"
          />
          <img className="image-upload-icon" src={upload} alt="Image-upload" />
        </label>
      </div>

      <Buttons type="" size="" label={"Upload Image"} onClick={handleUpload} />
    </div>
  );
};

export default ImageUpload;
