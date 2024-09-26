// ImageUpload.js
import React, { useState } from "react";
import "./ImageUpload.css";
import upload from "./cloud-upload-button.png";
import Buttons from "../button/Buttons";

const ImageUpload = ({ onUpload }) => {
  const [images, setImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]); // Track actual file objects

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
    setImageFiles((prevFiles) => [...prevFiles, ...files]); // Store actual file objects
  };

  const handleImageDelete = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== index)); // Remove file from actual files
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    if (imageFiles.length === 0) {
      console.error("No images to upload.");
      return;
    }

    // Call the onUpload function and pass the files
    await onUpload(imageFiles);
    setImages([]); // Clear previews after upload
    setImageFiles([]); // Clear the file list
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
      {images.length > 0 && (
        <div className="preview-container">
          {images.map((image, index) => (
            <div key={index} className="upload-preview">
              <img
                src={image} // Use the URL directly from the state
                alt={`preview-${index}`}
                className="preview-images"
                onClick={() => handleImageDelete(index)}
              />
            </div>
          ))}
        </div>
      )}
      <Buttons type="" size="" label={"Upload Image"} onClick={handleUpload} />
    </div>
  );
};

export default ImageUpload;
