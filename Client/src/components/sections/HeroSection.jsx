import React from "react";
import { Container, Grid, Typography, Button, Avatar } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

const HeroSection = ({ name, title, tagline, profileImage }) => {
  return (
    <div
      style={{ backgroundColor: "#111827", color: "white", padding: "50px 0" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Text Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" gutterBottom>
              Hello, I’m{" "}
              <span style={{ color: "#F59E0B" }}>{name || "Your Name"}</span>
            </Typography>
            <Typography variant="h5" component="p" color="gray" paragraph>
              {tagline || "Your Professional Tagline or Short Bio"}
            </Typography>
            <Button
              variant="contained"
              color="warning"
              size="large"
              sx={{ mt: 3 }}
            >
              Download Resume
            </Button>
          </Grid>

          {/* Right 3D Profile Section */}
          <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
            {profileImage ? (
              <Avatar
                src={profileImage}
                alt={name}
                sx={{ width: 200, height: 200, margin: "auto", boxShadow: 3 }}
              />
            ) : (
              <Canvas style={{ height: 200 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <mesh rotation={[90, 0, 20]}>
                  <sphereGeometry args={[1, 32, 32]} />
                  <meshStandardMaterial color="#F59E0B" wireframe />
                </mesh>
                <OrbitControls enableZoom={false} />
                <Stars />
              </Canvas>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HeroSection;
