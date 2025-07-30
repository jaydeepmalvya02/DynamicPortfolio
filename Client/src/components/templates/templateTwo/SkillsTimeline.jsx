import React from "react";
import { Box, Typography, Card, Stack, LinearProgress } from "@mui/material";
import TimelineDot from "@mui/lab/TimelineDot";
import StarIcon from "@mui/icons-material/Star";
import SchoolIcon from "@mui/icons-material/School";
import VerifiedIcon from "@mui/icons-material/Verified";

// Map skill icon names (string) to Material UI icons
const iconMap = {
  star: <StarIcon sx={{ color: "#ffd600" }} />,
  school: <SchoolIcon sx={{ color: "#fa3757" }} />,
  verified: <VerifiedIcon sx={{ color: "#44d600" }} />,
};

export default function SkillsTimeline({ skills }) {
  if (!skills || skills.length === 0) {
    return (
      <Box bgcolor="#181b26" py={6} px={{ xs: 2, md: 8 }}>
        <Typography variant="h6" sx={{ color: "#ffd600", textAlign: "center" }}>
          No skills data to display.
        </Typography>
      </Box>
    );
  }

  return (
    <Box bgcolor="#181b26" py={6} px={{ xs: 2, md: 8 }}>
      <Typography
        variant="h5"
        sx={{ color: "#ffd600", fontWeight: 800, mb: 3, textAlign: "center" }}
      >
        Top <span style={{ color: "#fa3757" }}>Skills</span>
      </Typography>
      <Stack spacing={3} alignItems="center">
        {skills.map((s) => (
          <Card
            key={s.title}
            sx={{
              bgcolor: "#23253a",
              color: "#fff",
              px: 3,
              py: 2.5,
              width: { xs: "100%", md: 500 },
              position: "relative",
              overflow: "unset",
              borderRadius: 3,
              boxShadow: 2,
              transition: "transform .25s, box-shadow .25s",
              ":hover": {
                boxShadow: 8,
                transform: "scale(1.04) translateY(-4px)",
              },
            }}
            elevation={0}
          >
            <Stack direction="row" alignItems="center" spacing={2} mb={1}>
              <TimelineDot sx={{ bgcolor: "#fa3757" }}>
                {iconMap[s.icon] || null}
              </TimelineDot>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {s.title}
              </Typography>
            </Stack>
            <Typography sx={{ color: "#ffd600", fontSize: 15, mb: 1 }}>
              {Array.isArray(s.details) ? s.details.join(" | ") : s.details}
            </Typography>
            <LinearProgress
              value={s.level}
              variant="determinate"
              sx={{
                height: 8,
                bgcolor: "#191c29",
                ".MuiLinearProgress-bar": { bgcolor: "#ffd600" },
                borderRadius: 6,
              }}
            />
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
