import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PortfolioProvider from "./context/PortfolioContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PortfolioProvider>
      <App />
    </PortfolioProvider>
  </BrowserRouter>
);
