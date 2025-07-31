import React from "react";
import {
  Box,
  Typography,
  Card,
  Stack,
  LinearProgress,
  useTheme,
  Slide,
} from "@mui/material";
import TimelineDot from "@mui/lab/TimelineDot";
import StarIcon from "@mui/icons-material/Star";
import SchoolIcon from "@mui/icons-material/School";
import VerifiedIcon from "@mui/icons-material/Verified";

// Icon mapping
const iconMap = {
  star: <StarIcon sx={{ color: "#ffd600" }} />,
  school: <SchoolIcon sx={{ color: "#fa3757" }} />,
  verified: <VerifiedIcon sx={{ color: "#44d600" }} />,
};

export default function SkillsTimeline({ skills }) {
  const theme = useTheme();

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
    <Box
      sx={{
        bgcolor: "#0f111a",
        py: 10,
        px: { xs: 2, md: 6 },
        position: "relative",
      }}
    >
      {/* Section Heading */}
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#ffd600", fontWeight: 800, mb: 6 }}
      >
        Top <span style={{ color: "#fa3757" }}>Skills</span>
      </Typography>

      {/* Central Vertical Timeline Line */}
      <Box
        sx={{
          position: "absolute",
          top: 100,
          bottom: 100,
          left: { xs: 24, md: "50%" },
          transform: { md: "translateX(-1px)" },
          width: "2px",
          bgcolor: "#ffd600",
          zIndex: 0,
        }}
      />

      <Stack spacing={8} zIndex={2}>
        {skills.map((s, i) => {
          const isLeft = i % 2 === 0;
          const align = isLeft ? "flex-start" : "flex-end";
          const direction = isLeft ? "left" : "right";

          return (
            <Slide
              key={s.title}
              direction={direction}
              in
              timeout={700 + i * 200}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: align,
                  alignItems: "center",
                  flexDirection: "row",
                  px: { xs: 1, md: 4 },
                }}
              >
                <Card
                  sx={{
                    bgcolor: "#23253a",
                    color: "#fff",
                    px: 3,
                    py: 2.5,
                    width: { xs: "100%", md: "45%" },
                    borderRadius: 3,
                    boxShadow: 2,
                    position: "relative",
                    transition: "transform .3s, box-shadow .3s",
                    ":hover": {
                      boxShadow: 8,
                      transform: "scale(1.03)",
                    },
                  }}
                  elevation={0}
                >
                  <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                    <TimelineDot
                      sx={{
                        bgcolor: "#fa3757",
                        border: "3px solid #ffd600",
                        zIndex: 1,
                      }}
                    >
                      {iconMap[s.icon] || null}
                    </TimelineDot>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {s.title}
                    </Typography>
                  </Stack>

                  <Typography sx={{ color: "#ffd600", fontSize: 15, mb: 1 }}>
                    {Array.isArray(s.details)
                      ? s.details.join(" | ")
                      : s.details}
                  </Typography>

                  <LinearProgress
                    value={s.level}
                    variant="determinate"
                    sx={{
                      height: 8,
                      bgcolor: "#191c29",
                      borderRadius: 5,
                      ".MuiLinearProgress-bar": {
                        bgcolor: "#ffd600",
                        transition: "width 1s ease",
                      },
                    }}
                  />
                </Card>
              </Box>
            </Slide>
          );
        })}
      </Stack>
    </Box>
  );
}
