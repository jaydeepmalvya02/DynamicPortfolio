import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#FFCC00", color: "#000" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "#000" }}
        >
          PortFolio
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button component={Link} to="/">
            Home
          </Button>
          <Button
            component={Link}
            to="/create-portfolio"
            // variant="contained"
            // color="primary"
          >
            List Your Profile
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
