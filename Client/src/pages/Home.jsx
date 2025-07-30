import { Grid, Container, Typography } from "@mui/material";
import mockProfiles from "../utils/mockProfile.js";
import ProfileCard from "../components/cards/ProfileCard";

const Home = () => {
  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Meet Our Professionals
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {mockProfiles.map((profile) => (
          <Grid item key={profile.id}>
            <ProfileCard profile={profile} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
