// src/components/templateOne/Testimonials.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
} from "@mui/material";

// 🔹 Mock testimonials
const testimonials = [
  {
    name: "Aarav Sharma",
    image: "https://xsgames.co/randomusers/assets/avatars/male/21.jpg",
    rating: 5,
    feedback:
      "Working with Jaydeep was a fantastic experience. His attention to detail and professionalism were top-notch!",
  },
  {
    name: "Neha Verma",
    image: "https://xsgames.co/randomusers/assets/avatars/female/18.jpg",
    rating: 4,
    feedback:
      "Very reliable and creative. Delivered everything before deadline with excellent results.",
  },
  {
    name: "Rohan Patel",
    image: "https://xsgames.co/randomusers/assets/avatars/male/23.jpg",
    rating: 5,
    feedback:
      "Truly impressed with the quality and commitment. Would highly recommend to anyone!",
  },
];

export default function Testimonials() {
  return (
    <Box sx={{ bgcolor: "#1b1e28", py: 7 }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#ffd600", fontWeight: 800, mb: 5 }}
        >
          Client <span style={{ color: "#fa3757" }}>Testimonials</span>
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((t, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  bgcolor: "#23253a",
                  color: "#fff",
                  borderRadius: 3,
                  p: 2,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0px 8px 24px rgba(255, 214, 0, 0.3)",
                  },
                }}
                elevation={0}
              >
                <CardContent>
                  <Avatar
                    src={t.image}
                    alt={t.name}
                    sx={{
                      width: 64,
                      height: 64,
                      mb: 1,
                      border: "3px solid #ffd600",
                      boxShadow: 3,
                    }}
                  />
                  <Typography variant="h6" sx={{ color: "#ffd600" }}>
                    {t.name}
                  </Typography>
                  <Rating value={t.rating} readOnly sx={{ my: 1 }} />
                  <Typography fontSize={14} sx={{ color: "#ddd" }}>
                    "{t.feedback}"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
