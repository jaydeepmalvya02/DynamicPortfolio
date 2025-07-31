// src/components/templateOne/Portfolio.jsx
import React from "react";
import { Box, Container, Typography, Grid, Grow } from "@mui/material";

const sampleGallery = [
  "https://source.unsplash.com/random/400x300?nature1",
  "https://source.unsplash.com/random/400x300?nature2",
  "https://source.unsplash.com/random/400x300?nature3",
  "https://source.unsplash.com/random/400x300?nature4",
  "https://source.unsplash.com/random/400x300?nature5",
  "https://source.unsplash.com/random/400x300?nature6",
  "https://source.unsplash.com/random/400x300?nature7",
  "https://source.unsplash.com/random/400x300?nature8",
];

export default function Portfolio() {
  return (
    <Box sx={{ bgcolor: "#242936", py: 7 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#ffe066", fontWeight: 800, mb: 4 }}
        >
          Photo <span style={{ color: "#ff5252" }}>Gallery</span>
        </Typography>

        <Grid container spacing={3}>
          {sampleGallery.map((img, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Grow in timeout={700 + index * 150}>
                <Box
                  sx={{
                    width: "100%",
                    height: 160,
                    borderRadius: 3,
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxShadow: 4,
                    transition: "transform 0.35s ease, box-shadow 0.35s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 10px 25px rgba(255, 224, 0, 0.35)",
                    },
                  }}
                />
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
