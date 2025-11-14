import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster as HotToaster } from "react-hot-toast"; // if using react-hot-toast

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <HotToaster /> {/* or place this inside App.jsx if you prefer */}
  </React.StrictMode>
);
