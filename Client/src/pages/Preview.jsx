import React, { useEffect, useState } from "react";
import TemplateOne from "../components/templates/TemplateOne";
import TemplateTwo from "../components/templates/TemplateTwo";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Preview = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProfile = localStorage.getItem("userProfile");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);
  console.log(profile);
  

  const handleBack = () => {
    navigate("/create-portfolio/form");
  };

  if (!profile) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h6" gutterBottom>
          No profile data found.
        </Typography>
        <Button variant="contained" onClick={handleBack}>
          Go Back to Edit
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      {/* Render selected template */}
      {profile.template === "TemplateOne" && <TemplateOne profile={profile} />}
      {profile.template === "TemplateTwo" && <TemplateTwo profile={profile} />}
      {!["TemplateOne", "TemplateTwo"].includes(profile.template) && (
        <Box sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h6" color="error">
            Unknown template selected: {profile.template}
          </Typography>
        </Box>
      )}

      {/* Back to Edit Button */}
      <Box sx={{ textAlign: "center", my: 4 }}>
        <Button variant="outlined" onClick={handleBack}>
          Back to Edit
        </Button>
      </Box>
    </Box>
  );
};

export default Preview;
