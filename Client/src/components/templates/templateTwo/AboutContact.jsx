// src/components/templateTwo/AboutContact.jsx

import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Divider,
  Avatar,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function AboutContact({
  about,
  highlights,
  email,
  phone,
  name,
  title,
  image = "",
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        px: 2,
        py: 5,
        bgcolor: "#0f111a",
        gap: 3,
      }}
    >
      {/* Yellow Contact Card */}
      <Box flex={1}>
        <Card
          sx={{
            bgcolor: "#ffd600",
            color: "#232323",
            borderRadius: 3,
            p: 3,
            textAlign: "center",
            transition: "all 0.3s ease",
            ":hover": {
              boxShadow: 8,
              transform: "translateY(-4px)",
              bgcolor: "#fff8e1",
            },
          }}
        >
          <Avatar
            src={image}
            sx={{
              width: 64,
              height: 64,
              mx: "auto",
              mb: 1,
              border: "2px solid #fa3757",
            }}
          />
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 700, color: "#fa3757" }}
          >
            {name}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 600, mb: 2 }}>
            {title}
          </Typography>

          <Divider sx={{ bgcolor: "#fa3757", opacity: 0.3, mb: 2 }} />

          <Stack spacing={1}>
            <Chip
              icon={<MailOutlineIcon />}
              label={email}
              variant="outlined"
              sx={{
                bgcolor: "#fa3757",
                color: "#fff",
                fontWeight: 600,
                ":hover": {
                  bgcolor: "#232323",
                  color: "#ffd600",
                },
              }}
            />
            <Chip
              icon={<PhoneIphoneIcon />}
              label={phone}
              variant="outlined"
              sx={{
                bgcolor: "#232323",
                color: "#ffd600",
                fontWeight: 600,
                ":hover": {
                  bgcolor: "#fa3757",
                  color: "#fff",
                },
              }}
            />
          </Stack>
        </Card>
      </Box>

      {/* About Section */}
      <Box flex={2}>
        <Card
          sx={{
            bgcolor: "#1a1d2e",
            color: "#fff",
            borderRadius: 3,
            p: 3,
            transition: "box-shadow .3s",
            ":hover": { boxShadow: 10 },
          }}
          elevation={0}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, color: "#ffd600", mb: 1 }}
          >
            About{" "}
            <span style={{ color: "#fa3757" }}>{name?.split(" ")[0]}</span>
          </Typography>
          <Typography sx={{ color: "#d1d1d1", mb: 2 }}>
            {Array.isArray(about) ? about.join(" ") : about}
          </Typography>

          <Divider sx={{ bgcolor: "#ffd600", opacity: 0.4 }} />

          <Box mt={2}>
            {highlights?.map((h, i) => (
              <Chip
                key={i}
                icon={<EmojiEventsIcon sx={{ color: "#ffb400" }} />}
                label={h}
                color="warning"
                sx={{
                  m: 0.5,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "transform .25s, box-shadow .25s",
                  ":hover": {
                    transform: "scale(1.07)",
                    boxShadow: 3,
                    bgcolor: "#ffd600",
                    color: "#181b26",
                  },
                }}
                variant={i % 2 === 0 ? "filled" : "outlined"}
              />
            ))}
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
