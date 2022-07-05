import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TwitterContextProvider from "./contexts/TwitterContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TwitterContextProvider>
      <App />
    </TwitterContextProvider>
  </React.StrictMode>
);
