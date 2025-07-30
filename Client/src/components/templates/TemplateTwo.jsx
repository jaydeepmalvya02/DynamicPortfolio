// src/components/TemplateTwo.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mockProfiles from "../../utils/mockProfile";
import Hero from "./templateTwo/Hero";
import AboutContact from "./templateTwo/AboutContact";
import SkillsTimeline from "./templateTwo/SkillsTimeline";
import Footer from "./templateTwo/Footer";
import { Typography, Box } from "@mui/material";

const TemplateTwo = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  console.log(profile);
  

  useEffect(() => {
    const found = mockProfiles.find((p) => p.id === parseInt(id));
    setProfile(found);
  }, [id]);

  if (!profile)
    return (
      <Box sx={{ py: 5 }}>
        <Typography align="center" variant="h5">
          Profile not found.
        </Typography>
      </Box>
    );

  return (
    <>
      <Hero name={profile.name} title={profile.title} image={profile.image} />
      <AboutContact
        about={profile.about}
        highlights={profile.highlights}
        email={profile.email}
        phone={profile.phone}
        name={profile.name}
        title={profile.title}
      />
      <SkillsTimeline skills={profile.skills} />
      <Footer name={profile.name} />
    </>
  );
};

export default TemplateTwo;
