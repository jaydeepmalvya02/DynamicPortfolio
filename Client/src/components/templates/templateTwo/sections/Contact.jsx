// src/components/templateTwo/Contact.jsx
import React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Stack,
  Paper,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

export default function Contact({ email, phone }) {
  return (
    <Box sx={{ bgcolor: "#181b26", py: 8, px: { xs: 2, md: 8 } }}>
      <Typography
        variant="h5"
        align="center"
        sx={{
          fontWeight: 800,
          mb: 5,
          color: "#ffd600",
          "& span": { color: "#fa3757" },
        }}
      >
        Get In <span>Touch</span>
      </Typography>

      <Grid container spacing={5}>
        {/* Contact Info Section */}
        <Grid item xs={12} md={5}>
          <Paper
            sx={{
              p: 4,
              bgcolor: "#23253a",
              color: "#fff",
              borderRadius: 3,
              height: "100%",
            }}
            elevation={0}
          >
            <Typography variant="h6" sx={{ color: "#ffd600", mb: 2 }}>
              Let's talk!
            </Typography>
            <Typography sx={{ color: "#d1d1d1", mb: 3 }}>
              If you have a project in mind, just drop a message. I’ll get back
              shortly!
            </Typography>

            <Stack spacing={2}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <EmailIcon sx={{ color: "#fa3757" }} />
                <Typography>{email}</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <PhoneAndroidIcon sx={{ color: "#ffd600" }} />
                <Typography>{phone}</Typography>
              </Stack>
            </Stack>
          </Paper>
        </Grid>

        {/* Contact Form Section */}
        <Grid item xs={12} md={7}>
          <Paper
            sx={{
              p: 4,
              bgcolor: "#23253a",
              color: "#fff",
              borderRadius: 3,
            }}
            elevation={0}
          >
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    size="small"
                    InputLabelProps={{ style: { color: "#bbb" } }}
                    sx={{
                      input: { color: "#fff" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#555",
                        },
                        "&:hover fieldset": {
                          borderColor: "#ffd600",
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    size="small"
                    InputLabelProps={{ style: { color: "#bbb" } }}
                    sx={{
                      input: { color: "#fff" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#555",
                        },
                        "&:hover fieldset": {
                          borderColor: "#ffd600",
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    InputLabelProps={{ style: { color: "#bbb" } }}
                    sx={{
                      textarea: { color: "#fff" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#555",
                        },
                        "&:hover fieldset": {
                          borderColor: "#ffd600",
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#fa3757",
                      fontWeight: 700,
                      px: 4,
                      "&:hover": {
                        bgcolor: "#ffd600",
                        color: "#23253a",
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
