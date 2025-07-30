import React, { useContext } from "react";
import { Box, Typography, Chip, Grid, Paper } from "@mui/material";
import { PortfolioContext } from "../../context/PortfolioContext";

const Skills = () => {
  const { formData } = useContext(PortfolioContext);
  const skills = formData.skills || [];

  return (
    <Box sx={{ py: 8, bgcolor: "#f5f7fa" }}>
      <Box textAlign="center" mb={5}>
        <Typography variant="h4" component="h2" color="primary" gutterBottom>
          My <span style={{ color: "#1976d2" }}>Skills</span>
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Technologies & tools I work with
        </Typography>
      </Box>

      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
              {skills.length > 0 ? (
                skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    color="primary"
                    variant="outlined"
                    sx={{ fontSize: "1rem", px: 2, py: 1 }}
                  />
                ))
              ) : (
                <Typography color="textSecondary">
                  No skills added yet.
                </Typography>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
