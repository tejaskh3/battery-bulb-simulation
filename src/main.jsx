import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BatterBulbProvider } from "./context/BatteryBulbContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BatterBulbProvider>
      <App />
    </BatterBulbProvider>
  </React.StrictMode>
);
