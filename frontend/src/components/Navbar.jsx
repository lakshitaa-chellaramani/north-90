// src/components/Navbar.js
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        {/* Logo or Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          North 90 Project
        </Typography>

        {/* Navigation Buttons */}
        <Box>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Box>
        <Box sx={{ width: "48px" }} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
