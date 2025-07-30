import React, { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const PortfolioContext = createContext();

const PortfolioProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    hero: {
      name: "",
      title: "",
      tagline: "",
      profileImage: "",
    },
    about: {
      bio: "",
      email: "",
      phone: "",
      location: "",
      socials: {
        linkedin: "",
        twitter: "",
        github: "",
        website: "",
      },
    },
    skills: [],
    services: [
      { title: "", description: "" },
      { title: "", description: "" },
      { title: "", description: "" },
    ],
    portfolio: [
      { title: "", description: "", image: "" },
      { title: "", description: "", image: "" },
      { title: "", description: "", image: "" },
    ],
    testimonials: [],
    blog: {
      title: "",
      summary: "",
    },
    contact: {
      message: "",
      email: "",
      phone: "",
    },
  });

  const [selectedTemplate, setSelectedTemplate] = useState("TemplateOne");

  return (
    <PortfolioContext.Provider
      value={{ formData, setFormData, selectedTemplate, setSelectedTemplate }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
