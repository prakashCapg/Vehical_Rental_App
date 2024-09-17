import React, { useState } from "react";
import "./ImageUpload.css";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a preview URL
      const previewURL = URL.createObjectURL(file);
      setFileName(file.name);
      setImage(file);
      setImagePreview(previewURL);
    }
  };

  const handleUpload = () => {
    // Handle the upload logic here
    if (image) {
      console.log("Uploading:", image);
      // Example: Upload image to server
      // const formData = new FormData();
      // formData.append('file', image);
      // fetch('/upload', { method: 'POST', body: formData });
    }
  };

  return (
    <div className="image-upload-container">
      <input
        type="file"
        id="fileInput"
        className="file-input"
        onChange={handleImageChange}
      />
      <label htmlFor="fileInput" className="custom-file-button">
        Choose File
      </label>
      {fileName && <p className="file-name">Selected file: {fileName}</p>}
      {imagePreview && (
        <div className="image-preview-container">
          <img src={imagePreview} alt="Preview" className="image-preview" />
        </div>
      )}
      <button
        onClick={handleUpload}
        disabled={!image}
        className="upload-button"
      >
        Upload
      </button>
    </div>
  );
};

export default ImageUpload;
