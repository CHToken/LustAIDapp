import React, { useEffect, useState } from 'react';
import Solflare from '@solflare-wallet/sdk';

const Connect = ({ onConnect, onDisconnect, manualConnection }) => {
  // const [loading, setLoading] = useState(true);
  const [connecting, setConnecting] = useState(false); // New state for connecting
  const [wallet, setWallet] = useState(null);
  const [walletConnected, setWalletConnected] = useState(false);

  useEffect(() => {
    const initWallet = async () => {
      const solflareWallet = new Solflare();

      solflareWallet.on('connect', () => {
        console.log('connected', solflareWallet.publicKey.toString());
        // setLoading(false);
        setConnecting(false); // Set connecting to false when connected
        setWalletConnected(true); // Set walletConnected to true when connected
        onConnect();
      });

      solflareWallet.on('disconnect', () => {
        console.log('disconnected');
        // setLoading(false);
        setConnecting(false); // Set connecting to false when disconnected
        setWalletConnected(false); // Set walletConnected to false when disconnected
        onDisconnect();
      });

      // Set the wallet instance in the state
      setWallet(solflareWallet);

      if (!manualConnection) {
        // If manualConnection is false, do not connect automatically
        return;
      }

      try {
        await solflareWallet.connect();
      } catch (error) {
        console.error('Error connecting to Solflare wallet:', error);
        // setLoading(false);
      }
    };

    initWallet();

    // Cleanup function
    return () => {
      // Disconnect or perform cleanup if needed
    };
  }, [onConnect, onDisconnect, manualConnection]);

  const handleConnectClick = async () => {
    setConnecting(true); // Set connecting to true when the connection process starts
    if (wallet) {
      try {
        await wallet.connect();
      } catch (error) {
        console.error('Error connecting to Solflare wallet:', error);
        // setLoading(false);
        setConnecting(false); // Set connecting to false when the connection fails
      }
    }
  };

  const handleDisconnectClick = () => {
    // setLoading(true);
    setConnecting(true); // Set connecting to true when the disconnection process starts
    if (wallet) {
      wallet.disconnect();
    }
  };

  return (
    <div>
      {walletConnected ? (
        <button onClick={handleDisconnectClick} className='disconnect-btn'>
          {connecting ? 'Disconnecting...' : 'Disconnect Wallet'}
        </button>
      ) : (
        <button onClick={handleConnectClick} className='connect-btn'>
          {connecting ? 'Connecting...' : 'Connect Wallet'}
        </button>
      )}
    </div>
  );
};

export default Connect;
