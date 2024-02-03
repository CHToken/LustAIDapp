// Connect.js
import React, { useEffect, useState } from 'react';
import Solflare from '@solflare-wallet/sdk';

const Connect = ({ onConnect, onDisconnect, manualConnection }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initWallet = async () => {
      const wallet = new Solflare();

      wallet.on('connect', () => {
        console.log('connected', wallet.publicKey.toString());
        setLoading(false);
        onConnect(); // Notify the parent component about the connection
      });

      wallet.on('disconnect', () => {
        console.log('disconnected');
        setLoading(false);
        onDisconnect(); // Notify the parent component about the disconnection
      });

      try {
        await wallet.connect();
      } catch (error) {
        console.error('Error connecting to Solflare wallet:', error);
        setLoading(false);
      }
    };

    if (manualConnection && loading) {
      initWallet();
    }

    // Cleanup function
    return () => {
      // Disconnect or perform cleanup if needed
    };
  }, [onConnect, onDisconnect, loading, manualConnection]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {/* Render your content after the wallet is connected */}
        </div>
      )}
    </div>
  );
};

export default Connect;
