// src/components/templateTwo/HeroSection.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";

const HeroSection = ({ name, title, tagline }) => {
  const [firstName, lastName] = name.split(" ");

  return (
    <Box
      sx={{
        bgcolor: "#ffd600",
        minHeight: "300px",
        textAlign: "center",
        py: { xs: 8, md: 10 },
        px: { xs: 2, md: 6 },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 900,
          color: "#181b26",
          mb: 1,
          fontSize: { xs: 30, md: 42 },
        }}
      >
        {firstName} <span style={{ color: "#fa3757" }}>{lastName || ""}</span>
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: "#181b26",
          fontWeight: 700,
          mb: 2,
          minHeight: 30,
        }}
      >
        <Typewriter
          options={{
            strings: [title],
            autoStart: true,
            loop: true,
            delay: 40,
          }}
        />
      </Typography>

      {tagline && (
        <Typography
          sx={{
            maxWidth: 600,
            mx: "auto",
            color: "#333",
            fontSize: { xs: 15, md: 17 },
            fontWeight: 500,
            mt: 1.5,
          }}
        >
          {tagline}
        </Typography>
      )}
    </Box>
  );
};

export default HeroSection;
