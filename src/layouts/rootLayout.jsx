import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container,Box } from '@mui/material';

const RootLayout = () => {
  return (
    
 <Box 
        sx={{ 
          width: "100vw",  
          minHeight: "100vh", 
          display: "flex", 
          background: "linear-gradient(135deg, #667eea 10%, #764ba2 100%)",
          flexDirection: "column",
          alignItems: "center", 
          justifyContent: "flex-start" 
        }}
      >
        <Header />
        <Container 
          maxWidth={false} 
          sx={{
            width: { xs: '100%', sm: '95%', md: '90%', lg: '85%' }, 
            minHeight: { xs: '85vh', sm: '82vh', md: '80vh', lg: '78vh' },
          }}
        >{/* Dynamic content */}
          <Outlet /> 
        </Container>
        <Footer />
      </Box>
    
  );
};

export default RootLayout;
