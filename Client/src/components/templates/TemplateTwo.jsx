// src/components/TemplateTwo.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mockProfiles from "../../utils/mockProfile";

import Hero from "./templateTwo/sections/HeroSection";
import AboutMe from "./templateTwo/sections/AboutMe";
import Skills from "./templateTwo/sections/Skills";
import Services from "./templateTwo/sections/Services";
import Testimonials from "./templateTwo/sections/Testimonials";
import Blog from "./templateTwo/sections/Blog";
import Contact from "./templateTwo/sections/Contact";
import Footer from "./templateTwo/sections/Footer";

import { Typography, Box } from "@mui/material";
import Gallery from "./templateTwo/sections/Gallery";

const TemplateTwo = ({ profile: propProfile }) => {
  const { id } = useParams();
  const [profile, setProfile] = useState(propProfile || null);

  useEffect(() => {
    if (!propProfile && id) {
      const found = mockProfiles.find((p) => p.id === parseInt(id));
      setProfile(found || null);
    }
  }, [id, propProfile]);

  if (!profile)
    return (
      <Box sx={{ py: 5 }}>
        <Typography align="center" variant="h5">
          Profile not found.
        </Typography>
      </Box>
    );

  return (
    <Box sx={{ backgroundColor: "#0f1118", color: "#fff" }}>
      <Hero name={profile.name} title={profile.title} image={profile.image} />
      <AboutMe
        about={profile.about}
        highlights={profile.highlights}
        email={profile.email}
        phone={profile.phone}
        name={profile.name}
        title={profile.title}
      />
      <Skills skills={profile.skills} />
      <Services services={profile.services} />
      <Gallery gallery={profile.gallery} />
      <Testimonials />
      <Blog />
      <Contact email={profile.email} phone={profile.phone} />
      <Footer name={profile.name} />
    </Box>
  );
};

export default TemplateTwo;
