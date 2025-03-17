import React from 'react'
import {
    Container,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    CircularProgress,
    Grid,
  } from "@mui/material";
  
  

export default function weatherCard({weather}) {
  return (
    <div>               
    <Card
    sx={{
      maxWidth: 400,
      mx: "auto",
      boxShadow: 4,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      borderRadius: "12px",
    }}
  >
    <CardContent sx={{ textAlign: "center" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        {weather.name}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {weather.weather[0].description}
      </Typography>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
        style={{ width: "80px" }}
      />
      <Typography variant="h6">🌡 {weather.main.temp}°C</Typography>
      <Typography variant="body1">💨 Wind: {weather.wind.speed} m/s</Typography>
      <Typography variant="body1">💧 Humidity: {weather.main.humidity}%</Typography>
    </CardContent>
  </Card>
</div>
  )
}
