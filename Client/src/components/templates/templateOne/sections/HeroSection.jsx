// src/components/templateOne/HeroSection.jsx
import React from "react";
import { Box, Typography, Avatar, Container, Stack } from "@mui/material";

export default function HeroSection({
 profile
}) {
    const { name, title, location, experience, rating,image } = profile;
  const [firstName, lastName] = name?.split(" ") || ["", ""];

  return (
    <Box
      sx={{
        bgcolor: "#ffd600",
        color: "#181b26",
        py: { xs: 6, md: 8 },
        borderBottom: "4px solid #fa3757",
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Avatar
            src={image}
            sx={{
              width: 120,
              height: 120,
              border: "4px solid #fa3757",
              boxShadow: 4,
              transition: "transform .3s ease",
              ":hover": {
                transform: "scale(1.05)",
              },
            }}
          />
          <Typography variant="h3" sx={{ fontWeight: 900 }}>
            {firstName}{" "}
            <span style={{ color: "#fa3757" }}>{lastName || ""}</span>
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: 16, color: "#333" }}>
            {location} | ⭐ {rating} | {experience}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
