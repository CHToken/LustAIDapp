import React, { useState } from 'react';
import Connect from '../walletConnection/connect';
import styles from '../styles/Home.css';

const Home = () => {
  const [connected, setConnected] = useState(false);
  const [manualConnection, setManualConnection] = useState(false);
  const [file, setFile] = useState(null);

  const initWallet = async () => {
    // Define your wallet initialization logic here
    console.log('Wallet manually connected');
  };

  const handleConnect = () => {
    setConnected(true);
    setManualConnection(true);
  };

  const handleDisconnect = () => {
    setConnected(false);
    setManualConnection(false);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleScan = () => {
    // Handle scan logic (e.g., send transaction to Solana for scanning)
    console.log('Scanning image...');
  };

  const handleSlick = () => {
    // Handle slick logic (e.g., send transaction to Solana for slicking)
    console.log('Applying Slick filter...');
  };

  return (
    <div className={styles.App}>
      <div className={styles.connectButtonContainer}>
        {!connected ? (
          <button
            className={`btn btn-primary ${styles.connectButton}`}
            onClick={handleConnect}
          >
            Connect Wallet
          </button>
        ) : (
          <button
            className={`btn btn-danger ${styles.connectButton}`}
            onClick={handleDisconnect}
          >
            Disconnect Wallet
          </button>
        )}
      </div>

      <Connect
        onConnect={handleConnect}
        onDisconnect={handleDisconnect}
        onManualConnect={initWallet}
        manualConnection={manualConnection}
      />

      {connected && (
        <div className={`mt-3 ${styles.uploadContainer}`}>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className={`form-control ${styles.input}`}
          />

          {file && (
            <div className={styles.imagePreview}>
              <img src={URL.createObjectURL(file)} alt="Preview" />
            </div>
          )}

          {file && (
            <div className={styles.buttonContainer}>
              <button
                className={`btn btn-primary ${styles.button}`}
                onClick={handleScan}
              >
                Scan
              </button>
              <button
                className={`btn btn-success ${styles.button}`}
                onClick={handleSlick}
              >
                Slick
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
