import React, { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const Portfolio = () => {
  const { formData } = useContext(PortfolioContext);
  const projects = formData.projects || [];

  return (
    <Box sx={{ py: 8, backgroundColor: "#f5f7fa" }}>
      <Box textAlign="center" mb={5}>
        <Typography variant="h4" component="h2" color="primary" gutterBottom>
          My <span style={{ color: "#1976d2" }}>Portfolio</span>
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Projects I’ve worked on
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={4}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >
                {project.image && (
                  <CardMedia
                    component="img"
                    height="180"
                    image={project.image}
                    alt={project.name}
                  />
                )}
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
                {project.link && (
                  <CardActions>
                    <Button
                      size="small"
                      href={project.link}
                      target="_blank"
                      endIcon={<LaunchIcon />}
                    >
                      Visit
                    </Button>
                  </CardActions>
                )}
              </Card>
            </Grid>
          ))
        ) : (
          <Typography textAlign="center" color="textSecondary">
            No projects to show.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};
export default Portfolio;
