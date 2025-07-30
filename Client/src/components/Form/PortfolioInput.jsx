import React, { useState, useContext, useEffect } from "react";
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
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { PortfolioContext } from "../../context/PortfolioContext";
import { useNavigate } from "react-router-dom";

const steps = [
  "Basic Info",
  "About & Highlights",
  "Skills",
  "Services",
  "Gallery & Contact",
];

const PortfolioInput = () => {
  const { formData, setFormData } = useContext(PortfolioContext);
  const [activeStep, setActiveStep] = useState(0);
  const [input, setInput] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const template = localStorage.getItem("selectedTemplate");
    if (template) {
      setFormData((prev) => ({ ...prev, template }));
    }
  }, [setFormData]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleArrayAdd = (key, value) => {
    if (!value.trim()) return;
    setFormData({
      ...formData,
      [key]: [...(formData[key] || []), value.trim()],
    });
  };

  const handleArrayRemove = (key, index) => {
    const updated = [...(formData[key] || [])];
    updated.splice(index, 1);
    setFormData({ ...formData, [key]: updated });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    const profile = {
      id: Date.now(),
      name: formData.name || "",
      title: formData.title || "",
      location: formData.location || "",
      experience: formData.experience || "",
      rating: Number(formData.rating || 0),
      projects: Number(formData.projects || 0),
      tags: formData.tags || [],
      image: formData.image || "",
      about: formData.about || [],
      highlights: formData.highlights || [],
      skills: formData.skills || [],
      services: formData.services || [],
      gallery: formData.gallery || [],
      email: formData.email || "",
      phone: formData.phone || "",
      template: formData.template || "TemplateOne",
    };

    localStorage.setItem("userProfile", JSON.stringify(profile));
    navigate("/preview");
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <>
            {[
              "name",
              "title",
              "location",
              "experience",
              "rating",
              "projects",
            ].map((field) => (
              <TextField
                key={field}
                fullWidth
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                name={field}
                type={
                  field === "rating" || field === "projects" ? "number" : "text"
                }
                value={formData[field] || ""}
                onChange={handleChange}
                sx={{ my: 1 }}
              />
            ))}
            <TextField
              fullWidth
              type="file"
              onChange={handleImageUpload}
              sx={{ my: 1 }}
            />
            <TextField
              fullWidth
              label="Add Tag"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleArrayAdd("tags", e.target.value);
                  e.target.value = "";
                }
              }}
              sx={{ my: 1 }}
            />
            <Stack direction="row" spacing={1}>
              {(formData.tags || []).map((tag, i) => (
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
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleArrayAdd("about", e.target.value);
                  e.target.value = "";
                }
              }}
              sx={{ my: 1 }}
            />
            <Stack spacing={1}>
              {(formData.about || []).map((line, i) => (
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
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleArrayAdd("highlights", e.target.value);
                  e.target.value = "";
                }
              }}
              sx={{ my: 3 }}
            />
            <Stack spacing={1}>
              {(formData.highlights || []).map((h, i) => (
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
            <TextField
              fullWidth
              label="Skill Title"
              value={input.title || ""}
              onChange={(e) => setInput({ ...input, title: e.target.value })}
              sx={{ my: 1 }}
            />
            <TextField
              select
              fullWidth
              label="Icon"
              value={input.icon || ""}
              onChange={(e) => setInput({ ...input, icon: e.target.value })}
              sx={{ my: 1 }}
            >
              <MenuItem value="star">Star</MenuItem>
              <MenuItem value="school">School</MenuItem>
              <MenuItem value="verified">Verified</MenuItem>
            </TextField>
            <TextField
              fullWidth
              label="Add Detail"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  const detail = e.target.value.trim();
                  if (detail) {
                    setInput({
                      ...input,
                      details: [...(input.details || []), detail],
                    });
                    e.target.value = "";
                  }
                }
              }}
              sx={{ my: 1 }}
            />
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {(input.details || []).map((d, i) => (
                <Chip
                  key={i}
                  label={d}
                  onDelete={() => {
                    const updated = [...input.details];
                    updated.splice(i, 1);
                    setInput({ ...input, details: updated });
                  }}
                />
              ))}
            </Stack>
            <TextField
              type="number"
              fullWidth
              label="Proficiency (%)"
              value={input.level || ""}
              onChange={(e) => setInput({ ...input, level: e.target.value })}
              sx={{ my: 1 }}
            />
            <Button
              startIcon={<AddIcon />}
              onClick={() => {
                const { title, icon, details, level } = input;
                if (title && icon && details?.length && level) {
                  const skill = {
                    title,
                    icon,
                    details,
                    level: parseInt(level),
                  };
                  setFormData({
                    ...formData,
                    skills: [...(formData.skills || []), skill],
                  });
                  setInput({});
                }
              }}
              sx={{ mt: 2 }}
            >
              Add Skill
            </Button>
            <Stack spacing={1} mt={2}>
              {(formData.skills || []).map((s, i) => (
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
              value={input.serviceTitle || ""}
              onChange={(e) =>
                setInput({ ...input, serviceTitle: e.target.value })
              }
              sx={{ my: 1 }}
            />
            <TextField
              fullWidth
              label="Add Service Detail"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  const detail = e.target.value.trim();
                  if (detail) {
                    setInput({
                      ...input,
                      serviceDetails: [...(input.serviceDetails || []), detail],
                    });
                    e.target.value = "";
                  }
                }
              }}
              sx={{ my: 1 }}
            />
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {(input.serviceDetails || []).map((d, i) => (
                <Chip
                  key={i}
                  label={d}
                  onDelete={() => {
                    const updated = [...input.serviceDetails];
                    updated.splice(i, 1);
                    setInput({ ...input, serviceDetails: updated });
                  }}
                />
              ))}
            </Stack>
            <Button
              onClick={() => {
                if (input.serviceTitle && input.serviceDetails?.length) {
                  const service = {
                    title: input.serviceTitle,
                    details: input.serviceDetails,
                  };
                  setFormData({
                    ...formData,
                    services: [...(formData.services || []), service],
                  });
                  setInput({});
                }
              }}
              sx={{ mt: 2 }}
            >
              Add Service
            </Button>
            <Stack spacing={1} mt={2}>
              {(formData.services || []).map((s, i) => (
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
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleArrayAdd("gallery", e.target.value);
                  e.target.value = "";
                }
              }}
              sx={{ my: 1 }}
            />
            <Stack spacing={1}>
              {(formData.gallery || []).map((g, i) => (
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
              value={formData.email || ""}
              onChange={handleChange}
              sx={{ mt: 2 }}
            />
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
              sx={{ mt: 2 }}
            />
            <TextField
              select
              fullWidth
              label="Template"
              name="template"
              value={formData.template || ""}
              onChange={handleChange}
              sx={{ mt: 2 }}
              disabled
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
          onClick={() => setActiveStep((prev) => prev - 1)}
          sx={{ mr: 2 }}
        >
          Back
        </Button>
        {activeStep < steps.length - 1 ? (
          <Button
            variant="contained"
            onClick={() => setActiveStep((prev) => prev + 1)}
          >
            Next
          </Button>
        ) : (
          <Button variant="contained" color="success" onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default PortfolioInput;
