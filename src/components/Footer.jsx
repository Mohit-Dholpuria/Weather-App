import React from 'react';
import { Box, Typography, Link } from '@mui/material'; // Assuming you're using Material-UI

export default function Footer() {
  return (
    <Box 
      sx={{ 
        backgroundColor: '#1976d2', // Primary color for the footer
        color: 'white',
        padding: '20px', 
        textAlign: 'center',
        width: { xs: '80%', sm: '90%', md: '95%', lg: '100%' }, 
       fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } 
      }}
    >
      <Typography variant="h6" component="div">
        Weather App
      </Typography>
      <Typography variant="body2" component="div">
        © {new Date().getFullYear()} Weather App. All rights reserved.
      </Typography>
      <Box sx={{ marginTop: '10px' }}>
        <Link href="https://github.com/your-repo" color="inherit" target="_blank" rel="noopener">
          GitHub
        </Link>
        {' | '}
        <Link href="mailto:contact@weatherapp.com" color="inherit">
          Contact Us
        </Link>
      </Box>
    </Box>
  );
}
