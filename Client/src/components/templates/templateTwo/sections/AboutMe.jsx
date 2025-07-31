// src/components/templateTwo/AboutMe.jsx
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Avatar,
  Paper,
  Chip,
  Stack,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const AboutMe = ({
  image,
  name,
  title,
  about = [],
  email,
  phone,
  experience,
}) => {
  return (
    <Box
      sx={{
        bgcolor: "#101321",
        py: 8,
        px: { xs: 3, md: 8 },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          color: "#fff",
          fontWeight: 700,
          mb: 5,
        }}
      >
        About <span style={{ color: "#fa3757" }}>Me</span>
      </Typography>

      <Grid container spacing={4} alignItems="center">
        {/* Left: Avatar */}
        <Grid item xs={12} md={5} display="flex" justifyContent="center">
          <Paper
            elevation={6}
            sx={{
              p: 1,
              borderRadius: 2,
              background: "#181b26",
              textAlign: "center",
              maxWidth: 300,
            }}
          >
            <Avatar
              src={image}
              alt={name}
              sx={{
                width: 180,
                height: 180,
                mb: 2,
                mx: "auto",
                border: "4px solid #ffd600",
              }}
            />
            <Chip
              label={experience || "10+ Years Experience"}
              color="warning"
              sx={{
                fontWeight: 700,
                mt: 1,
              }}
            />
          </Paper>
        </Grid>

        {/* Right: Bio */}
        <Grid item xs={12} md={7}>
          <Typography
            variant="h6"
            sx={{ color: "#ffd600", fontWeight: 700, mb: 1 }}
          >
            {title}
          </Typography>
          <Typography sx={{ color: "#cfd8dc", mb: 2 }}>
            {about.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </Typography>

          <Stack spacing={1.5} direction="row" flexWrap="wrap" mb={2}>
            {email && (
              <Chip
                icon={<EmailIcon />}
                label={email}
                sx={{
                  fontWeight: 600,
                  bgcolor: "#fa3757",
                  color: "#fff",
                  ":hover": {
                    bgcolor: "#ffd600",
                    color: "#181b26",
                  },
                }}
              />
            )}
            {phone && (
              <Chip
                icon={<PhoneIcon />}
                label={phone}
                sx={{
                  fontWeight: 600,
                  bgcolor: "#23253a",
                  color: "#ffd600",
                  ":hover": { bgcolor: "#fa3757", color: "#fff" },
                }}
              />
            )}
          </Stack>

          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, color: "#fff", mt: 1 }}
          >
            {name}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
