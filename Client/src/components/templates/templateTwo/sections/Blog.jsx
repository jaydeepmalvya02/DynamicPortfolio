// src/components/templateTwo/Blog.jsx
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

// 💡 Preloaded blog data (mock)
const mockPosts = [
  {
    title: "Mastering Drone AI Navigation",
    excerpt:
      "Explore how AI is transforming autonomous drone flight with new navigation algorithms and systems.",
    image: "https://source.unsplash.com/400x300/?drone,technology&sig=11",
  },
  {
    title: "Building Vision-Based Systems",
    excerpt:
      "A quick guide to building efficient vision pipelines using OpenCV, TensorFlow, and onboard GPUs.",
    image: "https://source.unsplash.com/400x300/?ai,vision&sig=12",
  },
  {
    title: "ROS for Beginners",
    excerpt:
      "Getting started with Robot Operating System (ROS) to control and automate drone tasks effectively.",
    image: "https://source.unsplash.com/400x300/?robotics,ros&sig=13",
  },
];

export default function Blog() {
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
        From the <span>Blog</span>
      </Typography>

      <Grid container spacing={4}>
        {mockPosts.map((post, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card
              elevation={0}
              sx={{
                bgcolor: "#23253a",
                color: "#fff",
                borderRadius: 3,
                transition: "transform .3s, box-shadow .3s",
                ":hover": {
                  transform: "translateY(-5px) scale(1.03)",
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                height="160"
                image={post.image}
                alt={post.title}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ color: "#ffd600", fontWeight: 700, mb: 1 }}
                >
                  {post.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#d1d1d1", mb: 2 }}>
                  {post.excerpt}
                </Typography>
                <Button
                  variant="text"
                  size="small"
                  sx={{
                    color: "#fa3757",
                    fontWeight: 600,
                    ":hover": { color: "#ffd600" },
                  }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
