import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        py: 2,
        px: 2,
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? '#f1f1f1' : '#2c2c2c',
        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)', // Optional: Adds a subtle shadow
      }}
    >
      <Typography variant="body1" align="center">
        © {new Date().getFullYear()} Your Company Name
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;



