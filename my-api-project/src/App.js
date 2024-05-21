import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './components/WeatherDisplay';
import DataDisplay from './components/DataDisplay';
import './App.css';

const App = () => {

const [weatherData, setWeatherData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [highestTemp, setHigestTemp] = useState(null);


useEffect(() => {
  const fetchWeatherData = async () => {
    try {
      const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
        params: {
          latitude: 63.828333,
          longitude: 20.270556,
          hourly: 'temperature_2m',
          forecast_days: 1
        }
      });
      setWeatherData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  fetchWeatherData();
}, []);


useEffect(() => {
  if (weatherData){
    const maxTemp = Math.max(...weatherData.hourly.temperature_2m);
    setHigestTemp(maxTemp);
  }
},[weatherData]);


if (loading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error: {error.message}</div>;
}

if (!weatherData) {
  return <div>No weather data available</div>;
}


return (
  <div>
    <h1>Weather Data</h1>
    <p>Högsta temperatur för dagen blir: {highestTemp}°C</p>
  </div>
  
);

};

  return (
    <div className="App">
      <header className="App-header">
        <h1>Willkommen</h1>
        <h1>Väder och aktivtet app</h1>
        <WeatherDisplay weatherData={weatherData} highestTemp={highestTemp}/>
        <DataDisplay highestTemp={highestTemp} />
      </header>
    </div>
  );

export default App;
