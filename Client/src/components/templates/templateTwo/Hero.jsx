import { Box, Typography, Avatar, Paper } from "@mui/material";

export default function Hero({ name, title, image }) {
  return (
    <Box
      sx={{
        bgcolor: "#181b26",
        minHeight: 210,
        pt: 5,
        pb: 3,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        borderBottom: "4px solid #ffd600",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          borderRadius: "50%",
          p: 1,
          mb: 2,
          transition: "transform .3s",
          ":hover": { transform: "scale(1.06)" },
        }}
      >
        <Avatar
          src={image}
          alt={name}
          sx={{
            width: 108,
            height: 108,
            border: "4px solid #ffe066",
            boxShadow: 6,
          }}
        />
      </Paper>
      <Typography
        variant="h4"
        sx={{ color: "#ffd600", fontWeight: 900, letterSpacing: 1.1 }}
      >
        {name}
      </Typography>
      <Typography variant="h6" sx={{ color: "#fa3757", fontWeight: 700 }}>
        {title}
      </Typography>
    </Box>
  );
}
