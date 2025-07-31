// src/components/templateOne/Contact.jsx
import React from "react";
import { Box, Typography, Container, Stack, Chip } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

// You can optionally replace this with dynamic props later.
const email = "jaydeep@example.com";
const phone = "+91 88390 4085";

export default function Contact() {
  return (
    <Box sx={{ bgcolor: "#1b1e28", py: 6 }}>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#ffb300", fontWeight: 900, mb: 3 }}
        >
          Get In <span style={{ color: "#fa3757" }}>Touch</span>
        </Typography>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          flexWrap="wrap"
        >
          <Chip
            icon={<EmailIcon />}
            label={email}
            color="primary"
            sx={{
              fontWeight: 600,
              bgcolor: "#fa3757",
              color: "#fff",
              px: 2,
              ":hover": {
                bgcolor: "#ffd600",
                color: "#1b1e28",
                boxShadow: 2,
              },
            }}
            clickable
          />
          <Chip
            icon={<PhoneIcon />}
            label={phone}
            sx={{
              fontWeight: 600,
              bgcolor: "#23253a",
              color: "#ffd600",
              px: 2,
              ":hover": {
                bgcolor: "#fa3757",
                color: "#fff",
                boxShadow: 3,
              },
            }}
            clickable
          />
        </Stack>
      </Container>
    </Box>
  );
}
