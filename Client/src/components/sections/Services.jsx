import React, { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Avatar,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";

const Services = () => {
  const { formData } = useContext(PortfolioContext);
  const services = formData.services || [];

  return (
    <Box sx={{ py: 8, backgroundColor: "#fefefe" }}>
      <Box textAlign="center" mb={5}>
        <Typography variant="h4" component="h2" color="primary" gutterBottom>
          What I <span style={{ color: "#1976d2" }}>Offer</span>
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          My core services
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {services.length > 0 ? (
          services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={3}
                sx={{
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "primary.main" }}>
                      <WorkIcon />
                    </Avatar>
                  }
                  title={
                    <Typography variant="h6" color="primary">
                      {service.title}
                    </Typography>
                  }
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography textAlign="center" color="textSecondary">
            No services added.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Services;
    