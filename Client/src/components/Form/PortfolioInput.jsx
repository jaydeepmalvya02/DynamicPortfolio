import React, { useState } from "react";
import {
  Box,
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
  TextField,
  Chip,
  Stack,
  IconButton,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const steps = [
  "Basic Info",
  "About & Highlights",
  "Skills",
  "Services",
  "Gallery & Contact",
];

const initialForm = {
  name: "",
  title: "",
  location: "",
  experience: "",
  rating: "",
  projects: "",
  tags: [],
  image: "",
  about: [],
  highlights: [],
  skills: [],
  services: [],
  gallery: [],
  email: "",
  phone: "",
  template: "TemplateOne",
};

const PortfolioInput = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(initialForm);
  const [input, setInput] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleArrayAdd = (key, value) => {
    if (!value.trim()) return;
    setFormData({ ...formData, [key]: [...formData[key], value.trim()] });
  };

  const handleArrayRemove = (key, index) => {
    const updated = [...formData[key]];
    updated.splice(index, 1);
    setFormData({ ...formData, [key]: updated });
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{ my: 1 }}
            />
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              sx={{ my: 1 }}
            />
            <TextField
              fullWidth
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              sx={{ my: 1 }}
            />
            <TextField
              fullWidth
              label="Experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              sx={{ my: 1 }}
            />
            <TextField
              fullWidth
              type="number"
              label="Rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              sx={{ my: 1 }}
            />
            <TextField
              fullWidth
              type="number"
              label="Projects"
              name="projects"
              value={formData.projects}
              onChange={handleChange}
              sx={{ my: 1 }}
            />
            <TextField
              fullWidth
              label="Image URL"
              name="image"
              value={formData.image}
              onChange={handleChange}
              sx={{ my: 1 }}
            />
            <TextField
              fullWidth
              label="Add Tag"
              onKeyDown={(e) =>
                e.key === "Enter" && handleArrayAdd("tags", e.target.value)
              }
              sx={{ my: 1 }}
            />
            <Stack direction="row" spacing={1}>
              {formData.tags.map((tag, i) => (
                <Chip
                  key={i}
                  label={tag}
                  onDelete={() => handleArrayRemove("tags", i)}
                />
              ))}
            </Stack>
          </>
        );

      case 1:
        return (
          <>
            <TextField
              fullWidth
              label="Add About Line"
              onKeyDown={(e) =>
                e.key === "Enter" && handleArrayAdd("about", e.target.value)
              }
              sx={{ my: 1 }}
            />
            <Stack spacing={1}>
              {formData.about.map((line, i) => (
                <Chip
                  key={i}
                  label={line}
                  onDelete={() => handleArrayRemove("about", i)}
                />
              ))}
            </Stack>

            <TextField
              fullWidth
              label="Add Highlight"
              onKeyDown={(e) =>
                e.key === "Enter" &&
                handleArrayAdd("highlights", e.target.value)
              }
              sx={{ my: 3 }}
            />
            <Stack spacing={1}>
              {formData.highlights.map((h, i) => (
                <Chip
                  key={i}
                  label={h}
                  onDelete={() => handleArrayRemove("highlights", i)}
                />
              ))}
            </Stack>
          </>
        );

      case 2:
        return (
          <>
            <Typography variant="body2" gutterBottom>
              Skill Entry (title, icon [star/school/verified], details [comma
              separated], level%)
            </Typography>
            <TextField
              fullWidth
              label="Skill Title"
              name="title"
              onChange={(e) => setInput({ ...input, title: e.target.value })}
              sx={{ my: 1 }}
            />
            <TextField
              select
              fullWidth
              label="Icon"
              name="icon"
              onChange={(e) => setInput({ ...input, icon: e.target.value })}
              sx={{ my: 1 }}
            >
              <MenuItem value="star">Star</MenuItem>
              <MenuItem value="school">School</MenuItem>
              <MenuItem value="verified">Verified</MenuItem>
            </TextField>
            <TextField
              fullWidth
              label="Details (comma-separated)"
              onChange={(e) => setInput({ ...input, details: e.target.value })}
              sx={{ my: 1 }}
            />
            <TextField
              type="number"
              fullWidth
              label="Proficiency (%)"
              onChange={(e) => setInput({ ...input, level: e.target.value })}
              sx={{ my: 1 }}
            />
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={() => {
                if (input.title && input.icon && input.details && input.level) {
                  const skill = {
                    title: input.title,
                    icon: input.icon,
                    details: input.details.split(",").map((d) => d.trim()),
                    level: parseInt(input.level),
                  };
                  setFormData({
                    ...formData,
                    skills: [...formData.skills, skill],
                  });
                  setInput({});
                }
              }}
            >
              Add Skill
            </Button>
            <Stack spacing={1} mt={2}>
              {formData.skills.map((s, i) => (
                <Chip
                  key={i}
                  label={`${s.title} (${s.level}%)`}
                  onDelete={() => handleArrayRemove("skills", i)}
                />
              ))}
            </Stack>
          </>
        );

      case 3:
        return (
          <>
            <TextField
              fullWidth
              label="Service Title"
              onChange={(e) =>
                setInput({ ...input, serviceTitle: e.target.value })
              }
              sx={{ my: 1 }}
            />
            <TextField
              fullWidth
              label="Service Details (comma separated)"
              onChange={(e) =>
                setInput({ ...input, serviceDetails: e.target.value })
              }
              sx={{ my: 1 }}
            />
            <Button
              variant="outlined"
              onClick={() => {
                if (input.serviceTitle && input.serviceDetails) {
                  const newService = {
                    title: input.serviceTitle,
                    details: input.serviceDetails
                      .split(",")
                      .map((d) => d.trim()),
                  };
                  setFormData({
                    ...formData,
                    services: [...formData.services, newService],
                  });
                  setInput({});
                }
              }}
            >
              Add Service
            </Button>
            <Stack spacing={1} mt={2}>
              {formData.services.map((s, i) => (
                <Chip
                  key={i}
                  label={s.title}
                  onDelete={() => handleArrayRemove("services", i)}
                />
              ))}
            </Stack>
          </>
        );

      case 4:
        return (
          <>
            <TextField
              fullWidth
              label="Add Gallery Image URL"
              onKeyDown={(e) =>
                e.key === "Enter" && handleArrayAdd("gallery", e.target.value)
              }
              sx={{ my: 1 }}
            />
            <Stack spacing={1}>
              {formData.gallery.map((g, i) => (
                <Chip
                  key={i}
                  label={g}
                  onDelete={() => handleArrayRemove("gallery", i)}
                />
              ))}
            </Stack>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              sx={{ mt: 2 }}
            />
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              sx={{ mt: 2 }}
            />
            <TextField
              select
              fullWidth
              label="Template"
              name="template"
              value={formData.template}
              onChange={handleChange}
              sx={{ mt: 2 }}
            >
              <MenuItem value="TemplateOne">Template One</MenuItem>
              <MenuItem value="TemplateTwo">Template Two</MenuItem>
            </TextField>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" mb={2}>
        Create Your Portfolio
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {renderStepContent()}

      <Box mt={4}>
        <Button
          disabled={activeStep === 0}
          onClick={() => setActiveStep(activeStep - 1)}
          sx={{ mr: 2 }}
        >
          Back
        </Button>
        {activeStep < steps.length - 1 ? (
          <Button
            variant="contained"
            onClick={() => setActiveStep(activeStep + 1)}
          >
            Next
          </Button>
        ) : (
          <Button
            variant="contained"
            color="success"
            onClick={() => console.log("SUBMIT:", formData)}
          >
            Submit
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default PortfolioInput;
