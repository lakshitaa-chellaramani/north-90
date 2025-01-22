// src/components/RightPanel.js
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const RightPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const notifications = [
    "New message from John",
    "System update available",
    "Meeting scheduled at 3 PM",
    "Reminder: Submit report by EOD",
  ];

  return (
    <>
      {/* Toggle Button */}
      <IconButton
        color="inherit"
        edge="end"
        onClick={toggleDrawer}
        sx={{
          position: "fixed",
          top: 16,
          right: 16,
          zIndex: 1300,
          backgroundColor: "#1976d2",
          color: "white",
          "&:hover": {
            backgroundColor: "#115293",
          },
        }}
      >
        <NotificationsIcon />
      </IconButton>

      {/* Right-Side Drawer */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer} // Close on backdrop click
      >
        <Box
          sx={{
            width: 300,
            bgcolor: "#f9f9f9",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
          role="presentation"
        >
          {/* Header */}
          <Box
            sx={{
              bgcolor: "#1976d2",
              color: "white",
              padding: "16px",
              textAlign: "center",
            }}
          >
            <Typography variant="h6">Notifications</Typography>
          </Box>

          {/* Notifications List */}
          <List>
            {notifications.map((notification, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemText primary={notification} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />

          {/* Footer */}
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
              You’re all caught up!
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default RightPanel;
