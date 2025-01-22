// src/components/Footer.js
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "#1976d2",
        color: "white",
        textAlign: "center",
        py: 1, // Padding on the y-axis
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} North 90 Project. All rights reserved.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}>
        <Link href="/privacy" color="inherit" underline="hover">
          Privacy Policy
        </Link>
        <Link href="/terms" color="inherit" underline="hover">
          Terms of Service
        </Link>
        <Link href="/contact" color="inherit" underline="hover">
          Contact Us
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
