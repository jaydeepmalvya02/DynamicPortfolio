// src/components/templateTwo/Hero.jsx
import { Box, Typography, Avatar, Paper, Container } from "@mui/material";

export default function Hero({ name, title, image }) {
  const firstName = name?.split(" ")[0] || "";
  const lastName = name?.split(" ")[1] || "";

  return (
    <Box
      sx={{
        bgcolor: "#ffd600",
        py: 6,
        px: 2,
        borderBottom: "4px solid #fa3757",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {/* Text */}
          <Box>
            <Typography
              variant="h5"
              sx={{ color: "#1e1e1e", fontWeight: 500, mb: 1 }}
            >
              Hello, I’m
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 900, color: "#1e1e1e" }}>
              {firstName}{" "}
              <Box component="span" sx={{ color: "#fa3757" }}>
                {lastName}
              </Box>
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, mt: 1, color: "#1e1e1e" }}
            >
              {title}
            </Typography>
          </Box>

          {/* Avatar */}
          <Paper
            elevation={6}
            sx={{
              borderRadius: "50%",
              p: 1.2,
              bgcolor: "#fff",
              transition: "transform 0.3s ease",
              ":hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Avatar
              src={image}
              alt={name}
              sx={{
                width: 130,
                height: 130,
                border: "3px solid #fa3757",
              }}
            />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
