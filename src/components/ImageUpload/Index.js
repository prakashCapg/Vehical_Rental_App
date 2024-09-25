// ImageUpload.js
import React, { useState } from "react";
import "./ImageUpload.css";
import upload from "./cloud-upload-button.png";

const ImageUpload = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleImageDelete = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
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
    </div>
  );
};

export default ImageUpload;
