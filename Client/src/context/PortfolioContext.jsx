// src/context/PortfolioContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const PortfolioContext = createContext();

const PortfolioProvider = ({ children }) => {
  const [formData, setFormData] = useState(() => {
    const stored = localStorage.getItem("portfolioForm");
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    localStorage.setItem("portfolioForm", JSON.stringify(formData));
  }, [formData]);
  

  return (
    <PortfolioContext.Provider value={{ formData, setFormData }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
