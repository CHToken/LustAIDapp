// Home.js
import React, { useState } from "react";
import "../styles/Home.css";
import Main from "../walletConnection/connect";

const Home = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleRemovePhoto = () => {
    setFile(null);
  };

  const handleScan = () => {
    console.log("Scanning image...");
  };

  const handleSlick = () => {
    console.log("Applying Slick filter...");
  };

  return (
    <div className="main-container">
      <Main className="connect-btn" />
      <div className="card">
        <div className="card-body">
          <div>
            {file ? (
              <div className="submit-photo-container">
                <button className="remove-photo-button" onClick={handleRemovePhoto}>
                  Remove Photo
                </button>
              </div>
            ) : (
              <label htmlFor="fileInput" className="submit-photo-button">
                Submit Photo
              </label>
            )}
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>

          {file && (
            <div className="image-preview">
              <img src={URL.createObjectURL(file)} alt="Preview" />
            </div>
          )}

        </div>
        <div className="button-container">
          <button className="scan-btn" onClick={handleScan}>
            Scan
          </button>
          <button className="slick-btn" onClick={handleSlick}>Slick</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
