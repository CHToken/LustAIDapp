// import React from "react";
// import "@solana/wallet-adapter-react-ui/styles.css";
// import "./styles/Home.css";

// import Home from './components/home';

// function App() {
//   return (
//     <div className="App">
//       <Home />
//     </div>
//   );
// }

// export default App;


import "./App.css";
// import Main from "./walletConnection/connect";

import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { SolanaWalletConnectors } from '@dynamic-labs/solana';
import "@solana/wallet-adapter-react-ui/styles.css";
import "./styles/Home.css";
import Home from "./components/home";


function App() {
  return (
    <div className="App">
      <DynamicContextProvider
        settings={{
          environmentId: "6d4dc81f-c2eb-4324-96ea-40f27c2e3c3f",
          walletConnectors: [ SolanaWalletConnectors ],
        }}
      >
        {/* <Main /> */}
        <Home />
      </DynamicContextProvider>
    </div>
  );
}

export default App;
