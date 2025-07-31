// src/components/templateOne/Blog.jsx
import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Button,
} from "@mui/material";

// 🔹 Mock blog data
const blogPosts = [
  {
    title: "Using AI for Drone Navigation",
    image: "https://source.unsplash.com/400x250/?ai,drone",
    excerpt:
      "Discover how AI is revolutionizing obstacle detection and route planning in autonomous drones.",
    link: "#",
  },
  {
    title: "Top 5 Tools for Computer Vision",
    image: "https://source.unsplash.com/400x250/?computer,vision",
    excerpt:
      "Explore the most powerful libraries and frameworks for building robust computer vision systems.",
    link: "#",
  },
  {
    title: "ROS Integration for Beginners",
    image: "https://source.unsplash.com/400x250/?robotics,ros",
    excerpt:
      "Learn how to integrate your drone project with ROS and automate sensor data processing.",
    link: "#",
  },
];

export default function Blog() {
  return (
    <Box sx={{ bgcolor: "#242936", py: 7 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#ffd600", fontWeight: 800, mb: 5 }}
        >
          My <span style={{ color: "#fa3757" }}>Blog</span>
        </Typography>

        <Grid container spacing={4}>
          {blogPosts.map((post, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card
                sx={{
                  bgcolor: "#1b1e28",
                  color: "#fff",
                  borderRadius: 3,
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 8px 24px rgba(255, 214, 0, 0.3)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ color: "#ffd600", mb: 1 }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#ddd", mb: 2 }}>
                    {post.excerpt}
                  </Typography>
                  <Button
                    size="small"
                    variant="outlined"
                    href={post.link}
                    sx={{
                      borderColor: "#fa3757",
                      color: "#fa3757",
                      fontWeight: 600,
                      "&:hover": {
                        bgcolor: "#fa3757",
                        color: "#fff",
                      },
                    }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
