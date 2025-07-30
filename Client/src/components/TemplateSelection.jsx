import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const TemplateSelection = () => {
  const navigate = useNavigate();

  const handleSelect = (templateName) => {
    localStorage.setItem("selectedTemplate", templateName);
    navigate("/create-portfolio/form");
  };

  const templates = [
    {
      name: "TemplateOne",
      preview: "/previews/template1.png",
    },
    {
      name: "TemplateTwo",
      preview: "/previews/template2.png",
    },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" align="center" mb={4}>
        Choose Your Portfolio Template
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {templates.map((template) => (
          <Grid item xs={12} md={5} key={template.name}>
            <Card
              sx={{
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={template.preview}
                alt={template.name}
              />
              <CardContent>
                <Typography variant="h6" align="center">
                  {template.name}
                </Typography>
                <Box textAlign="center" mt={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleSelect(template.name)}
                  >
                    Use This Template
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TemplateSelection;
