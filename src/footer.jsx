import React from "react";
import { Box, Typography, IconButton, Container } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? "#f1f1f1" : "#2c2c2c",
        boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
      }} 
    >
      <Container sx={{ width: "10%", padding: 0, position: "absolute" }}>
        <IconButton href="https://github.com/esealon">
          <GitHubIcon />
        </IconButton>
      </Container>
      <Container sx={{}}>
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} ESEALON
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
