// src/components/TemplateTwo/Footer.jsx
import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#0d1117",
        color: "#aaa",
        py: 4,
        borderTop: "2px solid #ffca28",
        mt: 6,
      }}
    >
      <Container maxWidth="md">
        <Typography align="center" fontSize={14}>
          © {new Date().getFullYear()} DroneTV | All rights reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
