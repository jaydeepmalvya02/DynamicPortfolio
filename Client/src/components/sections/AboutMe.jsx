import React, { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import { Box, Typography, Avatar, Grid, Paper } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const AboutMe = () => {
  const { formData } = useContext(PortfolioContext);
  const { name, bio, email, contact, location, profileImage } = formData || {};

  return (
    <Box sx={{ py: 8, bgcolor: "#0e1628", color: "white" }}>
      <Box textAlign="center" mb={5}>
        <Typography variant="h4" component="h2" color="secondary" gutterBottom>
          About <span style={{ color: "#ffcc00" }}>Me</span>
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={4}>
          <Avatar
            alt={name}
            src={profileImage}
            sx={{
              width: 200,
              height: 200,
              mx: "auto",
              border: "4px solid #ffcc00",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{ p: 4, bgcolor: "#1c263b", color: "white" }}
          >
            <Typography variant="h6" gutterBottom>
              {bio}
            </Typography>
            <Box display="flex" alignItems="center" mt={2}>
              <EmailIcon sx={{ mr: 1, color: "#ffcc00" }} />
              <Typography>{email}</Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
              <PhoneIcon sx={{ mr: 1, color: "#ffcc00" }} />
              <Typography>{contact}</Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
              <LocationOnIcon sx={{ mr: 1, color: "#ffcc00" }} />
              <Typography>{location}</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
