// src/components/templateOne/AboutMe.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Chip,
  Divider,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function AboutMe({ profile }) {
    const { about, highlights, } = profile;
  return (
    <Box sx={{ bgcolor: "#ffe066", color: "#181b26", py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            textAlign: "center",
            mb: 5,
            color: "#181b26",
          }}
        >
          About <span style={{ color: "#fa3757" }}>Me</span>
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={5}
          justifyContent="space-between"
        >
          {/* About Lines */}
          <Box flex={1}>
            <Typography component="ul" sx={{ fontSize: 18, pl: 2 }}>
              {about.map((line, i) => (
                <li key={i} style={{ marginBottom: 8 }}>
                  {line}
                </li>
              ))}
            </Typography>
          </Box>

          {/* Highlights */}
          <Box flex={1}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Highlights
            </Typography>
            <Divider sx={{ bgcolor: "#fa3757", mb: 2 }} />
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {highlights.map((tag, i) => (
                <Chip
                  key={i}
                  label={tag}
                  icon={<EmojiEventsIcon />}
                  sx={{
                    mb: 1,
                    bgcolor: "#fa3757",
                    color: "#fff",
                    fontWeight: 600,
                    "&:hover": {
                      bgcolor: "#181b26",
                      color: "#ffd600",
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
