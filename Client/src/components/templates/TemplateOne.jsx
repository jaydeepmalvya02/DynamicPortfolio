// src/components/TemplateOne.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mockProfiles from "../../utils/mockProfile";

// Section components
import HeroSection from "./templateOne/sections/HeroSection";
import AboutMe from "./templateOne/sections/AboutMe";
import Skills from "./templateOne/sections/Skills";
import Services from "./templateOne/sections/Services";
import Portfolio from "./templateOne/sections/Portfolio";
import Testimonials from "./templateOne/sections/Testimonials";
import Blog from "./templateOne/sections/Blog";
import Contact from "./templateOne/sections/Contact";
import Footer from "./templateOne/sections/Footer";

const TemplateOne = ({ profile: propProfile }) => {
  const { id } = useParams();
  const [profile, setProfile] = useState(propProfile || null);

  useEffect(() => {
    if (!propProfile && id) {
      const found = mockProfiles.find((p) => p.id === parseInt(id));
      setProfile(found);
    }
  }, [id, propProfile]);

  if (!profile)
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>Loading...</div>
    );

  return (
    <>
      <HeroSection profile={profile} />
      <AboutMe profile={profile} />
      <Skills profile={profile} />
      <Services profile={profile} />
      <Portfolio/> 
      <Testimonials />
      <Blog />
      <Contact profile={profile} />
      <Footer name={profile.name} />
    </>
  );
};

export default TemplateOne;
