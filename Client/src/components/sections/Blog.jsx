import React, { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";

const Blog = () => {
  const { formData } = useContext(PortfolioContext);
  const blogs = formData.blogs || [];

  return (
    <Box sx={{ py: 8, backgroundColor: "#f5f7fa" }}>
      <Box textAlign="center" mb={5}>
        <Typography variant="h4" component="h2" color="primary" gutterBottom>
          <span style={{ color: "#1976d2" }}>Blog</span> Articles
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Insights & learnings from my journey
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {blogs.length > 0 ? (
          blogs.map((blog, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                elevation={3}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 6,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <CardActionArea sx={{ p: 2 }}>
                  <CardContent>
                    <Box display="flex" alignItems="center" gap={1} mb={1}>
                      <ArticleIcon color="action" />
                      <Typography variant="h6" color="primary">
                        {blog.title}
                      </Typography>
                    </Box>
                    {blog.summary && (
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ mt: 1 }}
                      >
                        {blog.summary}
                      </Typography>
                    )}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography textAlign="center" color="textSecondary">
            No blog articles available.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Blog;
