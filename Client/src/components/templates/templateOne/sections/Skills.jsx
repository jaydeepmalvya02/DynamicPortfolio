// src/components/templateOne/Skills.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Divider,
  LinearProgress,
} from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import SchoolIcon from "@mui/icons-material/School";
import VerifiedIcon from "@mui/icons-material/Verified";

const iconMap = {
  star: <StarIcon sx={{ color: "#ffd600" }} />,
  school: <SchoolIcon sx={{ color: "#fa3757" }} />,
  verified: <VerifiedIcon sx={{ color: "#44d600" }} />,
};

export default function Skills({ profile }) {
    const { skills } = profile;
  return (
    <Box sx={{ bgcolor: "#242936", py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#ffe066", fontWeight: 900, mb: 5 }}
        >
          My <span style={{ color: "#fa3757" }}>Skills</span>
        </Typography>

        <Grid container spacing={3}>
          {skills.map((skill, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card
                elevation={0}
                sx={{
                  bgcolor: "#2c3143",
                  color: "#fff",
                  borderRadius: 4,
                  px: 2,
                  py: 3,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 20px rgba(255, 214, 0, 0.25)",
                  },
                }}
              >
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                    <Box fontSize={32}>{iconMap[skill.icon]}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {skill.title}
                    </Typography>
                  </Stack>
                  <Divider sx={{ my: 1.5, bgcolor: "#3f445e" }} />
                  <Typography variant="body2" sx={{ color: "#ddd", mb: 1 }}>
                    {skill.details.join(" | ")}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      height: 8,
                      borderRadius: 6,
                      backgroundColor: "#444857",
                      ".MuiLinearProgress-bar": {
                        backgroundColor: "#ffe066",
                      },
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
