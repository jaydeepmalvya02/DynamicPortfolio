// src/components/templateOne/Footer.jsx
import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function Footer({ name = "Jaydeep Malvya" }) {
  return (
    <Box
      sx={{
        bgcolor: "#131419",
        color: "#ddd",
        py: 4,
        borderTop: "2px solid #ff9800",
        mt: 4,
      }}
    >
      <Container>
        <Typography
          align="center"
          fontSize={14}
          sx={{
            letterSpacing: 1,
            fontWeight: 500,
            "& span": { color: "#ffb300", fontWeight: 700 },
          }}
        >
          © {new Date().getFullYear()} <span>DroneTV</span> | Portfolio by{" "}
          <span>{name}</span>
        </Typography>
      </Container>
    </Box>
  );
}
