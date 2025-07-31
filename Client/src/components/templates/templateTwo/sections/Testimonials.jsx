// src/components/templateTwo/Testimonials.jsx
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
} from "@mui/material";

// 💡 Preloaded mock testimonials
const mockTestimonials = [
  {
    name: "Riya Sharma",
    role: "Product Manager at SkyNet AI",
    quote:
      "Working with this team was a game-changer. Their AI-powered solutions drastically improved our drone analytics.",
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/31.jpg",
  },
  {
    name: "Ankit Desai",
    role: "Founder at Robodex",
    quote:
      "Exceptionally professional. The project delivery was timely and beyond expectations. Highly recommend!",
    avatar: "https://xsgames.co/randomusers/assets/avatars/male/35.jpg",
  },
  {
    name: "Megha Kapoor",
    role: "CTO at AeroSoft",
    quote:
      "Their UI/UX design and AI integration made our dashboard futuristic and user-friendly. Loved the creativity.",
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/44.jpg",
  },
];

export default function Testimonials() {
  return (
    <Box sx={{ bgcolor: "#181b26", py: 8, px: { xs: 2, md: 8 } }}>
      <Typography
        variant="h5"
        align="center"
        sx={{
          fontWeight: 800,
          mb: 5,
          color: "#ffd600",
          "& span": { color: "#fa3757" },
        }}
      >
        Client <span>Testimonials</span>
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {mockTestimonials.map((t, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card
              elevation={0}
              sx={{
                bgcolor: "#23253a",
                color: "#fff",
                borderRadius: 3,
                p: 2,
                transition: "transform .3s, box-shadow .3s",
                ":hover": {
                  transform: "translateY(-5px) scale(1.02)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                  <Avatar src={t.avatar} alt={t.name} />
                  <Box>
                    <Typography fontWeight={600}>{t.name}</Typography>
                    <Typography fontSize={14} sx={{ color: "#ffd600" }}>
                      {t.role}
                    </Typography>
                  </Box>
                </Stack>
                <Typography fontSize={15} sx={{ color: "#d1d1d1" }}>
                  “{t.quote}”
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
