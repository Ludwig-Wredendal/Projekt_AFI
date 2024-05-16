import React, { useEffect, useState } from 'react';
import axios from 'axios';


const WeatherDisplay = () =>{
const [weatherData, setWeatherData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
          params: {
            latitude: 52.52,
            longitude: 13.41,
            hourly: 'temperature_2m'
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
      <ul>
        {weatherData.hourly.temperature_2m.map((temp, index) => (
          <li key={index}>Hour {index}: {temp}°C</li>
        ))}
      </ul>
    </div>
  );

};

  export default WeatherDisplay;
  