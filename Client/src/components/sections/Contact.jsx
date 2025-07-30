import React, { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import { Box, Typography, Grid, Paper, TextField, Button } from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = () => {
  const { formData } = useContext(PortfolioContext);
  const { contact, email, contactMessage } = formData;

  return (
    <Box sx={{ py: 8, backgroundColor: "#fff" }}>
      <Box textAlign="center" mb={5}>
        <Typography variant="h4" component="h2" color="primary" gutterBottom>
          <span style={{ color: "#1976d2" }}>Get in Touch</span>
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Let’s connect and collaborate!
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
            <Box display="flex" alignItems="center" gap={2} mb={2}>
              <EmailIcon color="primary" />
              <Typography>{email || "Not provided"}</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={2} mb={2}>
              <PhoneIcon color="primary" />
              <Typography>{contact || "Not provided"}</Typography>
            </Box>

            {contactMessage && (
              <Box mt={3}>
                <Typography variant="subtitle1" gutterBottom>
                  Message
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ whiteSpace: "pre-wrap" }}
                >
                  {contactMessage}
                </Typography>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
