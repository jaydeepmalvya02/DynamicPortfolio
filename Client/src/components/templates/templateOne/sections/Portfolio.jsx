// src/components/templateOne/Portfolio.jsx
import React from "react";
import { Box, Container, Typography, Grid, Grow } from "@mui/material";

const sampleGallery = [
  
      "https://picsum.photos/200/300?random=10",
      "https://picsum.photos/200/300?random=20",
      "https://picsum.photos/200/300?random=30",
      "https://picsum.photos/200/300?random=40",
      "https://picsum.photos/200/300?random=50",
      
    
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
                <img
                  src={img}
                  alt={`gallery-${index}`}
                  style={{
                    width: "100%",
                    height: 360,
                    objectFit: "cover",
                    borderRadius: 12,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
