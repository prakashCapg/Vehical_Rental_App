// ImageUpload.js
import React, { useState } from "react";
import "./ImageUpload.css";
import upload from "./cloud-upload-button.png";
import Buttons from "../button/Buttons";

const ImageUpload = ({ onUpload }) => {
  const [images, setImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
    setImageFiles((prevFiles) => [...prevFiles, ...files]);

    // Call the onUpload function directly after file selection
  };

  const handleImageDelete = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleUpload = (event) => {
    event.preventDefault();
    if (imageFiles.length === 0) {
      console.error("No images to upload.");
      return;
    }

    // Call the onUpload function
    onUpload(imageFiles);
    setImages([]);
    setImageFiles([]);
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
                src={image}
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
