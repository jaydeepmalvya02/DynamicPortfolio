
import React, { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import { Box, Typography, Grid, Paper, Avatar, Divider } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Testimonials = () => {
  const { formData } = useContext(PortfolioContext);
  const testimonials = formData.testimonials || [];

  return (
    <Box sx={{ py: 8, backgroundColor: "#ffffff" }}>
      <Box textAlign="center" mb={5}>
        <Typography variant="h4" component="h2" color="primary" gutterBottom>
          What <span style={{ color: "#1976d2" }}>Clients Say</span>
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Testimonials from satisfied clients
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {testimonials.length > 0 ? (
          testimonials.map((item, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  height: "100%",
                  position: "relative",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <FormatQuoteIcon
                  sx={{ fontSize: 40, color: "grey.300", mb: 1 }}
                />
                <Typography variant="body1" color="textSecondary" mb={2}>
                  "{item.quote}"
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar>{item.name?.charAt(0)}</Avatar>
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {item.name}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {item.company || "Client"}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))
        ) : (
          <Typography textAlign="center" color="textSecondary">
            No testimonials yet.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Testimonials;
