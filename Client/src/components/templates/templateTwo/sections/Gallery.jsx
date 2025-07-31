// src/components/templateTwo/Gallery.jsx
import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

export default function Gallery({ gallery = [] }) {
  if (!gallery.length) return null;

  return (
    <Box sx={{ bgcolor: "#ffd600", py: 8, px: { xs: 2, md: 8 } }}>
      <Typography
        variant="h5"
        align="center"
        sx={{
          fontWeight: 800,
          mb: 5,
          color: "#23253a",
          "& span": { color: "#fa3757" },
        }}
      >
        Photo <span>Gallery</span>
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {gallery.map((url, i) => (
          <Grid item xs={6} sm={4} md={3} key={i}>
            <Paper
              elevation={3}
              sx={{
                overflow: "hidden",
                borderRadius: 3,
                transition: "transform 0.3s, box-shadow 0.3s",
                ":hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
              }}
            >
              <Box
                component="img"
                src={url}
                alt={`Gallery ${i + 1}`}
                sx={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover",
                }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
