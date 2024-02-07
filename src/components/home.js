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

      <div className="card-column">
        {/* First row for submitting photo */}
        <div className="row">
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
                  <div>
                    <label htmlFor="fileInput" className="submit-photo-button">
                      Submit Photo
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      id="fileInput"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                  </div>
                )}
              </div>

              {file && (
                <div className="image-preview">
                  <img src={URL.createObjectURL(file)} alt="Preview" />
                </div>
              )}

              {/* Additional content */}
              {!file && (
                <p>Submit your photo <br />to get started</p>
              )}
            </div>
            <div className="button-container">
              <button className="scan-btn" onClick={handleScan}>
                Nudify 👙
              </button>
              <button className="slick-btn" onClick={handleSlick}>Milkify 💦</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
