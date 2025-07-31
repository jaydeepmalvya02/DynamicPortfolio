// src/components/templateOne/Services.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
} from "@mui/material";

export default function Services({ profile }) {
  const { services } = profile;
  return (
    <Box sx={{ bgcolor: "#222", py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#ffe066", fontWeight: 900, mb: 4 }}
        >
          My <span style={{ color: "#ff1744" }}>Services</span>
        </Typography>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: 4,
                  bgcolor: "#ffd600",
                  color: "#232323",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 8px 24px rgba(255, 214, 0, 0.5)",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mb: 1, color: "#232323" }}
                  >
                    {service.title}
                  </Typography>
                  <List dense>
                    {service.details.map((detail, i) => (
                      <ListItem
                        key={i}
                        sx={{ pl: 0, fontSize: 14, color: "#333" }}
                      >
                        • {detail}
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
