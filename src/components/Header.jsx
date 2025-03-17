import React from 'react'
import {Box,Typography} from '@mui/material'

export default function Header() {
  return (
    <Box sx={{
      width: { xs: '80%', sm: '90%', md: '95%', lg: '100%' }, 
      backgroundColor:'pink'}}> 
    <Typography sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }} variant="h4" gutterBottom>
        🌤 Weather App 
      </Typography></Box>
      )
}
