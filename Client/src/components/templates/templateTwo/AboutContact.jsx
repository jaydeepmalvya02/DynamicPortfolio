import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Divider,
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
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 3,
        bgcolor: "#181b26",
        px: { xs: 2, md: 8 },
        py: 5,
      }}
    >
      {/* About */}
      <Box flex={2}>
        <Card
          sx={{
            bgcolor: "#23253a",
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
            About <span style={{ color: "#fa3757" }}>{name.split(" ")[0]}</span>
          </Typography>
          <Typography sx={{ color: "#d1d1d1", mb: 2 }}>{about}</Typography>
          <Divider sx={{ bgcolor: "#ffd600", opacity: 0.4 }} />
          <Box mt={2}>
            {highlights.map((h, i) => (
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

      {/* Contact */}
      <Box flex={1} display="flex" alignItems="flex-start" minWidth={250}>
        <Card
          sx={{
            bgcolor: "#ffd600",
            color: "#23253a",
            borderRadius: 3,
            p: 3,
            ml: "auto",
            transition: "box-shadow .3s, transform .3s",
            ":hover": {
              boxShadow: 12,
              transform: "translateY(-4px) scale(1.03)",
              bgcolor: "#fffde7",
            },
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
            Contact
          </Typography>
          <Stack spacing={1.5}>
            <Chip
              icon={<MailOutlineIcon />}
              label={email}
              sx={{
                fontWeight: 600,
                bgcolor: "#fa3757",
                color: "#fff",
                ":hover": {
                  bgcolor: "#ffd600",
                  color: "#23253a",
                  boxShadow: 2,
                },
              }}
              clickable
            />
            <Chip
              icon={<PhoneIphoneIcon />}
              label={phone}
              sx={{
                fontWeight: 600,
                bgcolor: "#23253a",
                color: "#ffd600",
                ":hover": { bgcolor: "#fa3757", color: "#fff", boxShadow: 3 },
              }}
              clickable
            />
          </Stack>
        </Card>
      </Box>
    </Box>
  );
}
