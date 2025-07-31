// src/components/templateTwo/Skills.jsx
import React from "react";
import {
  Box,
  Typography,
  Card,
  Stack,
  LinearProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TimelineDot from "@mui/lab/TimelineDot";
import StarIcon from "@mui/icons-material/Star";
import SchoolIcon from "@mui/icons-material/School";
import VerifiedIcon from "@mui/icons-material/Verified";

const iconMap = {
  star: <StarIcon sx={{ color: "#ffd600" }} />,
  school: <SchoolIcon sx={{ color: "#fa3757" }} />,
  verified: <VerifiedIcon sx={{ color: "#44d600" }} />,
};

export default function Skills({ skills }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ bgcolor: "#101321", py: 8, px: { xs: 2, md: 10 } }}>
      <Typography
        variant="h5"
        align="center"
        sx={{
          color: "#fff",
          fontWeight: 700,
          mb: 6,
          "& span": { color: "#fa3757" },
        }}
      >
        My <span>Skills</span>
      </Typography>

      <Box
        sx={{
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "50%",
            width: "4px",
            bgcolor: "#ffd600",
            transform: "translateX(-50%)",
          },
        }}
      >
        <Stack spacing={5}>
          {skills.map((s, i) => {
            const isLeft = i % 2 === 0;

            return (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  flexDirection: isMobile
                    ? "column"
                    : isLeft
                    ? "row"
                    : "row-reverse",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <Box flex={1} />
                <Card
                  sx={{
                    bgcolor: "#181b26",
                    color: "#fff",
                    px: 3,
                    py: 2,
                    width: { xs: "100%", md: 420 },
                    borderRadius: 3,
                    boxShadow: 4,
                    position: "relative",
                    zIndex: 1,
                    transition: "transform .3s, box-shadow .3s",
                    ":hover": {
                      transform: "translateY(-4px) scale(1.03)",
                      boxShadow: 8,
                    },
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                    <TimelineDot sx={{ bgcolor: "#fa3757" }}>
                      {iconMap[s.icon] || <StarIcon />}
                    </TimelineDot>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {s.title}
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: "#ffd600", fontSize: 14, mb: 1 }}>
                    {Array.isArray(s.details)
                      ? s.details.join(" | ")
                      : s.details}
                  </Typography>
                  <LinearProgress
                    value={s.level}
                    variant="determinate"
                    sx={{
                      height: 8,
                      bgcolor: "#23253a",
                      ".MuiLinearProgress-bar": {
                        bgcolor: "#ffd600",
                      },
                      borderRadius: 6,
                    }}
                  />
                </Card>
                <Box flex={1} />
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}
