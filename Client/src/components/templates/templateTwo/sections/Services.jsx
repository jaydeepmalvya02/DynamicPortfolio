// src/components/templateTwo/Services.jsx
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  IconButton,
  Button,
} from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import GroupIcon from "@mui/icons-material/Group";

// Map titles to icons (extend as needed)
const iconMap = {
  "Real Estate Appraisal": <BuildIcon />,
  Photography: <CameraAltIcon />,
  Training: <EmojiObjectsIcon />,
  Coaching: <GroupIcon />,
};

export default function Services({ services }) {
  return (
    <Box sx={{ bgcolor: "#ffd600", py: 10, px: { xs: 2, md: 10 } }}>
      <Typography
        variant="h5"
        align="center"
        sx={{
          fontWeight: 800,
          mb: 6,
          color: "#23253a",
          "& span": { color: "#fa3757" },
        }}
      >
        My <span>Services</span>
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map((s, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                p: 3,
                bgcolor: "#fff",
                transition: "transform 0.3s, box-shadow 0.3s",
                ":hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 8,
                },
                position: "relative",
              }}
            >
              {/* Decorative circle */}
              <Box
                sx={{
                  position: "relative",
                  top: 8,
                  left: "calc(50% - 28px)",
                  width: 40,
                  height: 40,
                  bgcolor: "#ffe066",
                  borderRadius: "50%",
                  boxShadow: "0 0 0 4px #fa3757",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconButton sx={{ color: "#23253a" }} disableRipple>
                  {iconMap[s.title] || <BuildIcon />}
                </IconButton>
              </Box>

              <CardContent sx={{ pt: 5 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#23253a",
                    textAlign: "center",
                    mb: 1.5,
                  }}
                >
                  {s.title}
                </Typography>
                {s.details?.map((point, idx) => (
                  <Typography
                    key={idx}
                    sx={{ color: "#555", fontSize: 14, mb: 0.5 }}
                  >
                    • {point}
                  </Typography>
                ))}

                <Box mt={2} textAlign="center">
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      fontWeight: 600,
                      borderColor: "#fa3757",
                      color: "#fa3757",
                      ":hover": {
                        bgcolor: "#fa3757",
                        color: "#fff",
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
