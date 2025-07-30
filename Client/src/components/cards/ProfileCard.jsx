import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Chip,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfileCard = ({ profile }) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/portfolio/${profile.id}`);
  };

  return (
    <Card sx={{ borderRadius: 3, p: 2, textAlign: "center", minWidth: 260 }}>
      <Avatar
        src={profile.image}
        alt={profile.name}
        sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
      />
      <Typography variant="h6">{profile.name}</Typography>
      <Typography variant="body2" color="text.secondary">
        {profile.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {profile.location}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        ⭐ {profile.rating} | {profile.experience}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {profile.projects} Projects
      </Typography>
      <Box
        sx={{
          mt: 1,
          display: "flex",
          flexWrap: "wrap",
          gap: 0.5,
          justifyContent: "center",
        }}
      >
        {profile.tags.map((tag, i) => (
          <Chip label={tag} key={i} size="small" />
        ))}
      </Box>
      <Button
        variant="contained"
        sx={{ mt: 2 }}
        fullWidth
        onClick={handleContactClick}
      >
        Contact
      </Button>
    </Card>
  );
};

export default ProfileCard;
