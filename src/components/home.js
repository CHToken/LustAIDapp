import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import Connect from "../walletConnection/connect";
import processedImage from "../images/img.jpg";
import defaultImage from "../images/naked";

const Home = () => {
  const [file, setFile] = useState(defaultImage); // Set default image as initial state
  const [loading, setLoading] = useState(false);
  const [processed, setProcessed] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(URL.createObjectURL(selectedFile)); // Set selected file as image
  };

  const handleRemovePhoto = () => {
    setFile(defaultImage); // Reset to default image when removing photo
    setProcessed(false);
  };

  const handleSlick = () => {
    console.log("Applying Slick filter...");
  };

  const handleNodify = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setProcessed(true);
    }, 3000);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = processedImage;
    link.download = "processed_image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    // Cleanup function to revoke object URL when component unmounts
    return () => {
      URL.revokeObjectURL(file);
    };
  }, [file]);

  return (
    <div className="main-container">
      <Connect className="connect-btn" />

      <div className="card-column">
        {/* First row for submitting photo */}
        <div className="row">
          <div className="card">
            <div className="card-body">
              <div>
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
              </div>

              {/* Display processed image if available */}
              {processed ? (
                <div className="image-preview">
                  <img src={processedImage} alt="Processed" />
                  <button className="download-btn" onClick={handleDownload}>
                    Download
                  </button>
                </div>
              ) : (
                // Display submitted photo if processed image is not available
                <div className="image-preview">
                  <img src={file} alt="Preview" />
                  {file !== defaultImage && ( // Only show remove button if not default image
                    <button
                      className="remove-photo-button"
                      onClick={handleRemovePhoto}
                    >
                      Remove Photo
                    </button>
                  )}
                </div>
              )}

              {/* Additional content */}
              {file === defaultImage && !processed && (
                <p>
                  Submit your photo <br />
                  to get started
                </p>
              )}

              {/* Loading indicator and processing message */}
              {loading && <p>Processing photo...</p>}
            </div>
            <div className="button-container">
              <button className="scan-btn" onClick={handleNodify}>
                Nodify
              </button>
              <button className="slick-btn" onClick={handleSlick}>
                Milkify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
