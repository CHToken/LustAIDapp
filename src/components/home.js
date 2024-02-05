// Home.js
import React, { useState } from 'react';
import '../styles/Home.css';
import Main from '../walletConnection/connect';

const Home = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleScan = () => {
    console.log('Scanning image...');
  };

  const handleSlick = () => {
    console.log('Applying Slick filter...');
  };

  return (
    <div className="main-container">
      <Main className='connect-btn'/>
      <div className="card">
        <div className="card-body">
      <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="form-control"
          />

          {file && (
            <div className="image-preview">
              <img src={URL.createObjectURL(file)} alt="Preview" />
            </div>
          )}

          {file && (
            <div>
              <button className='scan-btn' onClick={handleScan}>
                Scan
              </button>
              <button onClick={handleSlick}>
                Slick
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
