// src/components/Sidebar.js
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Typography from "@mui/material/Typography";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState); // Toggle open/close state
  };

  const menuItems = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Profile", icon: <AccountCircleIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
    { text: "Logout", icon: <LogoutIcon /> },
  ];

  return (
    <>
      {/* Toggle Button */}
      <IconButton
        color="inherit"
        edge="start"
        onClick={toggleDrawer} // Toggle the sidebar
        sx={{
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: 1300, // Above other elements
          backgroundColor: "#1976d2",
          color: "white",
          "&:hover": {
            backgroundColor: "#115293",
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer} // Close on backdrop click
      >
        <Box
          sx={{
            width: 250,
            bgcolor: "#f9f9f9",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
          role="presentation"
        >
          {/* Menu Items */}
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={toggleDrawer}>
                  <ListItemIcon sx={{ color: "#1976d2" }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />

          {/* Additional Links */}
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={toggleDrawer}>
                <ListItemText primary="Help" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={toggleDrawer}>
                <ListItemText primary="Contact Us" />
              </ListItemButton>
            </ListItem>
          </List>

          <Box
            sx={{
              marginTop: "auto",
              padding: "10px",
              textAlign: "center",
              bgcolor: "#e0e0e0",
              borderTop: "1px solid #ccc",
            }}
          >
            <Typography variant="body2" color="textSecondary">
              © 2025 My Web App
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
