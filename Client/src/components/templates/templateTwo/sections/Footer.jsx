// src/components/templateTwo/Footer.jsx
import React from "react";
import { Box, Typography, Link } from "@mui/material";

export default function Footer({ name }) {
  return (
    <Box
      sx={{
        bgcolor: "#131419",
        color: "#ccc",
        py: 4,
        borderTop: "4px solid #ffd600",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 500 }}>
        © {new Date().getFullYear()}{" "}
        <Link
          href="/"
          underline="hover"
          sx={{
            color: "#ffd600",
            fontWeight: 700,
            transition: "color 0.3s",
            ":hover": { color: "#fa3757" },
          }}
        >
          DroneTV
        </Link>{" "}
        | Portfolio of <strong>{name}</strong>
      </Typography>
    </Box>
  );
}
