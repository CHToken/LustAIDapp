import React from "react";
import "@solana/wallet-adapter-react-ui/styles.css";
import "./styles/globals.css";
import "./styles/Home.css";

import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
