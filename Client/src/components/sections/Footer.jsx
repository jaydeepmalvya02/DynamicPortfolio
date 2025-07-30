import { Box, Typography, Stack, Button } from "@mui/material";

export default function Footer({ name }) {
  return (
    <Box
      sx={{
        bgcolor: "#181b26",
        color: "#eee",
        py: 4,
        borderTop: "4px solid #ffd600",
        mt: 5,
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        px={{ xs: 2, md: 8 }}
      >
        <Typography variant="body1" sx={{ fontWeight: 700, color: "#ffd600" }}>
          {name}'s Portfolio
        </Typography>
        <Stack direction="row" spacing={2}>
          {["About", "Skills", "Contact"].map((txt, i) => (
            <Button
              key={txt}
              variant="outlined"
              sx={{
                color: "#ffd600",
                borderColor: "#ffd600",
                fontWeight: 600,
                ":hover": {
                  bgcolor: "#ffd600",
                  color: "#191c29",
                  borderColor: "#ffd600",
                  boxShadow: 4,
                  transform: "translateY(-2px) scale(1.08)",
                },
                transition: "all .3s",
              }}
            >
              {txt}
            </Button>
          ))}
        </Stack>
        <Typography variant="caption" sx={{ color: "#dddddd", mt: 2 }}>
          © {new Date().getFullYear()} {name}
        </Typography>
      </Stack>
    </Box>
  );
}
