import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Card,
  CardContent,
  Avatar,
  Chip,
  Divider,
  Grid,
  Fade,
  Slide,
  Grow,
} from "@mui/material";
import { useParams } from "react-router-dom";
import mockProfiles from "../../utils/mockProfile";

import StarIcon from "@mui/icons-material/Star";
import SchoolIcon from "@mui/icons-material/School";
import VerifiedIcon from "@mui/icons-material/Verified";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { yellow } from "@mui/material/colors";

const TemplateOne = ({ profile: propProfile }) => {
  const { id } = useParams();
  const [profile, setProfile] = useState(propProfile || null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!propProfile && id) {
      const found = mockProfiles.find((p) => p.id === parseInt(id));
      setProfile(found);
    }
    const timeout = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timeout);
  }, [id, propProfile]);

  if (!profile)
    return (
      <Box sx={{ p: 5 }}>
        <Typography align="center" variant="h6">
          Profile not found.
        </Typography>
      </Box>
    );

  return (
    <Box sx={{ bgcolor: yellow[700], minHeight: "100vh" }}>
      {/* --- Header --- */}
      <Box
        sx={{
          bgcolor: yellow[700],
          color: "#222",
          py: 4,
          borderBottom: "2px solid #ff9800",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 900 }}>
            {profile.name.split(" ")[0]}{" "}
            <span style={{ color: "crimson" }}>
              {profile.name.split(" ")[1]}
            </span>
          </Typography>
          <Typography variant="subtitle1">{profile.title}</Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            {profile.location} | ⭐ {profile.rating} | {profile.experience}
          </Typography>
        </Container>
      </Box>

      {/* --- About Section --- */}
      <Box sx={{ bgcolor: "#212432", color: "#fff", py: 6 }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            sx={{ color: "#ffe066", fontWeight: 800, mb: 3 }}
          >
            About <span style={{ color: "#ff5252" }}>Me</span>
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            alignItems="center"
          >
            <Box sx={{ minWidth: 180 }}>
              <Grow in={show} timeout={900}>
                <Avatar
                  src={profile.image}
                  sx={{
                    width: 180,
                    height: 180,
                    border: "4px solid #ffb300",
                    boxShadow: 4,
                    mb: 2,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
              </Grow>
              <Button
                variant="contained"
                color="warning"
                sx={{
                  mt: 1,
                  borderRadius: 8,
                  "&:hover": {
                    transform: "scale(1.05)",
                    backgroundColor: "#ffa000",
                  },
                }}
              >
                Download Resume
              </Button>
            </Box>
            <Box>
              <Typography component="ul" sx={{ fontSize: 18 }}>
                {profile.about.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </Typography>
              <Stack direction="row" spacing={1} mt={2}>
                {profile.highlights.map((h, i) => (
                  <Chip key={i} label={h} color="primary" />
                ))}
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* --- Skills --- */}
      <Box sx={{ bgcolor: "#242936", py: 7 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            sx={{ color: "#ffb300", fontWeight: 900, mb: 5 }}
          >
            My <span style={{ color: "#ef5350" }}>Skills</span>
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {profile.skills.map((item, idx) => (
              <Grid item xs={12} md={4} key={item.title}>
                <Slide in={show} direction="up" timeout={700 + idx * 160}>
                  <Card
                    sx={{
                      bgcolor: "#2c3143",
                      color: "#fff",
                      borderRadius: 4,
                      boxShadow: 5,
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 10px 25px rgba(255, 193, 7, 0.3)",
                      },
                    }}
                  >
                    <CardContent>
                      <Stack direction="row" spacing={2}>
                        <Box fontSize={36}>
                          {item.icon === "star" ? (
                            <StarIcon color="warning" />
                          ) : item.icon === "school" ? (
                            <SchoolIcon color="info" />
                          ) : (
                            <VerifiedIcon color="success" />
                          )}
                        </Box>
                        <Typography variant="h6">{item.title}</Typography>
                      </Stack>
                      <Divider sx={{ my: 2, bgcolor: "#485067" }} />
                      <ul>
                        {item.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                      <Box
                        sx={{
                          width: "100%",
                          height: 8,
                          bgcolor: "#424567",
                          borderRadius: 5,
                          mt: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: `${item.level}%`,
                            height: "100%",
                            bgcolor: "#ffe066",
                            borderRadius: 5,
                          }}
                        />
                      </Box>
                    </CardContent>
                  </Card>
                </Slide>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* --- Services --- */}
      <Box sx={{ bgcolor: "#222", py: 8 }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            align="center"
            sx={{ color: "#ffe066", fontWeight: 800, mb: 4 }}
          >
            My <span style={{ color: "#ff1744" }}>Services</span>
          </Typography>
          <Grid container spacing={3}>
            {profile.services.map((s, i) => (
              <Grid item xs={12} md={4} key={s.title}>
                <Fade in={show} timeout={700 + i * 200}>
                  <Card
                    sx={{
                      borderRadius: 4,
                      bgcolor: "#ffd600",
                      color: "#232323",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0px 6px 24px rgba(255, 214, 0, 0.6)",
                      },
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {s.title}
                      </Typography>
                      <ul>
                        {s.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* --- Gallery --- */}
      <Box sx={{ bgcolor: "#242936", py: 7 }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            align="center"
            sx={{ color: "#ffe066", fontWeight: 800, mb: 3 }}
          >
            Photo <span style={{ color: "#ff5252" }}>Gallery</span>
          </Typography>
          <Grid container spacing={3}>
            {profile.gallery.map((img, i) => (
              <Grid item xs={6} md={3} key={img}>
                <Grow in={show} timeout={800 + i * 200}>
                  <Box
                    sx={{
                      width: "100%",
                      height: 120,
                      borderRadius: 3,
                      backgroundImage: `url(${img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      boxShadow: 3,
                      "&:hover": {
                        transform: "scale(1.07)",
                      },
                    }}
                  />
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* --- Contact --- */}
      <Box sx={{ bgcolor: "#1b1e28", py: 6 }}>
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            align="center"
            sx={{ color: "#ffb300", fontWeight: 900, mb: 2 }}
          >
            Get In <span style={{ color: "#ff5252" }}>Touch</span>
          </Typography>
          <Stack spacing={2} direction="row" justifyContent="center">
            <Chip icon={<EmailIcon />} label={profile.email} color="primary" />
            <Chip icon={<PhoneIcon />} label={profile.phone} color="success" />
          </Stack>
        </Container>
      </Box>

      {/* --- Footer --- */}
      <Box
        sx={{
          bgcolor: "#131419",
          color: "#ddd",
          py: 4,
          borderTop: "2px solid #ff9800",
        }}
      >
        <Container>
          <Typography align="center" fontSize={14}>
            © {new Date().getFullYear()} DroneTV | {profile.name}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default TemplateOne;
