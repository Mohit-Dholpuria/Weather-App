import "./App.css";
import { useState, useEffect } from "react";
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
import WeatherCard from "./components/weatherCard";

const { VITE_WEATHER_API_KEY } = import.meta.env;

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [searchedWeather, setSearchedWeather] = useState(null);
  const [city, setCity] = useState("Kolkata");
  const [loading, setLoading] = useState(true);
  const [coords, setCoords] = useState({ lat: null, lon: null });

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (err) => {
        console.error("Geolocation error:", err);
      }
    );
  }, []);

  useEffect(() => {
    if (coords.lat !== null && coords.lon !== null) {
      fetchData(coords.lat, coords.lon);
    }
  }, [coords]);

  const fetchData = async (lat, lon) => {
    try {
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${VITE_WEATHER_API_KEY}&units=metric`
      );
      const json = await result.json();
      setCurrentWeather(json);
      setLoading(false);
    } catch (Err) {
      console.error("Error fetching weather:", Err);
    }
  };

  const fetchNewCityWeather = async () => {
    try {
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${VITE_WEATHER_API_KEY}&units=metric`
      );
      const json = await result.json();
      if (json.cod !== 200) {
        throw new Error(json.message);
      }
      setSearchedWeather(json);
    } catch (err) {
      console.error("Error fetching city weather:", err);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        width:'100%'
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          borderRadius: "15px",
          padding: "30px",
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: "#fff", fontWeight: "bold" }}>
          Weather Comparison
        </Typography>
        <TextField
         fullWidth
          label="Enter City"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          sx={{
            mb: 2,
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "5px",
          }}
        />
        <Button fullWidth variant="contained" color="primary" onClick={fetchNewCityWeather} sx={{ mb: 3 }}>
          Get Weather
        </Button>

        <Grid container spacing={3} justifyContent="center">
        {currentWeather ? (
    <Grid item xs={12} sm={6}>
      <WeatherCard weather={currentWeather} />
    </Grid>
  ) : (
    
    <Grid item xs={12} sm={6} sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Grid>
  )}

  
  {searchedWeather && (
    <Grid item xs={12} sm={6}>
      <WeatherCard weather={searchedWeather} />
    </Grid>
  )}        </Grid>
      </Container>
    </div>
  );
}

export default App;
