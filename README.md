

# 🌦 Weather App  

A simple weather application that fetches and displays weather details for the current location and searched cities.  

## 🚀 Features  
- Displays current location weather automatically.  
- Allows searching for weather in different cities.  
- Shows temperature, wind speed, humidity, and weather conditions.  
- Responsive and visually appealing UI.  

## 🛠 Tech Stack  
- **React** (with React Router)  
- **MUI (Material-UI)** for styling  
- **OpenWeatherMap API** for weather data  

## 🏗 Project Structure  
The app consists of the following components:  
- **Header** – Navigation bar  
- **Footer** – Footer section  
- **routes** – to define all the routes using createBrowserRouter of react-router-dom
- **rootLayout** – to define the root layout of the project using outlet component of     react-router-dom
- **WeatherCard** – Reusable component for weather details  

- **App** – Main component that handles routing  

## ⚙️ Setup & Installation  
1. Clone the repository:  
   ```bash
   git clone https://github.com/Mohit-Dholpuria/Weather-App.git
   cd Weather-App
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add:  
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```
4. Start the app:  
   ```bash
   npm run dev
   ```

## 📡 API Key Requirement  
To fetch weather data, obtain an API key from [OpenWeatherMap](https://openweathermap.org/) and add it to the `.env` file as shown above.  

---

 🚀